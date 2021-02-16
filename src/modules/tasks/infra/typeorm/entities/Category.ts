import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";


@Entity('categories')
class Category{
@PrimaryGeneratedColumn('uuid')
id: string;

@Column()
name: string;

@CreateDateColumn()
created_at: Date

}


export default Category
