import { Controller, Get, Post, Body, Query, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '../middlewares/auth.guard';

@Controller('/rest-service/v1/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  async register(@Body() body) {
    return await this.userService.register(body);
  }

  @Post('/login')
  async login(@Body() body) {
    return await this.userService.login(body);
  }

  @Get()
  @UseGuards(AuthGuard)
  async getUsers(@Query('name') name) {
    return await this.userService.getUsers(name);
  }
}
