import { Injectable } from '@nestjs/common';
import { dbQueries } from '../queries/product.queries';
import { dbPool } from '../database/database.module';
import { createResponse } from '../utils/response.util';

@Injectable()
export class ProductService {
  async createProduct(
    body: { name: any; price: any; quantity: any },
    user: { role: string; userId: any },
  ) {
    if (!user || !user.role) {
      return createResponse(false, 400, null, {
        message: 'Invalid user data',
        details: null,
      });
    }
    if (user.role !== 'seller') {
      return createResponse(false, 403, null, {
        message: 'Forbidden',
        details: null,
      });
    }
    const { name, price, quantity } = body;
    await dbPool.query(dbQueries.insertProduct, [
      name,
      price,
      quantity,
      user.userId,
    ]);
    return createResponse(true, 201);
  }

  async getProducts() {
    const res = await dbPool.query(dbQueries.selectAllProducts);
    return createResponse(true, 200, res.rows);
  }
}
