import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.productsService.findOne(id);
  }

  @Post()
  async create(@Body() product: any) {
    return this.productsService.create(product);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() product: any) {
    return this.productsService.update(id, product);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.productsService.remove(id);
  }

}
