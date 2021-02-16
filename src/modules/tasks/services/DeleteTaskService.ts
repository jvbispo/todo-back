import { inject, injectable } from "tsyringe";
import ITaskRepository from "../repositories/ITaskRepository";
import IUserRepository from "@modules/users/repositories/IUserRepository";

interface IRequest {
  id: string;
  user_id: string;
}

@injectable()
export default class DeleteTaskService {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
    @inject('UserRepository')
    private userRepository: IUserRepository
  ){}

  public async execute({id,user_id}:IRequest): Promise<void>{
    const isUser = await this.userRepository.findOne(user_id)
    if(!isUser) {
      throw new Error('not a valid id')
    }


    const task = await this.taskRepository.findOne({user_id,id})
    if(task === undefined){
      throw new Error('task was not found')
    }

    await this.taskRepository.delete({user_id,id})
  }
}
