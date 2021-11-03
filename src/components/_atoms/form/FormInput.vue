<template>
  <label class="block">
    <span class="text-gray-700">{{ label }}</span>
    <input
      :value="modelValue"
      type="text"
      :name="name"
      class="form-input"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";

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
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
  },

  emits: ["update:modelValue"],
});
</script>
