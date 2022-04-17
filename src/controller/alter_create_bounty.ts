import {Body, Controller,Inject, Post} from '@midwayjs/decorator';
import {create_bounty} from "../interface";
import {Alter_create_bountyService} from "../service/alter_create_bounty.service";



@Controller('/api')
export class Alter_create_bounty {
  @Inject()
  createBounty: Alter_create_bountyService;

  @Post('/create_bounty_review_conduct')
  async create_bounty_review_conduct(@Body() input:create_bounty) {
    await this.createBounty.create_bounty_review_conduct(input);
  }

  @Post('/create_bounty_pending_conduct')
  async create_bounty_pending_conduct(@Body() input:create_bounty) {
    await this.createBounty.create_bounty_pending_conduct(input);
  }

  @Post('/create_bounty_pending_verify')
  async create_bounty_pending_verify(@Body() input:create_bounty) {
    await this.createBounty.create_bounty_pending_verify(input);
  }

  @Post('/create_bounty_verify_finish')
  async create_bounty_verify_finish(@Body() input:create_bounty) {
    await this.createBounty.create_bounty_verify_finish(input);
  }

  @Post('/create_bounty_submissions')
  async create_bounty_submissions(@Body() input:create_bounty) {
    await this.createBounty.create_bounty_submissions(input);
  }

  @Post('/create_bounty_participants')
  async create_bounty_participants(@Body() input:create_bounty) {
    await this.createBounty.create_bounty_participants(input);
  }




}

