import {Controller, Get, Inject, Query} from '@midwayjs/decorator';
import {Admin_user,} from "../interface";
import {ResponseBody} from "../utils/ResponseBody";
import {adminService} from "../service/admin.service";

@Controller('/api')
export class Admin {
  @Inject()
  admin: adminService;

  @Get('/get_admin')
  async get_name(@Query() input:Admin_user) {
      const result  = await this.admin.get_admin(input);
      return ResponseBody.success(
        result,
      );
    }
}
