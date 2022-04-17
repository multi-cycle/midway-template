
import {  PrimaryColumn, } from 'typeorm';
import {EntityModel} from "@midwayjs/orm";
@EntityModel()
export class Admin {
  @PrimaryColumn()
  github_user_name!: string;


}


