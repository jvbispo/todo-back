import ITaskRepository from "../ITaskRepository";
import Task from "../../infra/typeorm/entities/Task";
import ICreateTasks from "@modules/tasks/dtos/ICreateTask";
import {uuid} from 'uuidv4'
import IFindOneDTO from "@modules/tasks/dtos/IFindOneDTO";


export default class FakeTasksRepository implements ITaskRepository{
  private tasks: Task[]

  constructor(){
    this.tasks = []
  }

  public async create({body,category_id,title,date_end,date_start,user_id}: ICreateTasks): Promise<Task>{
    const task = new Task()
    Object.assign(task,{ id: uuid(),title,body,category_id,date_start,date_end,user_id
    })

    this.tasks.push(task)

    return task
  }



  public async find(user_id: string): Promise<Task[] | undefined>{
    const tasks = this.tasks

    return tasks;
  }

  public async findOne({id,user_id}: IFindOneDTO): Promise<Task | undefined>{
    const taskIndex = this.tasks.findIndex(item => (item.id === id)&&(item.user_id === user_id))


    return this.tasks[taskIndex]

  }

  public async delete({id,user_id}:IFindOneDTO): Promise<void>{
    const taskIndex = this.tasks.findIndex(item => (item.id === id)&&(item.user_id === user_id))

    this.tasks.splice(taskIndex,1)
  }
}
