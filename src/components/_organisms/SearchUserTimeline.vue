<template>
  <div>
    <FormInput
      v-model:modelValue="screenName"
      :label="'ユーザー名'"
      :name="'screenName'"
      :placeholder="'例）inouuuuuuuu_00'"
    />

    <div class="mt-4">
      <FormRadio
        v-model:modelValue="includeRts"
        :label="'RTを含めるか'"
        :name="'includeRts'"
        :options="includeRtsOptions"
      />
    </div>

    <div class="mt-4">
      <FormRadio
        v-model:modelValue="excludeReplies"
        :label="'リプライを除外するか'"
        :name="'excludeReplies'"
        :options="excludeRepliesOptions"
      />
    </div>

    <div class="mt-4">
      <button class="btn btn-blue" @click="searchUserTimeline">検索する</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import FormInput from "@/components/_atoms/form/FormInput.vue";
import FormRadio from "@/components/_atoms/form/FormRadio.vue";

export default defineComponent({
  components: {
    FormInput,
    FormRadio,
  },

  setup() {
    const screenName = ref<string>("");
    const includeRts = ref<"true" | "false">("false");
    const excludeReplies = ref<"true" | "false">("false");

    const includeRtsOptions: { label: string; value: "true" | "false" }[] = [
      { label: "含めない", value: "false" },
      { label: "含める", value: "true" },
    ];
    const excludeRepliesOptions: { label: string; value: "true" | "false" }[] =
      [
        { label: "除外しない", value: "false" },
        { label: "除外する", value: "true" },
      ];

    const searchUserTimeline = () => {
      console.log(screenName.value);
      console.log(includeRts.value);
      console.log(excludeReplies.value);
    };

    return {
      screenName,
      includeRts,
      excludeReplies,
      includeRtsOptions,
      excludeRepliesOptions,
      searchUserTimeline,
    };
  },
});
</script>
