<template>
  <div>
    <label class="block">
      <span class="text-gray-700">ユーザー名</span>
      <input
        type="text"
        name="screenName"
        class="form-input"
        placeholder="例）inouuuuuuuu_00"
      />
    </label>

    <div class="block mt-4">
      <span class="text-gray-700">RTを含めるか</span>
      <div class="mt-2 flex flex-row">
        <div class="mr-8">
          <label class="inline-flex items-center">
            <input type="radio" name="includeRts" value="1" checked />
            <span class="ml-2">含める</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input type="radio" name="includeRts" value="2" />
            <span class="ml-2">含めない</span>
          </label>
        </div>
      </div>
    </div>

    <div class="block mt-4">
      <span class="text-gray-700">リプライを除外するか</span>
      <div class="mt-2 flex flex-row">
        <div class="mr-8">
          <label class="inline-flex items-center">
            <input type="radio" name="excludeReplies" value="1" checked />
            <span class="ml-2">除外する</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input type="radio" name="excludeReplies" value="2" />
            <span class="ml-2">除外しない</span>
          </label>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <button class="btn btn-blue">検索する</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
