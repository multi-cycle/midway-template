


/**
 * @description User-Service parameters
 */


export interface BindGithubUser{
  github_user_name:string
  address:string
}
export interface Admin_user{
  github_user_name:string
}
export interface create_bounty{
  bounty_url: string;
  github_user_name: string;
  bounty_state: string;
  insert_time: string;
  update_time: string;
  bounty_level: string;
  bounty_name: string;
  bounty_finish_nft_image: string;
  bounty_content: string;
  token_name: string;
  token_number: string;
  participants_number: number;
  submissions_number: number;
}

export interface claim_bounty{
  claim_bounty_url: string;
  claim_github_user_name: string;
  github_user_name: string;
  claim_bounty_state: string;
  insert_time: string;
  update_time: string;
  bounty_level: string;
  bounty_name: string;
  bounty_finish_nft_image: string;
  bounty_content: string;
  participants_number: number;
  submissions_number: number;
}

export interface bind_medal {
  github_user_name: string;
  address: string;
  medal_level: number;
  current_experience: number;
  totalExperience:number;
  increase_value:number
}

export interface submit_claim_bounty {
  bounty_url: string;

  submit_bounty_url: string;

  claim_github_user_name: string;

  github_user_name: string;
}

export interface give_token {
  github_user_name: string;

  address: string;

  token:number

  cost:number

  refund:number
}



