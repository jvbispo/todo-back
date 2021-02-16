import {Request,Response} from 'express'
import {container} from 'tsyringe'
import CreateTaskService from 'modules/tasks/services/CreateTaskService'
import FindTasksService from 'modules/tasks/services/FindTasksServices'
import DeleteTaskService from 'modules/tasks/services/DeleteTaskService'

export default class TasksController {
  public async create(req:Request,res:Response):Promise<Response>{
    try{
      const {title,body,category,date_start,date_end} = req.body
      const user_id = req.user.id;
      const createTaskService = container.resolve(CreateTaskService)

      const task = await createTaskService.execute({title,body,category,date_start,date_end,user_id})

      return res.json(task)
    }catch(err){
      return res.json({error: err.message})
    }
  }

  public async index(req: Request, res:Response): Promise<Response>{
    try{
        const findTasksService = container.resolve(FindTasksService)
        const user_id = req.user.id;

        const tasks = await findTasksService.execute(user_id)

        return res.json(tasks)
    } catch(err){
      return res.json({error: err.message})
    }
  }

  public async delete(req: Request, res: Response): Promise<Response>{
    try{
      const {id} = req.params
      const deleteTasksService = container.resolve(DeleteTaskService)
      const user_id = req.user.id;

      await deleteTasksService.execute({id,user_id})

      return res.status(200).send()
  } catch(err){
    return res.json({error: err.message})
  }
  }
}
