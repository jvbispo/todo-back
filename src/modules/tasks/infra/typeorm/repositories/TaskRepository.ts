import ITaskRepository from "modules/tasks/repositories/ITaskRepository";
import { Repository, getRepository } from "typeorm";
import Task from "../entities/Task";
import ICreateTaks from "modules/tasks/dtos/ICreateTask";
import IFindOneDTO from "@modules/tasks/dtos/IFindOneDTO";




export default class TaskRepository implements ITaskRepository{
  private ormRepository: Repository<Task>

  constructor(){
    this.ormRepository = getRepository(Task)
  }


  public async create({body,category_id,title,date_end,date_start,user_id}: ICreateTaks): Promise<Task>{
    const task = this.ormRepository.create({
      title,body,category_id,date_end,date_start,user_id
    })

    await this.ormRepository.save(task)

    return task
  }

  public async findOne({user_id,id}:IFindOneDTO): Promise<Task | undefined>{
    const task = await this.ormRepository.findOne({where: {
      id,user_id
    }})

    if(!task){
      return undefined
    }

    return task
  }

  public async find(user_id:string): Promise<Task[] | undefined>{
     const tasks = await this.ormRepository.find({where: {user_id}})

     return tasks
  }

  public async delete({id,user_id}:IFindOneDTO): Promise<void>{
    const task = await this.findOne({id,user_id})
    if(task){
     await this.ormRepository.remove(task)
    }
  }
}
