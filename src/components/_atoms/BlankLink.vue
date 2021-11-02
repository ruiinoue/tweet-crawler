<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="text-blue-500 hover:underline"
  >
    {{ url }}
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    url: {
      type: String,
      required: true,
    },
  },
});
</script>
