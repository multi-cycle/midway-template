import {Inject, Controller, Get, Post, Query, Body} from '@midwayjs/decorator';
import {BindGithubUser} from "../interface";
import { ResponseBody } from '../utils/ResponseBody';
import { bind_github_user_address,} from "../service/bind_gitehub_user.service";

@Controller('/api')
export class Bind_github_user {
  @Inject()
  Bind_github_user: bind_github_user_address;

  @Post("/bind_github_user")
  async bind_github_user(@Body() input:BindGithubUser){
   await this.Bind_github_user.bind_github_user(input)

  }
  @Get('/get_github_user_address')
  async get_github_user_address(@Query() input:BindGithubUser) {
    const result  = await this.Bind_github_user.get_github_user_address(input);
    return ResponseBody.success(
      result
    );
  }

  @Get('/get_github_user_name')
  async get_github_user_name(@Query() input:BindGithubUser) {
    const result  = await this.Bind_github_user.get_github_user_name(input);
    return ResponseBody.success(
      result
    );
  }



}

