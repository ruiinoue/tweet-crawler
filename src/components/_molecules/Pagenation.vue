<template>
  <div class="pagenation">
    <button
      class="pagenation-btn-prev"
      :class="
        userTimeline && userTimeline.length > 0 && !loading
          ? 'pagenation-btn-color'
          : 'pagenation-btn-disabled'
      "
      :disabled="!userTimeline || !userTimeline.length > 0 || loading"
      @click="getPrevUserTimeline"
    >
      ＜ 前
    </button>
    <button
      class="pagenation-btn-next"
      :class="
        userTimeline && userTimeline.length > 0 && !loading
          ? 'pagenation-btn-color'
          : 'pagenation-btn-disabled'
      "
      :disabled="!userTimeline || !userTimeline.length > 0 || loading"
      @click="getNextUserTimeline"
    >
      次 ＞
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useUserTimeline } from "@/store/modules/userTimeline";

export default defineComponent({
  setup() {
    const userTimelineStore = useUserTimeline();

    const loading = ref<boolean>(false);

    const userTimeline = computed(() => {
      return userTimelineStore.getters.userTimeline();
    });

    const getPrevUserTimeline = async () => {
      loading.value = true;
      userTimelineStore.mutations.setSinceId("");
      userTimelineStore.mutations.setMaxId("");
      userTimelineStore.mutations.setSinceId(userTimeline.value[0].id_str);
      await userTimelineStore.actions.getUserTimeline();
      loading.value = false;
    };
    const getNextUserTimeline = async () => {
      loading.value = true;
      userTimelineStore.mutations.setSinceId("");
      userTimelineStore.mutations.setMaxId("");
      userTimelineStore.mutations.setMaxId(
        userTimeline.value.splice(-1)[0].id_str
      );
      await userTimelineStore.actions.getUserTimeline();
      loading.value = false;
    };

    return {
      loading,
      userTimeline,
      getPrevUserTimeline,
      getNextUserTimeline,
    };
  },
});
</script>
