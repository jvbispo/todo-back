import { injectable, inject } from "tsyringe";
import ITaskRepository from "../repositories/ITaskRepository";
import Task from "../infra/typeorm/entities/Task";


@injectable()
export default class FindTasksService {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository
  ){}


  public async execute(user_id:string): Promise<Task[] |undefined> {
  const tasks = await this.taskRepository.find(user_id);


    return tasks;
  }
}
