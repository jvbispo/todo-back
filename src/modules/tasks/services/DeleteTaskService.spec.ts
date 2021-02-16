import 'reflect-metadata'
import DeleteTaskService from "./DeleteTaskService";
import FakeTasksRepository from "../repositories/fakes/FakeTaskRepository";
import CreateTaskService from "./CreateTaskService";
import FakeCategoryRepository from "../repositories/fakes/FakeCategoryRepository";
import FakeUsersRepository from '@modules/users/repositories/fake/FakeUsersRepository';

describe('DeleteTaskService',()=>{
  let createTaskService: CreateTaskService
  let fakeCategoryRepository: FakeCategoryRepository
  let deleteTaskService: DeleteTaskService
  let fakeTaskRepository: FakeTasksRepository
  let fakeUserRepository: FakeUsersRepository
  beforeEach(()=>{
    fakeTaskRepository = new FakeTasksRepository()
    fakeUserRepository = new FakeUsersRepository()
    fakeCategoryRepository = new FakeCategoryRepository()

    deleteTaskService= new DeleteTaskService(fakeTaskRepository,fakeUserRepository)
    createTaskService = new CreateTaskService(fakeTaskRepository, fakeCategoryRepository,fakeUserRepository)
  })

  it('should be able to delete a task', async ()=>{
    const user = await fakeUserRepository.create({
      name: 'joao',
      email: 'joao@test.com',
      password: '123456'
    })

    const task = await createTaskService.execute({title: 'titulo',body: 'task',category: 'categoria',user_id: user.id})
    const del = jest.spyOn(fakeTaskRepository,'delete')
    await deleteTaskService.execute({id: task.id, user_id: user.id})

    expect(del).toBeCalledWith({id:task.id, user_id:user.id})

  })

  it('should not be able to delete a task with a wrong id', async ()=> {
    await expect(deleteTaskService.execute({id: 'wrong id', user_id: 'wrong user id'})).rejects.toBeInstanceOf(Error)
  })
})
