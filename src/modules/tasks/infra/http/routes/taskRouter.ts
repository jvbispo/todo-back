import {Router} from 'express'
import TasksController from '../controllers/TasksController';
import authMiddlware from '@modules/users/infra/http/middlwares/authMiddlware'

const taskController = new TasksController()
const tasksRouter = Router();

tasksRouter.use(authMiddlware)
tasksRouter.post('/', taskController.create )
tasksRouter.get('/', taskController.index)
tasksRouter.delete('/:id', taskController.delete)

export default tasksRouter;
