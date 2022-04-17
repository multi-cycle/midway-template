import {Body, Controller, Get, Inject, Post, Query,} from '@midwayjs/decorator';
import {Create_bountyService} from "../service/create_bounty.service";
import {create_bounty} from "../interface";
import {ResponseBody} from "../utils/ResponseBody";

@Controller('/api')
export class CreateBounty {
  @Inject()
  createBounty: Create_bountyService;

  @Post('/create_bounty')
  async create_bounty(@Body() input:create_bounty) {
     await this.createBounty.create_bounty(input);
  }

  @Post('/create_bounty_remove')
  async create_bounty_remove(@Body() input:create_bounty) {
    await this.createBounty.create_bounty_remove(input);
  }


  @Get("/get_bounty_all")
  async get_bounty_all(@Query() input:create_bounty){
    const data  =  await this.createBounty.get_bounty_all(input)
    console.log(data)
    return ResponseBody.success(
      data
    );
  }

  @Get("/get_create_bounty_info")
  async get_create_bounty_info(@Query() input:create_bounty){
    const data  =  await this.createBounty.get_create_bounty_info(input)
    console.log(data)
    return ResponseBody.success(
      data
    );
  }

  @Get("/get_create_bounty_complete_all")
  async get_create_bounty_complete_all(@Query() input:create_bounty){
    const data  =  await this.createBounty.get_create_bounty_complete_all(input)
    console.log(data)
    return ResponseBody.success(
      data
    );
  }

  @Get("/get_create_bounty_complete")
  async get_create_bounty_complete(@Query() input:create_bounty){
    const data  =  await this.createBounty.get_create_bounty_complete(input)
    console.log(data)
    return ResponseBody.success(
      data
    );
  }

  @Get("/get_create_bounty_conduct_all")
  async get_create_bounty_conduct_all(@Query() input:create_bounty){
    const data  =  await this.createBounty.get_create_bounty_conduct_all(input)
    console.log(data)
    return ResponseBody.success(
      data
    );
  }

  @Get("/get_create_bounty_conduct")
  async get_create_bounty_conduct(@Query() input:create_bounty){
    const data  =  await this.createBounty.get_create_bounty_conduct(input)
    console.log(data)
    return ResponseBody.success(
      data
    );
  }

  @Get("/get_create_bounty_pending_all")
  async get_create_bounty_pending_all(@Query() input:create_bounty){
    const data  =  await this.createBounty.get_create_bounty_pending_all(input)
    console.log(data)
    return ResponseBody.success(
      data
    );
  }

  @Get("/get_create_bounty_pending")
  async get_create_bounty_pending(@Query() input:create_bounty){
    const data  =  await this.createBounty.get_create_bounty_pending(input)
    console.log(data)
    return ResponseBody.success(
      data
    );
  }

  @Get("/get_create_bounty_review_all")
  async get_create_bounty_review_all(@Query() input:create_bounty){
    const data  =  await this.createBounty.get_create_bounty_review_all(input)
    console.log(data)
    return ResponseBody.success(
      data
    );
  }

  @Get("/get_create_bounty_review")
  async get_create_bounty_review(@Query() input:create_bounty){
    const data  =  await this.createBounty.get_create_bounty_review(input)
    console.log(data)
    return ResponseBody.success(
      data
    );
  }

  @Get("/get_create_bounty_verify_all")
  async get_create_bounty_verify_all(@Query() input:create_bounty){
    const data  =  await this.createBounty.get_create_bounty_verify_all(input)
    console.log(data)
    return ResponseBody.success(
      data
    );
  }

  @Get("/get_create_bounty_verify")
  async get_create_bounty_verify(@Query() input:create_bounty){
    const data  =  await this.createBounty.get_create_bounty_verify(input)
    console.log(data)
    return ResponseBody.success(
      data
    );
  }

}
