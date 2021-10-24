import { Contributors } from "../contributors";
import { Coordinates } from "../Coordinates";
import { Entities, ExtendedEntities } from "../tweetEntities";
import { User } from "./User";

export type Tweet = {
  contributors: Contributors | null;
  coordinates: Coordinates | null;
  created_at: string | null; // 投稿日時
  entities: Entities;
  extended_entities?: ExtendedEntities;
  favorited: boolean;
  favorite_count: number;
  geo: null;
  id: number;
  id_str: string;
  in_reply_to_screen_name: string | null;
  in_reply_to_status_id: number | null;
  in_reply_to_status_id_str: string | null;
  in_reply_to_user_id: number | null;
  in_reply_to_user_id_str: string | null;
  is_quote_status: boolean;
  lang: string;
  place: null;
  quoted_status?: Tweet;
  quoted_status_id?: number;
  quoted_status_id_str?: number;
  retweeted: boolean;
  retweeted_status: Tweet;
  retweet_count: number;
  source: string;
  text: string;
  truncated: boolean;
  user: User;
};
