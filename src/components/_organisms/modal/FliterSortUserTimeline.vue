<template>
  <ModalAndTrigrer>
    <template #trigrer="{ openModal }">
      <button class="btn btn-blue" @click="openModal">
        フィルター・ソート設定
      </button>
    </template>

    <template #body="{ closeModal }">
      <h2 class="modal-title mb-4">フィルター・ソート設定</h2>

      <FormObjectSelect
        v-model:modelValue="fliterStatus"
        :label="'ステータス設定'"
        :options="fliterStatusOptions"
        class="mb-4"
      />

      <FormObjectSelects
        v-model:firstModelValue="sortKey"
        v-model:secondModelValue="sortOrderby"
        :label="'ソート設定'"
        :firstOptions="sortKeyOptions"
        :secondOptions="sortOrderbyOptions"
        class="mb-4"
      />

      <div class="mt-5 flex justify-end">
        <button @click="closeModal">閉じる</button>
        <button class="btn btn-blue ml-2" @click="saveFilterSort">保存</button>
      </div>
    </template>
  </ModalAndTrigrer>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import ModalAndTrigrer from "@/components/_molecules/modal/ModalAndTrigrer.vue";

import FormObjectSelect from "@/components/_atoms/form/FormObjectSelect.vue";
import FormObjectSelects from "@/components/_atoms/form/FormObjectSelects.vue";

export default defineComponent({
  components: {
    ModalAndTrigrer,
    FormObjectSelect,
    FormObjectSelects,
  },

  setup() {
    const fliterStatus = ref<string>("");
    const sortKey = ref<string>("");
    const sortOrderby = ref<string>("");

    const fliterStatusOptions: { text: string; value: string }[] = [
      { text: "未選択", value: "" },
      { text: "ツイート", value: "1" },
      { text: "画像ツイート", value: "2" },
      { text: "動画ツイート", value: "3" },
      { text: "画像引用", value: "4" },
      { text: "動画引用", value: "5" },
      { text: "RT", value: "6" },
      { text: "引用RT", value: "7" },
      { text: "リプライ", value: "8" },
    ];
    const sortKeyOptions: { text: string; value: string }[] = [
      { text: "未選択", value: "" },
      { text: "いいね数", value: "likes" },
      { text: "RT数", value: "rts" },
    ];
    const sortOrderbyOptions: { text: string; value: string }[] = [
      { text: "未選択", value: "" },
      { text: "昇順", value: "asc" },
      { text: "降順", value: "desc" },
    ];

    const saveFilterSort = () => {
      console.log(fliterStatus.value);
      console.log(sortKey.value);
      console.log(sortOrderby.value);
    };

    return {
      fliterStatus,
      sortKey,
      sortOrderby,
      fliterStatusOptions,
      sortKeyOptions,
      sortOrderbyOptions,
      saveFilterSort,
    };
  },
});
</script>
