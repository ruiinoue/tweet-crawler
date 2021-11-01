<template>
  <div class="container mx-auto px-4 sm:px-8">
    <div class="py-8">
      <div class="datatable-container">
        <div class="datatable-inner">
          <table class="datatable">
            <thead>
              <tr>
                <th class="datatable-thead-tr-th">投稿日</th>
                <th class="datatable-thead-tr-th">RT数</th>
                <th class="datatable-thead-tr-th">いいね数</th>
                <th class="datatable-thead-tr-th">URL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="datatable-tbody-tr-td">2021-11-01 12:23:30</td>
                <td class="datatable-tbody-tr-td">
                  <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                    <span class="relative">23</span>
                  </span>
                </td>
                <td class="datatable-tbody-tr-td">
                  <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                    <span aria-hidden class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                    <span class="relative">85</span>
                  </span>
                </td>
                <td class="datatable-tbody-tr-td">https://twitter.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
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
