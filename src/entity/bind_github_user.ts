
import {  PrimaryColumn, Column } from 'typeorm';
import {EntityModel} from "@midwayjs/orm";
@EntityModel()
export class Bind_github_user {
  @PrimaryColumn()
  github_user_name!: string;

  @Column()
  address!: string;
}

