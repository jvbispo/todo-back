import Category from "../infra/typeorm/entities/Category";

export default interface ICategoryRepository {
  create(name:string): Promise<Category>;
  find(name:string): Promise<Category | undefined>
}
