<template>
  <span class="likes-tip-container">
    <span aria-hidden class="likes-tip-bg"></span>
    <span class="relative">{{ count }}</span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
});
</script>
