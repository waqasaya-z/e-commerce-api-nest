import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>
    ){}

    findAll() {
        return this.productRepository.find()
    }

   async findOne(id: number) {
        const product =  await this.productRepository.findOneBy({ id });

        console.log("PRODUCT", product);

        if (!product) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }

        return product;
    }

    async create(product: Product) {
        const newProduct = this.productRepository.create(product);
        return this.productRepository.save(newProduct);
    }

    async update(id: number, product: Product) {
        const existingProduct = await this.productRepository.findOneBy({ id });

        if (!existingProduct) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }

        const updatedProduct = Object.assign(existingProduct, product);
        return this.productRepository.save(updatedProduct);
    }

    async remove(id: number) {
        const product = await this.productRepository.findOneBy({ id });

        if (!product) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }

        return this.productRepository.remove(product);
    }

}
