import { Provide } from '@midwayjs/decorator';
import { create_bounty,} from '../interface';
import {InjectEntityModel} from "@midwayjs/orm";
import {Repository} from "typeorm";
import {Create_bounty} from "../entity/create_bounty";

@Provide()
export class Create_bountyService {

  @InjectEntityModel(Create_bounty)
  usersModel: Repository<Create_bounty>;

 async create_bounty(options: create_bounty){
   const create = new Create_bounty;
   create.github_user_name =options.github_user_name
   create.bounty_url =options.bounty_url
   create.bounty_state =options.bounty_state
   create.insert_time =options.insert_time
   create.update_time =options.update_time
   create.bounty_level =options.bounty_level
   create.bounty_name =options.bounty_name
   create.bounty_finish_nft_image =options.bounty_finish_nft_image
   create.bounty_content =options.bounty_content
   create.token_name =options.token_name
   create.token_number =options.token_number
   create.participants_number =options.participants_number
   create.submissions_number = options.submissions_number
   await this.usersModel.save(create);
 }

  async create_bounty_remove(options: create_bounty)
  {
    const bounty_url = options.bounty_url
    const data = await this.usersModel.find({
      where:{bounty_url:bounty_url}
    });
    await this.usersModel.remove(data)
  }


  async get_bounty_all(options: create_bounty)
  {
    const data = await this.usersModel.find({
      where:[
        {bounty_state:'Verify'},
        {bounty_state:'Pending'},
        {bounty_state:'Conduct'},]
    });
    return data
  }

  async get_create_bounty_info(options: create_bounty)
  {
    const bounty_url = options.bounty_url
    const data = await this.usersModel.findOne({
      where:{
        bounty_url,
      }
    });
    return data
  }


  async get_create_bounty_complete(options: create_bounty)
  {
    const github_user_name = options.github_user_name
    const data = await this.usersModel.find({
      where:{
        github_user_name,
        bounty_state:"Finish"
      },
      take: 6
    });
    return data
  }

  async get_create_bounty_complete_all(options: create_bounty)
  {
    const github_user_name = options.github_user_name
    const data = await this.usersModel.find({
      where:{
        github_user_name,
        bounty_state:"Finish"
      },
    });
    return data
  }

  async get_create_bounty_conduct(options: create_bounty)
  {
    const github_user_name = options.github_user_name
    const data = await this.usersModel.find({
      where:{
        github_user_name,
        bounty_state:"Conduct"
      },
      take: 6
    });

    return data
  }

  async get_create_bounty_conduct_all(options: create_bounty)
  {
    const github_user_name = options.github_user_name
    const data = await this.usersModel.find({
      where:{
        github_user_name,
        bounty_state:"Conduct"
      },
    });

    return data
  }

  async get_create_bounty_pending(options: create_bounty)
  {
    const github_user_name = options.github_user_name
    const data = await this.usersModel.find({
      where:{
        github_user_name,
        bounty_state:"Pending"
      },
      take: 6
    });

    return data
  }

  async get_create_bounty_pending_all(options: create_bounty)
  {
    const github_user_name = options.github_user_name
    const data = await this.usersModel.find({
      where:{
        github_user_name,
        bounty_state:"Pending"
      },
    });

    return data
  }

  async get_create_bounty_review(options: create_bounty)
  {
    const github_user_name = options.github_user_name
    const data = await this.usersModel.find({
      where:{
        github_user_name,
        bounty_state:"Review"
      },
      take: 6
    });

    return data
  }

  async get_create_bounty_review_all(options: create_bounty)
  {
    const github_user_name = options.github_user_name
    const data = await this.usersModel.find({
      where:{
        github_user_name,
        bounty_state:"Review"
      },
    });

    return data
  }

  async get_create_bounty_verify(options: create_bounty)
  {
    const github_user_name = options.github_user_name
    const data = await this.usersModel.find({
      where:{
        github_user_name,
        bounty_state:"Verify"
      },
      take: 6
    });
    return data
  }

  async get_create_bounty_verify_all(options: create_bounty)
  {
    const github_user_name = options.github_user_name
    const data = await this.usersModel.find({
      where:{
        github_user_name,
        bounty_state:"Verify"
      },
    });
    return data
  }


}
