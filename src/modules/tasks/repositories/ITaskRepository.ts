import ICreateTaks from "../dtos/ICreateTask";
import Task from "../infra/typeorm/entities/Task";
import IFindOneDTO from "../dtos/IFindOneDTO";

export default interface ITaskRepository{
  create(data: ICreateTaks): Promise<Task>
  find(user_id:string): Promise<Task[] | undefined>
  findOne(data:IFindOneDTO): Promise<Task | undefined>
  delete(data: IFindOneDTO): Promise<void>
}
