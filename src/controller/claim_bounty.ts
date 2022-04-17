import {Body, Controller, Get, Inject, Post, Query,} from '@midwayjs/decorator';
import {claim_bounty} from "../interface";
import {Claim_bountyService} from "../service/claim_bounty.service";
import {ResponseBody} from "../utils/ResponseBody";

@Controller('/api')
export class ClaimBounty {
  @Inject()
  claimBounty: Claim_bountyService;

  @Post('/claim_bounty')
  async claim_bounty(@Body() input:claim_bounty) {
     await this.claimBounty.insert(input);
  }

  @Get("/get_claim_bounty_complete_all")
  async get_claim_bounty_complete_all(@Query() input:claim_bounty){
    const data  =  await this.claimBounty.get_claim_bounty_complete_all(input)
    console.log(data)
    return ResponseBody.success(
      data
    );
  }

  @Get("/get_claim_bounty_info")
  async get_claim_bounty_info(@Query() input:claim_bounty){
    const data  =  await this.claimBounty.get_claim_bounty_info(input)
    console.log(data)
    return ResponseBody.success(
      data
    );
  }


  @Get("/get_claim_bounty_completed")
  async get_claim_bounty_completed(@Query() input:claim_bounty){
    const data  =  await this.claimBounty.get_claim_bounty_completed(input)
    console.log(data)
    return ResponseBody.success(
      data
    );
  }
  @Get("/get_claim_bounty_pending_all")
  async get_claim_bounty_pending_all(@Query() input:claim_bounty){
    const data  =  await this.claimBounty.get_claim_bounty_pending_all(input)
    console.log(data)
    return ResponseBody.success(
      data
    );
  }
  @Get("/get_claim_bounty_pending")
  async get_claim_bounty_pending(@Query() input:claim_bounty){
    const data  =  await this.claimBounty.get_claim_bounty_pending(input)
    console.log(data)
    return ResponseBody.success(
      data
    );
  }
  @Get("/get_claim_bounty_review_all")
  async get_claim_bounty_review_all(@Query() input:claim_bounty){
    const data  =  await this.claimBounty.get_claim_bounty_review_all(input)
    console.log(data)
    return ResponseBody.success(
      data
    );
  }

  @Get("/get_claim_bounty_review")
  async get_claim_bounty_review(@Query() input:claim_bounty){
    const data  =  await this.claimBounty.get_claim_bounty_review(input)
    console.log(data)
    return ResponseBody.success(
      data
    );
  }

  @Get("/get_claim_bounty_withdraw_all")
  async get_claim_bounty_withdraw_all(@Query() input:claim_bounty){
    const data  =  await this.claimBounty.get_claim_bounty_withdraw_all(input)
    console.log(data)
    return ResponseBody.success(
      data
    );
  }

  @Get("/get_claim_bounty_withdraw")
  async get_claim_bounty_withdraw(@Query() input:claim_bounty){
    const data  =  await this.claimBounty.get_claim_bounty_withdraw(input)
    console.log(data)
    return ResponseBody.success(
      data
    );
  }

  @Get("/get_claim_bountyURL")
  async get_claim_bountyURL(@Query() input:claim_bounty){
    const data  =  await this.claimBounty.get_claim_bountyURL(input)
    console.log(data)
    return ResponseBody.success(
      data
    );
  }



}
