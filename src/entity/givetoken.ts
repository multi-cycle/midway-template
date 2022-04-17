import { Column, PrimaryColumn, } from 'typeorm';
import { EntityModel } from '@midwayjs/orm';


@EntityModel()
export class Givetoken {

  @PrimaryColumn()
  github_user_name!: string;

  @Column()
  address!: string;

  @Column()
  token!:number
}
