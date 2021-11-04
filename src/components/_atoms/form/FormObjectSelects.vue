<template>
  <label class="block">
    <span class="text-gray-700">{{ label }}</span>
    <div class="flex">
      <select
        class="form-select"
        :value="firstModelValue"
        @change="$emit('update:firstModelValue', $event.target.value)"
      >
        <option
          v-for="(option, key) in firstOptions"
          :key="key"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </select>
      <select
        class="form-select"
        :value="secondModelValue"
        @change="$emit('update:secondModelValue', $event.target.value)"
      >
        <option
          v-for="(option, key) in secondOptions"
          :key="key"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </select>
    </div>
  </label>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    firstModelValue: {
      type: String,
      required: true,
    },
    secondModelValue: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
      default: "",
    },
    firstOptions: {
      type: Array as PropType<{ text: string; value: string }[]>,
      required: true,
    },
    secondOptions: {
      type: Array as PropType<{ text: string; value: string }[]>,
      required: true,
    },
  },

  emits: ["update:firstModelValue", "update:secondModelValue"],
});
</script>
