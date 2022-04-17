
import {  PrimaryColumn, Column } from 'typeorm';
import {EntityModel} from "@midwayjs/orm";
@EntityModel()
export class Bind_medal {
  @PrimaryColumn()
  github_user_name!: string;

  @Column()
  address!: string;

  @Column()
  medal_level!: number;

  @Column()
  current_experience!: number;

}

