import { Provide } from '@midwayjs/decorator';
import {BindGithubUser,} from '../interface';
import {Bind_github_user} from "../entity/bind_github_user";
import {InjectEntityModel} from "@midwayjs/orm";
import {Repository} from "typeorm";

@Provide()
export class bind_github_user_address {
  @InjectEntityModel(Bind_github_user)
  usersModel: Repository<Bind_github_user>;

 async get_github_user_address(input: BindGithubUser){
   const github_user_name =  input.github_user_name;
   const result = await this.usersModel.findOne({
     where: {github_user_name},
   });
   return  result
 }

  async get_github_user_name(input: BindGithubUser){
    const address =  input.address;
    const result = await this.usersModel.findOne({
      where: {address},
    });
    return  result
  }

  async bind_github_user(options: BindGithubUser) {

    const user = new Bind_github_user();
    user.github_user_name = options.github_user_name
    user.address = options.address
    const userResult = await this.usersModel.save(user);
    console.log(userResult);
  }


}
