import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts() { return this.productsService.findAll(); }

  @Get(':id')
  getOneProduct(@Param('id') id: string) {
    return this.productsService.findOne(Number(id));
  }

  @Post()
  addProduct(@Body() body: any) { return this.productsService.create(body); }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() body: any) {
    return this.productsService.update(Number(id), body);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productsService.remove(Number(id));
  }
}
