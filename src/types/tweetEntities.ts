import { User } from "./api/User";

type Hashtag = {
  text: string;
  indices: number[];
};

type Size = {
  w: number;
  h: number;
  resize: "crop" | "fit";
};

type Sizes = {
  thumb: Size;
  medium: Size;
  small: Size;
  large: Size;
};

type Variant = {
  bitrate?: number;
  content_type: string;
  url: string;
};

type VideoInfo = {
  aspect_ratio: number[];
  duration_millis?: number;
  variants: Variant[];
};

type AdditionalVideoInfo = {
  title: string;
  description: string;
  embeddable: boolean;
  monetizable: boolean;
  source_user?: User;
};

type Media = {
  id: number;
  id_str: string;
  indices: number[];
  media_url: string;
  media_url_https: string;
  url: string;
  display_url: string;
  expanded_url: string;
  type: "photo" | "video" | "animated_gif";
  sizes: Sizes;
  source_status_id?: number;
  source_status_id_str?: string;
  source_user_id?: number;
  source_user_id_str?: string;
  video_info?: VideoInfo;
  additional_media_info?: AdditionalVideoInfo;
};

type SymbolProp = {
  text: string;
  indices: number[];
};

type Url = {
  url: string;
  expanded_url: string;
  display_url: string;
  indices: number[];
};

type UserMention = {
  screen_name: string;
  name: string;
  id: number;
  id_str: string;
  indices: number[];
};

export type Entities = {
  hashtags: Hashtag[];
  media?: Media[];
  symbols: SymbolProp[];
  urls: Url[];
  user_mentions: UserMention[];
};

export type ExtendedEntities = {
  media?: Media[];
};
