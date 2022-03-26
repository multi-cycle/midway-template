import { Inject, Controller, Get, Query } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Get('/get_user')
  async getUser(@Query() queryData) {
    console.log(queryData);
    const uid = queryData.uid;
    const url = queryData.url;
    const user = await this.userService.getUser({ uid, url });
    return { success: true, message: 'OK', data: user };
  }
}
