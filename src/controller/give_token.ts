import {Inject, Controller, Post, Body, Get, Query,} from '@midwayjs/decorator';
import {Give_tokenService} from "../service/give_token.service";
import {give_token} from "../interface";
import {ResponseBody} from "../utils/ResponseBody";



@Controller('/api')
export class GiveToken {
  @Inject()
  giveToken: Give_tokenService;

  @Post('/faucet')
  async faucet(@Body() input:give_token) {
    await this.giveToken.faucet(input);
  }

  @Get("/get_faucet_info")
  async get_faucet_info(@Query() input:give_token){
    const data  =  await this.giveToken.get_faucet_info(input)
    console.log(data)
    return ResponseBody.success(
      data
    );
  }

  @Get("/get_faucet_github_user_name")
  async get_faucet_github_user_name(@Query() input:give_token){
    const data  =  await this.giveToken.get_faucet_github_user_name(input)
    console.log(data)
    return ResponseBody.success(
      data
    );
  }

  @Post('/post_deduction_token')
  async post_deduction_token(@Body() input:give_token) {
    await this.giveToken.post_deduction_token(input);
  }

  @Post('/post_faucet_token')
  async post_faucet_token(@Body() input:give_token) {
    await this.giveToken.post_faucet_token(input);
  }

  @Post('/post_token_refund')
  async post_token_refund(@Body() input:give_token) {
    await this.giveToken.post_token_refund(input);
  }


}

