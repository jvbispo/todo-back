import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import Category from "./Category";
import User from "@modules/users/infra/typeorm/entities/User";


@Entity('tasks')
class Task{
@PrimaryGeneratedColumn('uuid')
id: string;

@Column()
title: string

@Column()
body: string;

@Column()
category_id: string;

@Column()
user_id: string;

@ManyToOne(() => Category,{eager: true,cascade:true})
@JoinColumn({name: 'category_id'})
category: Category

@ManyToOne(() => User)
@JoinColumn({name: 'user_id'})
user: User

@Column()
date_start: Date

@Column()
date_end: Date
}


export default Task
