import { Provide } from '@midwayjs/decorator';
import {InjectEntityModel} from "@midwayjs/orm";
import {Claim_bounty} from "../entity/claim_bounty";
import {Repository} from "typeorm";
import {claim_bounty} from "../interface";


@Provide()
export class Alter_claim_bountyService {

  @InjectEntityModel(Claim_bounty)
  usersModel: Repository<Claim_bounty>;

  async claim_bounty_pending_review(options: claim_bounty)
  {
    const claim_bounty_url = options.claim_bounty_url
    const claim_github_user_name = options.claim_github_user_name

    const data = await this.usersModel.findOne({
      where:{
        claim_bounty_url,claim_github_user_name
      },
    });

    console.log(data)
    data.claim_bounty_state ="Review"
    await this.usersModel.save(data)
    return data
  }

  async claim_bounty_review_withdraw(options: claim_bounty)
  {
    const claim_bounty_url = options.claim_bounty_url
    const claim_github_user_name = options.claim_github_user_name

    const data = await this.usersModel.findOne({
      where:{
        claim_bounty_url,claim_github_user_name
      },
    });
    data.claim_bounty_state = "Withdraw"
    await this.usersModel.save(data)
    return data
  }

  async claim_bounty_withdraw_finish(options: claim_bounty)
  {
    const claim_bounty_url = options.claim_bounty_url
    const claim_github_user_name = options.claim_github_user_name

    const data = await this.usersModel.findOne({
      where:{
        claim_bounty_url,claim_github_user_name
      },
    });
    data.claim_bounty_state = "Finish"
    await this.usersModel.save(data)
    return data
  }

  async claim_bounty_all_finish(options: claim_bounty)
  {
    const claim_bounty_url = options.claim_bounty_url

    const data = await this.usersModel.findOne({
      where:{
        claim_bounty_url
      },
    });
    data.claim_bounty_state = "Finish"
    await this.usersModel.save(data)
    return data
  }

  async claim_bounty_submissions(options: claim_bounty)
  {
    const claim_bounty_url = options.claim_bounty_url
    const submissions_number = options.submissions_number
    let data = await this.usersModel.find({
      where:{
        claim_bounty_url,
      },
    });
    const length = data.length
    for (let i = 0;i<length;i++){
      data[i].submissions_number = Number(submissions_number + 1)
    }
    await this.usersModel.save(data)
    return data
  }

  async claim_bounty_participants_number(options: claim_bounty)
  {
    const claim_bounty_url = options.claim_bounty_url
    const participants_number = options.participants_number
    let data = await this.usersModel.find({
      where:{
        claim_bounty_url,
      },
    });
    const length = data.length
    for (let i = 0;i<length;i++){
      data[i].participants_number = Number(participants_number + 1)
    }
    await this.usersModel.save(data)
    return data
  }






}
