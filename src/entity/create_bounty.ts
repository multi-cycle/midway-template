import { PrimaryColumn, Column  } from 'typeorm';
import {EntityModel} from "@midwayjs/orm";
@EntityModel()
export class Create_bounty {
  @PrimaryColumn()
  bounty_url!: string;

  @Column()
  github_user_name!: string;

  @Column()
  bounty_state!: string;

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
  token_name!: string;

  @Column()
  token_number!: string;

  @Column()
  participants_number!: number;

  @Column()
  submissions_number!: number;


}


