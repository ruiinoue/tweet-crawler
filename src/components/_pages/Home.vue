<template>
  <div class="container mx-auto px-4 sm:px-8">
    <div class="py-8">
      <UserTimelineDataTable />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useUserTimeline } from "@/store/modules/userTimeline";

import UserTimelineDataTable from "@/components/_organisms/UserTimelineDataTable.vue";

export default defineComponent({
  name: "Home",

  components: { UserTimelineDataTable },

  setup() {
    const userTimelineStore = useUserTimeline();

    onMounted(async () => {
      // userTimelineStore.mutations.setScreenName("inouuuuuuuu_00"); // misaki_srt_love inouuuuuuuu_00
      // userTimelineStore.mutations.setCount("10");
      // await userTimelineStore.actions.getUserTimeline();
    });

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
