import { Injectable } from '@nestjs/common';
import { dbQueries } from '../queries/user.queries';
import { dbPool, redisClient } from '../database/database.module';
import { bcrypt, jwt } from '../utils/utils.module';
import { createResponse } from '../utils/response.util';

@Injectable()
export class UserService {
  async register(body: { username: any; password: any; role: any }) {
    const { username, password, role } = body;
    const hash = await bcrypt.hash(password, 10);
    await dbPool.query(dbQueries.insertUser, [username, hash, role]);
    return createResponse(true, 201);
  }

  async login(body: { username: any; password: any }) {
    const { username, password } = body;
    const res = await dbPool.query(dbQueries.selectUserByUsername, [username]);
    if (res.rows.length === 0) {
      return createResponse(false, 404, null, {
        message: 'User not found',
        details: null,
      });
    }
    const user = res.rows[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return createResponse(false, 401, null, {
        message: 'Invalid password',
        details: null,
      });
    }
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
    );
    return createResponse(true, 200, { token });
  }

  async getUsers(name: any) {
    let cacheKey = 'users';
    let query = dbQueries.selectAllUsers;
    let params = [];
    if (name) {
      cacheKey += `:name:${name}`;
      query = dbQueries.selectUsersByName;
      params = [`%${name}%`];
    }
    let users = await redisClient.get(cacheKey);
    if (!users) {
      const res = await dbPool.query(query, params);
      users = res.rows;
      await redisClient.set(cacheKey, JSON.stringify(users), { EX: 60 });
    } else {
      users = JSON.parse(users);
    }
    return createResponse(true, 200, users);
  }
}
