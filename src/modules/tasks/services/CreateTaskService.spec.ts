import CreateTaskService from "./CreateTaskService"
import FakeTasksRepository from "../repositories/fakes/FakeTaskRepository"
import FakeCategoryRepository from "../repositories/fakes/FakeCategoryRepository";
import FakeUsersRepository from "@modules/users/repositories/fake/FakeUsersRepository";

describe('Create Tasks', ()=> {
  let createTaskSerivice: CreateTaskService
  let fakeTaskRepository: FakeTasksRepository;
  let fakeCategoryRepository: FakeCategoryRepository;
  let fakeUserRepository: FakeUsersRepository;
  beforeEach(()=>{
    fakeTaskRepository = new FakeTasksRepository()
    fakeCategoryRepository = new FakeCategoryRepository()
    fakeUserRepository = new FakeUsersRepository;
    createTaskSerivice= new CreateTaskService(fakeTaskRepository,fakeCategoryRepository,fakeUserRepository)
  })
  it('should be able to create a task',async ()=>{
    const user = await fakeUserRepository.create({
      name: 'joao',
      email: 'joao@test.com',
      password: '123456'
    })
    const task = await createTaskSerivice.execute({title: 'algo',body: 'alguma coisa',category: 'categoria',user_id: user.id})

    expect(task.title).toBe('algo')
    expect(task.body).toBe('alguma coisa')
    expect(task.user_id).toEqual(user.id)

  })




})
