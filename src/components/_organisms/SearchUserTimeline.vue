<template>
  <div>
    <FormInput
      v-model:modelValue="screenName"
      :label="'ユーザー名'"
      :name="'screenName'"
      :placeholder="'例）inouuuuuuuu_00'"
    />

    <div class="block mt-4">
      <span class="text-gray-700">RTを含めるか</span>
      <div class="mt-2 flex flex-row">
        <div class="mr-8">
          <label class="inline-flex items-center">
            <input v-model="includeRts" type="radio" name="includeRts" :value="false" checked />
            <span class="ml-2">含める</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input v-model="includeRts" type="radio" name="includeRts" :value="true" />
            <span class="ml-2">含めない</span>
          </label>
        </div>
      </div>
    </div>

    <div class="block mt-4">
      <span class="text-gray-700">リプライを除外するか</span>
      <div class="mt-2 flex flex-row">
        <div class="mr-8">
          <label class="inline-flex items-center">
            <input v-model="excludeReplies" type="radio" name="excludeReplies" :value="false" checked />
            <span class="ml-2">除外する</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input v-model="excludeReplies" type="radio" name="excludeReplies" :value="true" />
            <span class="ml-2">除外しない</span>
          </label>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <button class="btn btn-blue" @click="searchUserTimeline">検索する</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import FormInput from "@/components/_atoms/form/FormInput.vue";

export default defineComponent({
  components: {
    FormInput,
  },

  setup() {
    const screenName = ref<string>("");
    const includeRts = ref<boolean>(false);
    const excludeReplies = ref<boolean>(false);

    const searchUserTimeline = () => {
      console.log(screenName.value);
      console.log(includeRts.value);
      console.log(excludeReplies.value);
    };

    return {
      screenName,
      includeRts,
      excludeReplies,
      searchUserTimeline,
    };
  },
});
</script>
