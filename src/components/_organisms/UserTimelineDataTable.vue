<template>
  <div class="pagenation-container-forword">
    <div class="pagenation-inner">
      <button class="pagenation-btn-prev">＜ 前</button>
      <button class="pagenation-btn-next">次 ＞</button>
    </div>
    <div class="mt-4" v-if="userTimeline.length !== 0">
      集計期間:
      <span v-if="userTimeline.length !== 0">
        {{
          `${new Date(userTimeline.slice(-1)[0].created_at).getFullYear()}月${
            new Date(userTimeline.slice(-1)[0].created_at).getMonth() + 1
          }月${new Date(userTimeline.slice(-1)[0].created_at).getDate()}日`
        }}
        {{
          `${new Date(userTimeline.slice(-1)[0].created_at).getHours()}:${
            new Date(userTimeline.slice(-1)[0].created_at).getMinutes() + 1
          }:${new Date(userTimeline.slice(-1)[0].created_at).getSeconds()}`
        }}
      </span>
      〜
      <span v-if="userTimeline.length !== 0">
        {{
          `${new Date(userTimeline[0].created_at).getFullYear()}月${
            new Date(userTimeline[0].created_at).getMonth() + 1
          }月${new Date(userTimeline[0].created_at).getDate()}日`
        }}
        {{
          `${new Date(userTimeline[0].created_at).getHours()}:${
            new Date(userTimeline[0].created_at).getMinutes() + 1
          }:${new Date(userTimeline[0].created_at).getSeconds()}`
        }}
      </span>
    </div>
  </div>
  <div class="datatable-container">
    <div class="datatable-inner">
      <!-- データテーブル -->
      <table class="datatable">
        <thead>
          <tr>
            <th
              v-for="(header, key) in headers"
              :key="key"
              class="datatable-thead-tr-th"
            >
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody v-if="userTimeline.length > 0">
          <tr v-for="(tweet, key) in userTimeline" :key="key">
            <td class="datatable-tbody-tr-td td-tmp">
              {{
                `${new Date(tweet.created_at).getFullYear()}月${
                  new Date(tweet.created_at).getMonth() + 1
                }月${new Date(tweet.created_at).getDate()}日`
              }}
              {{
                `${new Date(tweet.created_at).getHours()}:${
                  new Date(tweet.created_at).getMinutes() + 1
                }:${new Date(tweet.created_at).getSeconds()}`
              }}
            </td>
            <td class="datatable-tbody-tr-td td-tip">
              <StatusTip :status="getTweetStatus(tweet)" />
            </td>
            <td class="datatable-tbody-tr-td td-tip2">
              <RtsTip
                :count="
                  tweet.retweeted_status
                    ? tweet.retweeted_status.retweet_count
                    : tweet.retweet_count
                "
              />
            </td>
            <td class="datatable-tbody-tr-td td-tip2">
              <LikesTip
                :count="
                  tweet.retweeted_status
                    ? tweet.retweeted_status.favorite_count
                    : tweet.favorite_count
                "
              />
            </td>
            <td class="datatable-tbody-tr-td td-url">
              <span>
                <BlankLink
                  :url="`https://twitter.com/${screenName}/status/${tweet.id_str}`"
                />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="py-5 text-center bg-white" v-if="userTimeline.length === 0">
        条件を指定してください
      </div>
      <!-- ページネーション -->
      <div class="pagenation-container">
        <div class="pagenation-inner">
          <button class="pagenation-btn-prev">＜ 前</button>
          <button class="pagenation-btn-next">次 ＞</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useUserTimeline } from "@/store/modules/userTimeline";
import { getTweetStatus } from "@/util";

import StatusTip from "@/components/_atoms/tip/StatusTip.vue";
import RtsTip from "@/components/_atoms/tip/RtsTip.vue";
import LikesTip from "@/components/_atoms/tip/LikesTip.vue";
import BlankLink from "@/components/_atoms/BlankLink.vue";

export default defineComponent({
  name: "UserTimelineDataTable",

  components: {
    StatusTip,
    RtsTip,
    LikesTip,
    BlankLink,
  },

  setup() {
    const userTimelineStore = useUserTimeline();

    const userTimeline = computed(() => {
      return userTimelineStore.getters.userTimeline();
    });
    const screenName = computed(() => {
      return userTimelineStore.getters.screenName();
    });

    const headers: string[] = [
      "投稿日",
      "ステータス",
      "RT数",
      "いいね数",
      "URL",
    ];

    return {
      userTimeline,
      screenName,
      headers,
      getTweetStatus,
    };
  },
});
</script>
