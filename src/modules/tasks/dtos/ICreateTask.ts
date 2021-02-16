export default interface ICreateTaks{
  user_id:string;
  title: string;
  body: string;
  category_id: string;
  date_start?: Date;
  date_end?: Date;
}
