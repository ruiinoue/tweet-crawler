<template>
  <div>
    <slot name="trigrer" :openModal="openModal" />

    <div
      class="modal-overlay"
      :style="{ visibility: overlayAppearance }"
      @click.self="closeModal"
    >
      <div class="modal-container">
        <div class="modal-inner" :style="{ opacity: modalAppearance }">
          <slot name="body" :closeModal="closeModal" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const toggleModal = ref<boolean>(false);

    const openModal = () => {
      toggleModal.value = true;
    };
    const closeModal = () => {
      toggleModal.value = false;
    };

    const overlayAppearance = computed(() => {
      return toggleModal.value ? "visible" : "hidden";
    });
    const modalAppearance = computed(() => {
      return toggleModal.value ? "1" : "0";
    });

    return {
      openModal,
      closeModal,
      overlayAppearance,
      modalAppearance,
    };
  },
});
</script>
