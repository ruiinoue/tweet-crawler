import { Tweet } from "@/types/api/Tweet";

export const getTweetStatus = (tweet: Tweet): string => {
  // RT
  if (tweet.retweeted_status) return "RT";
  // 引用
  if (tweet.quoted_status) return "引用RT";
  // リプライ
  if (
    tweet.in_reply_to_status_id !== null &&
    tweet.in_reply_to_status_id_str !== null &&
    tweet.in_reply_to_user_id !== null &&
    tweet.in_reply_to_user_id_str !== null &&
    tweet.in_reply_to_screen_name !== null
  )
    return "リプライ";
  // 通常ツイート
  if (
    tweet.extended_entities &&
    tweet.extended_entities.media &&
    tweet.extended_entities.media[0].type === "photo" &&
    tweet.extended_entities.media[0].additional_media_info &&
    tweet.extended_entities.media[0].additional_media_info.source_user
  )
    return "画像引用";
  if (
    tweet.extended_entities &&
    tweet.extended_entities.media &&
    tweet.extended_entities.media[0].type === "video" &&
    tweet.extended_entities.media[0].additional_media_info &&
    tweet.extended_entities.media[0].additional_media_info.source_user
  )
    return "動画引用";
  if (
    tweet.extended_entities &&
    tweet.extended_entities.media &&
    tweet.extended_entities.media[0].type === "photo"
  )
    return "画像ツイート";
  if (
    tweet.extended_entities &&
    tweet.extended_entities.media &&
    tweet.extended_entities.media[0].type === "video"
  )
    return "動画ツイート";
  return "ツイート";
};
