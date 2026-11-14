import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  signup(@Body() body: any) { return this.usersService.signup(body); }

  @Post('login')
  login(@Body() body: any) { return this.usersService.login(body); }

  @Get('users')
  getUsers() { return this.usersService.findAll(); }
}
