import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  getCart() { return this.cartService.findAll(); }

  @Post()
  addToCart(@Body() body: any) { return this.cartService.add(body); }

  @Put(':id')
  updateCartItem(@Param('id') id: string, @Body() body: any) {
    return this.cartService.update(Number(id), body);
  }

  @Delete(':id')
  removeCartItem(@Param('id') id: string) {
    return this.cartService.remove(Number(id));
  }
}
