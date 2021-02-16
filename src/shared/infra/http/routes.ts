import {Router} from 'express'
import taskRouter from '@modules/tasks/infra/http/routes/taskRouter'
import userRouter from '@modules/users/infra/http/routes/user.routes'
import sessionRouter from '@modules/users/infra/http/routes/sessions.routes'

const routes = Router()
routes.use('/tasks',taskRouter)
routes.use('/users',userRouter)
routes.use('/sessions',sessionRouter)


export default routes;
