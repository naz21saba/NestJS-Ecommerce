import { Injectable } from '@nestjs/common';
import { CartService } from '../cart/cart.service';

@Injectable()
export class OrdersService {
  private orders: any[] = [];
  private nextId = 1;

  constructor(private readonly cartService: CartService) {}

  findAll() { return this.orders; }

  checkout(body: any) {
    const cartItems = this.cartService.findAll();
    if (cartItems.length === 0) return { message: 'Cart is empty' };

    let total = 0;
    cartItems.forEach((item) => {
      total = total + item.price * item.quantity;
    });

    const order = {
      id: this.nextId++,
      customerName: body.customerName,
      address: body.address,
      items: [...cartItems],
      total,
      status: 'Placed',
    };

    this.orders.push(order);
    this.cartService.clearCart();

    return { message: 'Order placed successfully', order };
  }
}
