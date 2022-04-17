import { Column, PrimaryGeneratedColumn, } from 'typeorm';
import { EntityModel } from '@midwayjs/orm';

@EntityModel()
export class Claim_bounty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  claim_bounty_url!: string;

  @Column()
  claim_github_user_name!: string;

  @Column()
  github_user_name!: string;

  @Column()
  claim_bounty_state!: string;

  @Column()
  insert_time!: string;

  @Column()
  update_time!: string;

  @Column()
  bounty_level!: string;

  @Column()
  bounty_name!: string;

  @Column()
  bounty_finish_nft_image!: string;

  @Column()
  bounty_content!: string;

  @Column()
  participants_number!: number;

  @Column()
  submissions_number!: number;
}
