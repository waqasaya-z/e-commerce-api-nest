import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category.entity";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
   
    @Column({nullable: true})
    description: string

    @Column()
    price: number

    @Column()
    rating: number

    @JoinTable()
    @ManyToMany(type => Category, (category) => category.product, {
        cascade: true
    })
    categories: Category[]
}