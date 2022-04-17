import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import {Givetoken} from "../entity/givetoken";
import {give_token,} from "../interface";

@Provide()
export class Give_tokenService {
  @InjectEntityModel(Givetoken)
  usersModel: Repository<Givetoken>;


   async faucet (options: give_token) {
    const givetoken = new Givetoken
     givetoken.github_user_name = options.github_user_name
     givetoken.token = options.token
     givetoken.address = options.address
    await this.usersModel.save(givetoken);
  }

  async get_faucet_info(options: give_token)
  {
    const github_user_name = options.github_user_name;

    const data = await this.usersModel.findOne({
      where:{
        github_user_name,
      }
    });
    return data
  }
  async get_faucet_github_user_name(options: give_token){
    const address = options.address
    const data = await this.usersModel.findOne({
      where:{address}
    });
    return data
  }

  async post_deduction_token(options: give_token)
  {
    const github_user_name = options.github_user_name;
    const cost =options.cost
    const token = options.token
    const data = await this.usersModel.findOne({
      where:{
        github_user_name,
      }});
    data.token = Number(token)-Number(cost)
    await this.usersModel.save(data)
  }

  async post_faucet_token(options: give_token)
  {
    const github_user_name = options.github_user_name;
    const token = options.token
    const data = await this.usersModel.findOne({
      where:{
        github_user_name,
      }});
    data.token = Number(token) +Number(20)
    await this.usersModel.save(data)
  }

  async post_token_refund(options: give_token)
  {
    const github_user_name = options.github_user_name;
    const refund = options.refund
    const token = options.token
    const data = await this.usersModel.findOne({
      where:{
        github_user_name,
      }});
    data.token = Number(token) +Number(refund)
    await this.usersModel.save(data)
  }



}
