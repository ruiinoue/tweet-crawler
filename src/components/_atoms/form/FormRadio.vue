<template>
  <div class="block mt-4">
    <span class="text-gray-700">RTを含めるか</span>
    <div class="mt-2 flex flex-row">
      <div
        v-for="(option, index) in options"
        :key="index"
        :class="index !== options.length - 1 ? 'mr-8' : ''"
      >
        <label class="inline-flex items-center">
          <input
            type="radio"
            :name="name"
            :value="option.value"
            :checked="option.value === modelValue"
            @change="$emit('update:modelValue', $event.target.value)"
          />
          <span class="ml-2">{{ option.label }}</span>
        </label>
      </div>
    </div>
  </div>
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
      required: true,
    },
    options: {
      type: Array as PropType<{ label: string; value: "true" | "false" }[]>,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },

  emits: ["update:modelValue"],
});
</script>
