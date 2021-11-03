<template>
  <div class="container mx-auto px-4 sm:px-8">
    <div class="pt-8 px-8">
      <SearchUserTimeline />
    </div>

    <div class="pt-5 pb-8">
      <UserTimelineDataTable />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useUserTimeline } from "@/store/modules/userTimeline";

import SearchUserTimeline from "@/components/_organisms/SearchUserTimeline.vue";
import UserTimelineDataTable from "@/components/_organisms/UserTimelineDataTable.vue";

export default defineComponent({
  name: "Home",

  components: {
    SearchUserTimeline,
    UserTimelineDataTable,
  },

  setup() {
    const userTimelineStore = useUserTimeline();

    const userTimeline = computed(() => {
      return userTimelineStore.getters.userTimeline();
    });

    return {
      userTimeline,
    };
  },
});
// 残タスク
// 1. ページネーション
// 2. リンク遷移用のコンポーネント
// 3. 検索機能
// 4. 認証機能
</script>
