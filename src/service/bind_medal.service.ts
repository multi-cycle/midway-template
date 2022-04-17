import { Provide } from '@midwayjs/decorator';
import {InjectEntityModel} from "@midwayjs/orm";
import {Repository} from "typeorm";
import {Bind_medal} from "../entity/bind_medal";
import {bind_medal} from "../interface";


@Provide()
export class Bind_medalServiceMedal {
  @InjectEntityModel(Bind_medal)
  usersModel: Repository<Bind_medal>;

  async bind_medal(options: bind_medal){
    const medal = new Bind_medal()
    medal.github_user_name = options.github_user_name
    medal.address = options.address
    medal.medal_level = options.medal_level
    medal.current_experience = options.current_experience
    await this.usersModel.save(medal);
  }



  async inquire_medal(options: bind_medal){
    const github_user_name = options.github_user_name
    const data = await this.usersModel.findOne({
      where:{github_user_name}
    });

    return data
  }

  async add_experience(options: bind_medal) {
    const github_user_name = options.github_user_name
    const current_experience = options.current_experience
    const increase_value = options.increase_value

    const data = await this.usersModel.findOne({
      where: {github_user_name}
    });
    data.current_experience = Number(current_experience) + Number(increase_value)
    if(data.current_experience >= 100 && data.current_experience < 500 ){
      data.medal_level = 2
    }else {
      if(data.current_experience >= 500 && data.current_experience < 1000){
        data.medal_level = 3
      }else {
        if (data.current_experience >= 1000 && data.current_experience < 3000) {
          data.medal_level = 4
        } else {
          if (data.current_experience >= 3000 && data.current_experience < 5000) {
            data.medal_level = 5
          } else {
            if (data.current_experience >= 5000 && data.current_experience < 10000) {
              data.medal_level = 6
            } else {
              if (data.current_experience >= 10000 && data.current_experience < 100000) {
                data.medal_level = 7
              }
            }
          }
        }
      }
    }
    await this.usersModel.save(data)
    return data
  }

}
