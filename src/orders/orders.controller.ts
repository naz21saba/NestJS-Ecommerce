import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('checkout')
  checkout(@Body() body: any) { return this.ordersService.checkout(body); }

  @Get('orders')
  getOrders() { return this.ordersService.findAll(); }
}
