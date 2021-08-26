<template>
  <div class="flex items-center justify-center w-full mt-5 h-96">
    <div
      class="flex items-center justify-center h-full overflow-hidden md:w-4/5"
    >
      <div
        v-for="(item, idx) in indexMessage"
        :key="idx"
        class="h-full transform"
        @mouseenter="currentBoard = idx"
        :class="
          currentBoard === idx
            ? 'w-1/2 scale-y-105 shadow-2xl z-10'
            : 'w-1/4 scale-100'
        "
      >
        <div
          class="w-full p-4"
          style="background: var(--layout-bg-color); border-width: 1px"
        >
          <h1 class="font-bold text-center text-white cursor-pointer">
            {{ item.title }}
          </h1>
        </div>
        <ul class="overflow-x-hidden overflow-y-scroll h-80">
          <li
            v-for="item in 10"
            :key="item"
            class="p-2 font-light bg-white cursor-pointer border-b-black"
            style="border-bottom: 1px solid rgb(216, 216, 216)"
          >
            <span class="break-words overflow-ellipsis whitespace-nowrap">
              {{ item }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  setup() {
    const currentBoard = ref(0);
    const titleList = ["支部概况", "支部活动", "党员风采"];
    const indexMessage = reactive([
      { title: "支部概况", list: [{ title: "" }] },
      { title: "支部活动", list: [{ title: "" }] },
      { title: "党员风采", list: [{ title: "" }] },
    ]);
    return {
      currentBoard,
      titleList,
      indexMessage,
    };
  },
});
</script>

<style scoped>
</style>