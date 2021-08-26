<template>
  <div class="flex items-center justify-center w-full my-5">
    <div class="w-2/3">
      <a-row justify="center">
        <a-col
          v-for="item in 5"
          :key="item"
          :span="4"
          class="flex items-center justify-center h-32 mx-2"
        >
          <div
            class="flex items-center justify-center font-bold text-white bg-blue-500 rounded-full  h-28 w-28"
          >
            介绍{{ item }}
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>