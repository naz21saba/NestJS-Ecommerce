import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = [
    { id: 1, name: 'Minimal Watch', price: 59, category: 'Accessories' },
    { id: 2, name: 'Urban Sneakers', price: 84, category: 'Footwear' },
    { id: 3, name: 'Classic Handbag', price: 72, category: 'Bags' },
    { id: 4, name: 'Studio Headphones', price: 96, category: 'Electronics' },
  ];

  private nextId = 5;

  findAll() { return this.products; }

  findOne(id: number) {
    return this.products.find((product) => product.id === id);
  }

  create(body: any) {
    const product = {
      id: this.nextId++,
      name: body.name,
      price: body.price,
      category: body.category,
    };
    this.products.push(product);
    return product;
  }

  update(id: number, body: any) {
    const product = this.findOne(id);
    if (!product) return { message: 'Product not found' };
    if (body.name !== undefined) product.name = body.name;
    if (body.price !== undefined) product.price = body.price;
    if (body.category !== undefined) product.category = body.category;
    return product;
  }

  remove(id: number) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) return { message: 'Product not found' };
    const deletedProduct = this.products.splice(index, 1);
    return { message: 'Product deleted', product: deletedProduct[0] };
  }
}
