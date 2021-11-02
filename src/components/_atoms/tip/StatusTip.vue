<template>
  <span class="status-tip-container">
    <span aria-hidden class="status-tip-bg"></span>
    <span class="relative">{{ status }}</span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    status: {
      type: String,
      required: true,
    },
  },
});
</script>
