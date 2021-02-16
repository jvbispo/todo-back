import ICategoryRepository from "../ICategoryRepository";
import Category from "@modules/tasks/infra/typeorm/entities/Category";
import {uuid} from 'uuidv4'


export default class FakeCategoryRepository implements ICategoryRepository {
  private categories: Category[]

  constructor(){
    this.categories = []
  }
  public async create(name: string): Promise<Category>{
    const category = new Category()

    Object.assign(category,{
      id: uuid(),
      name
    })

    this.categories.push(category)

    return category
  }

  public async find(name:string): Promise<Category | undefined> {
    const categoryIndex = this.categories.findIndex(item => item.name === name)

    return this.categories[categoryIndex]
  }
}
