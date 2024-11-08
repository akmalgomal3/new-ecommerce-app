import { Injectable } from '@nestjs/common';
import { dbQueries } from '../queries/order.queries';
import { dbPool } from '../database/database.module';
import { createResponse } from '../utils/response.util';

@Injectable()
export class OrderService {
  async createOrder(
    body: { productId: any; quantity: any },
    user: { role: string; userId: any },
  ) {
    if (!user || user.role !== 'buyer') {
      return createResponse(false, 403, null, {
        message: 'Forbidden: Only buyers can place orders',
        details: null,
      });
    }
    const { productId, quantity } = body;
    await dbPool.query(dbQueries.insertOrder, [
      user.userId,
      productId,
      quantity,
    ]);
    return createResponse(true, 201);
  }

  async getOrders(user: { userId: any }) {
    if (!user || !user.userId) {
      return createResponse(false, 400, null, {
        message: 'Invalid user data',
        details: null,
      });
    }
    const res = await dbPool.query(dbQueries.selectOrdersByUserId, [
      user.userId,
    ]);
    return createResponse(true, 200, res.rows);
  }
}
