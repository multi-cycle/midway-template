import { Provide } from '@midwayjs/decorator';
import {Admin_user} from '../interface';
import {InjectEntityModel} from "@midwayjs/orm";
import {Repository} from "typeorm";
import { Admin } from '../entity/admin';

@Provide()
export class adminService {
  @InjectEntityModel(Admin)
  usersModel: Repository<Admin>;

 async get_admin(input: Admin_user){
   const github_user_name =  input.github_user_name;
   const result = await this.usersModel.findOne({
     where: {github_user_name},
   });
   return  result
 }
}
