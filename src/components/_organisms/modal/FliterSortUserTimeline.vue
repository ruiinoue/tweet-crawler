<template>
  <ModalAndTrigrer>
    <template #trigrer="{ openModal }">
      <button @click="openModal">開く</button>
    </template>
    <template #body="{ closeModal }">
      <button @click="closeModal">閉じる</button>
    </template>
  </ModalAndTrigrer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ModalAndTrigrer from "@/components/_molecules/modal/ModalAndTrigrer.vue";

export default defineComponent({
  components: {
    ModalAndTrigrer,
  },
});
</script>
