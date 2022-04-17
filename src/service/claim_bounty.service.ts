import { Provide } from '@midwayjs/decorator';
import {claim_bounty} from '../interface';
import {InjectEntityModel} from "@midwayjs/orm";
import {Repository} from "typeorm";
import {Claim_bounty} from "../entity/claim_bounty";

@Provide()
export class Claim_bountyService {
  @InjectEntityModel(Claim_bounty)
  usersModel: Repository<Claim_bounty>;

  async insert(options: claim_bounty) {
    const user = new Claim_bounty();
    user.claim_bounty_url = options.claim_bounty_url;
    user.claim_github_user_name = options.claim_github_user_name;
    user.github_user_name = options.github_user_name;
    user.claim_bounty_state = options.claim_bounty_state;
    user.insert_time = options.insert_time;
    user.update_time = options.update_time;
    user.bounty_level = options.bounty_level;
    user.bounty_name = options.bounty_name;
    user.bounty_finish_nft_image = options.bounty_finish_nft_image;
    user.bounty_content = options.bounty_content;
    user.participants_number = options.participants_number +1 ;
    user.submissions_number = options.submissions_number;

     await this.usersModel.save(user);

  }

  async get_claim_bounty_info(options: claim_bounty)
  {
    const claim_bounty_url = options.claim_bounty_url
    const claim_github_user_name = options.claim_github_user_name
    const data = await this.usersModel.findOne({
      where:{
        claim_bounty_url,claim_github_user_name
      }
    });
    return data
  }


  async get_claim_bounty_complete_all(options: claim_bounty)
  {
    const claim_github_user_name = options.claim_github_user_name
    const data = await this.usersModel.find({
      where:{
        claim_github_user_name,
        claim_bounty_state:"Finish"
      },
    });

    return data
  }

  async get_claim_bounty_completed(options: claim_bounty)
  {
    const claim_github_user_name = options.claim_github_user_name
    const data = await this.usersModel.find({
      where:{
        claim_github_user_name,
        claim_bounty_state:"Finish"
      },
      take: 6
    });

    return data
  }

  async get_claim_bounty_pending_all(options: claim_bounty)
  {
    const claim_github_user_name = options.claim_github_user_name
    const data = await this.usersModel.find({
      where:{
        claim_github_user_name,
        claim_bounty_state:"Pending"
      },
    });

    return data
  }

  async get_claim_bounty_pending(options: claim_bounty)
  {
    const claim_github_user_name = options.claim_github_user_name
    const data = await this.usersModel.find({
      where:{
        claim_github_user_name,
        claim_bounty_state:"Pending"
      },
      take: 6
    });

    return data
  }

  async get_claim_bounty_review_all(options: claim_bounty)
  {
    const claim_github_user_name = options.claim_github_user_name
    const data = await this.usersModel.find({
      where:{
        claim_github_user_name,
        claim_bounty_state:"Review"
      },
    });

    return data
  }

  async get_claim_bounty_review(options: claim_bounty)
  {
    const claim_github_user_name = options.claim_github_user_name
    const data = await this.usersModel.find({
      where:{
        claim_github_user_name,
        claim_bounty_state:"Review"
      },
      take: 6
    });

    return data
  }

  async get_claim_bounty_withdraw_all(options: claim_bounty)
  {
    const claim_github_user_name = options.claim_github_user_name
    const data = await this.usersModel.find({
      where:{
        claim_github_user_name,
        claim_bounty_state:"Withdraw"
      },
    });

    return data
  }

  async get_claim_bounty_withdraw(options: claim_bounty)
  {
    const claim_github_user_name = options.claim_github_user_name
    const data = await this.usersModel.find({
      where:{
        claim_github_user_name,
        claim_bounty_state:"Withdraw"
      },
      take: 6
    });

    return data
  }

  async get_claim_bountyURL(options: claim_bounty)
  {
    const claim_github_user_name = options.claim_github_user_name
    const claim_bounty_url = options.claim_bounty_url
    const data = await this.usersModel.find({
      where:{
        claim_github_user_name,
        claim_bounty_url
      },
    });

    return data
  }


}
