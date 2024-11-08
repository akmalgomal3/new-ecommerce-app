import {
  Request,
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { AuthGuard } from '../middlewares/auth.guard';

@Controller('/rest-service/v1/products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  @UseGuards(AuthGuard)
  async createProduct(@Body() body, @Request() req) {
    return await this.productService.createProduct(body, req.user);
  }

  @Get()
  async getProducts() {
    return await this.productService.getProducts();
  }
}
