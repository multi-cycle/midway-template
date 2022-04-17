import { Provide } from '@midwayjs/decorator';
import {InjectEntityModel} from "@midwayjs/orm";
import {Create_bounty} from "../entity/create_bounty";
import {Repository} from "typeorm";
import {create_bounty } from '../interface';


@Provide()
export class Alter_create_bountyService {

  @InjectEntityModel(Create_bounty)
  usersModel: Repository<Create_bounty>;

  async create_bounty_review_conduct(options: create_bounty)
  {
    const bounty_url = options.bounty_url
    const data = await this.usersModel.findOne({
      where:{
        bounty_url,
      },
    });
    data.bounty_state = "Conduct"
    await this.usersModel.save(data)
    return data
  }

  async create_bounty_pending_conduct(options: create_bounty)
  {
    const bounty_url = options.bounty_url
    const data = await this.usersModel.findOne({
      where:{
        bounty_url,
      },
    });
    data.bounty_state = "Pending"
    await this.usersModel.save(data)
    return data
  }

  async create_bounty_pending_verify(options: create_bounty)
  {
    const bounty_url = options.bounty_url
    const data = await this.usersModel.findOne({
      where:{
        bounty_url,
      },
    });
    data.bounty_state = "Verify"
    await this.usersModel.save(data)
    return data
  }

  async create_bounty_verify_finish(options: create_bounty)
  {
    const bounty_url = options.bounty_url
    const data = await this.usersModel.findOne({
      where:{
        bounty_url,
      },
    });
    data.bounty_state = "Finish"
    await this.usersModel.save(data)
    return data
  }

  async create_bounty_participants(options: create_bounty)
  {
    const bounty_url = options.bounty_url
    const participants_number = options.participants_number
    const data = await this.usersModel.findOne({
      where:{
        bounty_url,
      },
    });
    data.participants_number = Number(participants_number) + Number(1)
    await this.usersModel.save(data)
    return data
  }

  async create_bounty_submissions(options: create_bounty)
  {
    const bounty_url = options.bounty_url
    const submissions_number = options.submissions_number
    const data = await this.usersModel.findOne({
      where:{
        bounty_url,
      },
    });
    data.submissions_number = Number(submissions_number) + Number(1)
    await this.usersModel.save(data)
    return data
  }

}
