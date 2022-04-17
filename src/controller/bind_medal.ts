import {Body, Controller, Get, Inject, Post, Query} from '@midwayjs/decorator';
import {bind_medal} from "../interface";
import {Bind_medalServiceMedal} from "../service/bind_medal.service";
import {ResponseBody} from "../utils/ResponseBody";

@Controller('/api')
 export class bindMedal{
  @Inject()
  bindMedal: Bind_medalServiceMedal;


  @Post('/bind_medal')
  async bind_medal(@Body() input:bind_medal) {
    await this.bindMedal.bind_medal(input);
  }
  @Get("/get_medal")
  async get_medal(@Query() input:bind_medal){
    const data  =  await this.bindMedal.inquire_medal(input)
    console.log(data)
    return ResponseBody.success(
      data
    );
  }

  @Post("/add_experience")
  async add_experience(@Body() input:bind_medal) {
    await this.bindMedal.add_experience(input);
  }

}

