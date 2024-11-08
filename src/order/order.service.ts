import { Injectable } from '@nestjs/common';
import { dbQueries } from '../queries/order.queries';
import { dbPool } from '../database/database.module';

@Injectable()
export class OrderService {
  async createOrder(
    body: { productId: any; quantity: any },
    user: { role: string; userId: any },
  ) {
    if (!user || user.role !== 'buyer') {
      return {
        success: false,
        code: 403,
        data: null,
        error: {
          message: 'Forbidden: Only buyers can place orders',
          details: null,
        },
        meta: null,
      };
    }
    const { productId, quantity } = body;
    await dbPool.query(dbQueries.insertOrder, [
      user.userId,
      productId,
      quantity,
    ]);
    return { success: true, code: 201, data: null, error: null, meta: null };
  }

  async getOrders(user: { userId: any }) {
    if (!user || !user.userId) {
      return {
        success: false,
        code: 400,
        data: null,
        error: { message: 'Invalid user data', details: null },
        meta: null,
      };
    }
    const res = await dbPool.query(dbQueries.selectOrdersByUserId, [
      user.userId,
    ]);
    return {
      success: true,
      code: 200,
      data: res.rows,
      error: null,
      meta: null,
    };
  }
}
