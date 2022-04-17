import {Column, PrimaryGeneratedColumn} from 'typeorm';
import { EntityModel } from '@midwayjs/orm';

@EntityModel()
export class Submit_claim_bounty {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bounty_url!: string;

  @Column()
  submit_bounty_url!: string;

  @Column()
  claim_github_user_name!: string;

  @Column()
  github_user_name!: string;

}
