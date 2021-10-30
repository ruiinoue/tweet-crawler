<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import { store, storeKey } from "./store";

export default defineComponent({
  setup() {
    provide(storeKey, store);
  },
});
</script>

<style></style>
