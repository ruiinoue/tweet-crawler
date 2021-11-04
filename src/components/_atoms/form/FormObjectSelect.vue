<template>
  <label class="block">
    <span class="text-gray-700">{{ label }}</span>
    <select
      class="form-select"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option v-for="(option, key) in options" :key="key" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </label>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
      default: "",
    },
    options: {
      type: Array as PropType<{ text: string; value: string }[]>,
      required: true,
    },
  },

  emits: ["update:modelValue"],
});
</script>
