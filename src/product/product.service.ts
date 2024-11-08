import { Injectable } from '@nestjs/common';
import { dbQueries } from '../queries/product.queries';
import { dbPool } from '../database/database.module';

@Injectable()
export class ProductService {
  async createProduct(
    body: { name: any; price: any; quantity: any },
    user: { role: string; userId: any },
  ) {
    if (!user || !user.role) {
      return {
        success: false,
        code: 400,
        data: null,
        error: { message: 'Invalid user data', details: null },
        meta: null,
      };
    }
    if (user.role !== 'seller') {
      return {
        success: false,
        code: 403,
        data: null,
        error: { message: 'Forbidden', details: null },
        meta: null,
      };
    }
    const { name, price, quantity } = body;
    await dbPool.query(dbQueries.insertProduct, [
      name,
      price,
      quantity,
      user.userId,
    ]);
    return { success: true, code: 201, data: null, error: null, meta: null };
  }

  async getProducts() {
    const res = await dbPool.query(dbQueries.selectAllProducts);
    return {
      success: true,
      code: 200,
      data: res.rows,
      error: null,
      meta: null,
    };
  }
}
