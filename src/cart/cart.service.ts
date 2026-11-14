import { Injectable } from '@nestjs/common';
import { ProductsService } from '../products/products.service';

@Injectable()
export class CartService {
  private cart: any[] = [];
  private nextId = 1;

  constructor(private readonly productsService: ProductsService) {}

  findAll() { return this.cart; }

  add(body: any) {
    const product = this.productsService.findOne(Number(body.productId));
    if (!product) return { message: 'Product not found' };

    const item = {
      id: this.nextId++,
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: body.quantity || 1,
    };

    this.cart.push(item);
    return { message: 'Product added to cart', item };
  }

  update(id: number, body: any) {
    const item = this.cart.find((item) => item.id === id);
    if (!item) return { message: 'Cart item not found' };
    if (body.quantity !== undefined) item.quantity = body.quantity;
    return item;
  }

  remove(id: number) {
    const index = this.cart.findIndex((item) => item.id === id);
    if (index === -1) return { message: 'Cart item not found' };
    const deletedItem = this.cart.splice(index, 1);
    return { message: 'Item removed from cart', item: deletedItem[0] };
  }

  clearCart() { this.cart = []; }
}
