<template>
  <div>
    <FormInput
      v-model:modelValue="screenName"
      :label="'ユーザー名'"
      :name="'screenName'"
      :placeholder="'例）inouuuuuuuu_00'"
    />

    <FormInput
      v-model:modelValue="maxId"
      :label="'このツイートID以前のツイートを取得'"
      :name="'maxId'"
      :placeholder="'例）123456'"
    />

    <div class="mt-4">
      <FormNumber
        v-model:modelValue.number="count"
        :label="'取得件数'"
        :name="'count'"
        :max="200"
        :min="1"
      />
      <Supplement :txt="'※最大で200件取得できます。'" :color="'gray'" />
    </div>

    <div class="mt-5">
      <FormRadio
        v-model:modelValue="includeRts"
        :label="'RTを含めるか'"
        :name="'includeRts'"
        :options="includeRtsOptions"
      />
      <Supplement
        :txt="'※取得件数を指定した後に判定されるため、正確な件数を取得したい場合は「含める」を推奨します。'"
        :color="'gray'"
      />
    </div>

    <div class="mt-5">
      <FormRadio
        v-model:modelValue="excludeReplies"
        :label="'リプライを除外するか'"
        :name="'excludeReplies'"
        :options="excludeRepliesOptions"
      />
      <Supplement
        :txt="'※取得件数を指定した後に判定されるため、正確な件数を取得したい場合は「除外しない」を推奨します。'"
        :color="'gray'"
      />
    </div>

    <div class="mt-8">
      <button
        class="btn"
        :class="loading || screenName === '' ? 'btn-disabled' : 'btn-blue'"
        :disabled="loading || screenName === ''"
        @click="searchUserTimeline"
      >
        検索
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useUserTimeline } from "@/store/modules/userTimeline";

import FormInput from "@/components/_atoms/form/FormInput.vue";
import FormNumber from "@/components/_atoms/form/FormNumber.vue";
import FormRadio from "@/components/_atoms/form/FormRadio.vue";
import Supplement from "@/components/_atoms/Supplement.vue";

export default defineComponent({
  components: {
    FormInput,
    FormNumber,
    FormRadio,
    Supplement,
  },

  setup() {
    const userTimelineStore = useUserTimeline();

    const screenName = ref<string>("");
    const count = ref<number>(20);
    const maxId = ref<string>("");
    const includeRts = ref<"true" | "false">("true");
    const excludeReplies = ref<"true" | "false">("false");
    const loading = ref<boolean>(false);

    const includeRtsOptions: { label: string; value: "true" | "false" }[] = [
      { label: "含める", value: "true" },
      { label: "含めない", value: "false" },
    ];
    const excludeRepliesOptions: { label: string; value: "true" | "false" }[] =
      [
        { label: "除外しない", value: "false" },
        { label: "除外する", value: "true" },
      ];

    const searchUserTimeline = async () => {
      loading.value = true;
      userTimelineStore.mutations.setScreenName(screenName.value);
      userTimelineStore.mutations.setCount(`${count.value}`);
      if (maxId.value !== "") userTimelineStore.mutations.setMaxId(maxId.value);
      userTimelineStore.mutations.setIncludeRts(includeRts.value);
      userTimelineStore.mutations.setExcludeReplies(excludeReplies.value);
      try {
        await userTimelineStore.actions.getUserTimeline();
      } catch {
        alert("無効なユーザー名です");
      }
      loading.value = false;
    };

    return {
      screenName,
      count,
      maxId,
      includeRts,
      excludeReplies,
      loading,
      includeRtsOptions,
      excludeRepliesOptions,
      searchUserTimeline,
    };
  },
});
</script>
