import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { AuthGuard } from '../middlewares/auth.guard';

@Controller('/rest-service/v1/orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  @UseGuards(AuthGuard)
  async createOrder(@Body() body, @Request() req) {
    if (!req.user) {
      return {
        success: false,
        code: 401,
        data: null,
        error: { message: 'User not authenticated', details: null },
        meta: null,
      };
    }
    return await this.orderService.createOrder(body, req.user);
  }

  @Get()
  @UseGuards(AuthGuard)
  async getOrders(@Request() req) {
    if (!req.user) {
      return {
        success: false,
        code: 401,
        data: null,
        error: { message: 'User not authenticated', details: null },
        meta: null,
      };
    }
    return await this.orderService.getOrders(req.user);
  }

  @Get('/test')
  async testEndpoint() {
    console.log('Test endpoint hit');
    return { success: true, message: 'Test endpoint is working' };
  }
}
