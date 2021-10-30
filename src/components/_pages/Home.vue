<template>
  <div>{{ userTimeline }}</div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useUserTimeline } from "@/store/modules/userTimeline";

export default defineComponent({
  name: "Home",
  setup() {
    const userTimelineStore = useUserTimeline();

    onMounted(async () => {
      userTimelineStore.mutations.setScreenName("misaki_srt_love");
      userTimelineStore.mutations.setCount("4");
      await userTimelineStore.actions.getUserTimeline();
    });

    const userTimeline = computed(() => {
      return userTimelineStore.getters.userTimeline();
    });

    return {
      userTimeline,
    };
  },
});
</script>
