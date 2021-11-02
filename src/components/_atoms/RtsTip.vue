<template>
  <span class="rts-tip-container">
    <span aria-hidden class="rts-tip-bg"></span>
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
