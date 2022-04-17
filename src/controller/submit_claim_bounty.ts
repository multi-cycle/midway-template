import {Inject, Controller, Post, Body, Get, Query,} from '@midwayjs/decorator';
import {Submit_claim_bountyService} from "../service/submit_claim_bounty.service";
import {ResponseBody} from "../utils/ResponseBody";
import {submit_claim_bounty} from "../interface";


@Controller('/api')
export class SubmitClaimBountyService {
  @Inject()
  submitClaimBountyService: Submit_claim_bountyService;

  @Post("/submit_claim_bounty")
  async submit_claim_bounty(@Body() input:submit_claim_bounty){
    const data  =  await this.submitClaimBountyService.submit_claim_bounty(input)
    console.log(data)

  }


  @Get("/get_claim_bounty_content")
  async get_claim_bounty_content(@Query() input:submit_claim_bounty){
    const data  =  await this.submitClaimBountyService.get_claim_bounty_content(input)
    console.log(data)
    return ResponseBody.success(
      data
    );
  }

  @Post("/submit_bounty_remove")
  async submit_bounty_remove(@Body() input:submit_claim_bounty){
    const data  =  await this.submitClaimBountyService.submit_bounty_remove(input)
    console.log(data)

  }


}

