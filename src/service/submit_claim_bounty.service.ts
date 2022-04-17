import { Provide } from '@midwayjs/decorator';
import {InjectEntityModel} from "@midwayjs/orm";
import {Repository} from "typeorm";
import { submit_claim_bounty} from "../interface";
import {Submit_claim_bounty} from "../entity/submit_claim_bounty";


@Provide()
export class Submit_claim_bountyService {
  @InjectEntityModel(Submit_claim_bounty)
  usersModel: Repository<Submit_claim_bounty>;

  async submit_claim_bounty(options: submit_claim_bounty){
    const medal = new Submit_claim_bounty()
    medal.github_user_name = options.github_user_name
    medal.bounty_url = options.bounty_url
    medal.submit_bounty_url = options.submit_bounty_url
    medal.claim_github_user_name = options.claim_github_user_name
    await this.usersModel.save(medal);
  }


  async get_claim_bounty_content(options: submit_claim_bounty){
    const bounty_url = options.bounty_url
    const data = await this.usersModel.find({
      where:{bounty_url,}
    });
    return data
  }

  async submit_bounty_remove(options: submit_claim_bounty){
    const bounty_url = options.bounty_url
    const data = await this.usersModel.find({
      where:{bounty_url,}
    });
     await this.usersModel.remove(data)

  }


}
