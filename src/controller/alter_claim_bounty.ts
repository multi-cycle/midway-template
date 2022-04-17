import {Body, Controller, Inject, Post} from '@midwayjs/decorator';
import {Alter_claim_bountyService} from "../service/alter_claim_bounty.service";
import {claim_bounty} from "../interface";


@Controller('/api')
export class Alter_claim_bounty {
  @Inject()
  createBounty: Alter_claim_bountyService;

  @Post('/claim_bounty_pending_review')
  async claim_bounty_pending_review(@Body() input:claim_bounty) {
    await this.createBounty.claim_bounty_pending_review(input);
  }

  @Post('/claim_bounty_review_withdraw')
  async claim_bounty_review_withdraw(@Body() input:claim_bounty) {
    await this.createBounty.claim_bounty_review_withdraw(input);
  }


  @Post('/claim_bounty_withdraw_finish')
  async claim_bounty_withdraw_finish(@Body() input:claim_bounty) {
    await this.createBounty.claim_bounty_withdraw_finish(input);
  }

  @Post('/claim_bounty_all_finish')
  async claim_bounty_all_finish(@Body() input:claim_bounty) {
    await this.createBounty.claim_bounty_all_finish(input);
  }

  @Post('/claim_bounty_submissions')
  async claim_bounty_submissions(@Body() input:claim_bounty) {
    await this.createBounty.claim_bounty_submissions(input);
  }

  @Post('/claim_bounty_participants_number')
  async claim_bounty_participants_number(@Body() input:claim_bounty) {
    await this.createBounty.claim_bounty_participants_number(input);
  }

}

