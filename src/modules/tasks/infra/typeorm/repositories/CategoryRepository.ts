import ICategoryRepository from "../../../repositories/ICategoryRepository";
import Category from "../entities/Category";
import {uuid} from 'uuidv4'
import { Repository, getRepository } from "typeorm";


export default class CategoryRepository implements ICategoryRepository {
  private ormRepository: Repository<Category>

  constructor(){
    this.ormRepository = getRepository(Category)
  }
  public async create(name: string): Promise<Category>{
    const category =  this.ormRepository.create({name})

    await this.ormRepository.save(category)

    return category
  }

  public async find(name:string): Promise<Category | undefined> {
    const category = await this.ormRepository.findOne({where: {name}})

    return category
  }
}
