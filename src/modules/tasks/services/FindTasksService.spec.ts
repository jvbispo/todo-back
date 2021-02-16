import FakeTasksRepository from "../repositories/fakes/FakeTaskRepository"
import FindTasksService from "./FindTasksServices";
import FakeCategoryRepository from "../repositories/fakes/FakeCategoryRepository";
import CreateTaskService from "./CreateTaskService";
import FakeUsersRepository from "@modules/users/repositories/fake/FakeUsersRepository";

describe('FindTasks', ()=>{
  let fakeTasksRepository: FakeTasksRepository;
  let findTasksService: FindTasksService;
  let createTaskService: CreateTaskService
  let fakeCategoryRepository: FakeCategoryRepository
  let fakeUserRepository: FakeUsersRepository

  beforeEach(()=>{
    fakeTasksRepository = new FakeTasksRepository();
    fakeCategoryRepository = new FakeCategoryRepository()
    fakeUserRepository = new FakeUsersRepository()
    createTaskService = new CreateTaskService(fakeTasksRepository,fakeCategoryRepository,fakeUserRepository)
    findTasksService = new FindTasksService(fakeTasksRepository)
  })


  it('should be able to find all tasks', async ()=>{
    const user = await fakeUserRepository.create({
      name: 'joao',
      email: 'joao@test.com',
      password: '123456'
    })
    const task = await createTaskService.execute({title: 'algo',body: 'alguma coisa',category: 'categoria',user_id: user.id})
    const tasks = await findTasksService.execute(user.id)

    expect(tasks).toEqual(expect.arrayContaining([task]))
  })
})
