import 'reflect-metadata'
import '@modules/users/providers/index'
import {container} from 'tsyringe'
import ITaskRepository from 'modules/tasks/repositories/ITaskRepository'
import TaskRepository from 'modules/tasks/infra/typeorm/repositories/TaskRepository'
import ICategoryRepository from 'modules/tasks/repositories/ICategoryRepository'
import CategoryRepository from 'modules/tasks/infra/typeorm/repositories/CategoryRepository'
import IUserRepository from '@modules/users/repositories/IUserRepository'
import UserRepository from '@modules/users/infra/typeorm/repositories/UserRepository'

container.registerSingleton<ITaskRepository>('TaskRepository', TaskRepository)

container.registerSingleton<ICategoryRepository>('CategoryRepository',CategoryRepository)

container.registerSingleton<IUserRepository>("UserRepository", UserRepository)
