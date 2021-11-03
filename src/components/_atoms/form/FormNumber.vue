<template>
  <label class="block">
    <span class="text-gray-700">{{ label }}</span>
    <input
      :value="modelValue"
      type="number"
      :name="name"
      class="form-input"
      :placeholder="placeholder"
      :max="max"
      :min="min"
      @input="$emit('update:modelValue', Number($event.target.value))"
    />
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: Number,
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
    max: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
      required: true,
    },
  },

  emits: ["update:modelValue"],
});
</script>
