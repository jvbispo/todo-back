import 'reflect-metadata'
import {inject,injectable} from 'tsyringe'
import ITaskRepository from '../repositories/ITaskRepository';
import ICategoryRepository from '../repositories/ICategoryRepository';
import Task from '../infra/typeorm/entities/Task';
import Category from '../infra/typeorm/entities/Category';
import IUserRepository from '@modules/users/repositories/IUserRepository';

interface IRequest {
  user_id: string;
  title: string;
  body: string;
  category: string;
  date_start?: Date;
  date_end?: Date;
}



@injectable()
export default class CreateTaskService{

  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository,
    @inject("UserRepository")
    private userRepository: IUserRepository
  ){}

    public async execute({title,body,category,date_end,date_start,user_id}: IRequest): Promise<Task>{
      let isCategory = await this.categoryRepository.find(category)
      let categoryId: string;

      const isUser = await this.userRepository.findOne(user_id)
      if(!isUser){
        throw new Error('not a valid id')
      }

      if(isCategory === undefined){
        const newCategory = await this.categoryRepository.create(category)
        categoryId = newCategory.id
      }else {
        categoryId = isCategory?.id
       }

      const task = await this.taskRepository.create({title,body,category_id: categoryId,date_start,date_end,user_id})


      return task
    }

}
