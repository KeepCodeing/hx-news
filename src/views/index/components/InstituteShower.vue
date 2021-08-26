<template>
  <div class="flex items-center justify-center w-full mt-5">
    <div class="w-2/3 h-full">
      <a-row type="flex" justify="center">
        <a-col
          :span="7"
          class="relative m-2 h-52"
          v-for="item in insittuteList"
          :key="item.title"
          :class="`bg-${item.img}-300`"
        >
          <div class="flex items-center justify-center w-full h-full ins-box">
            <div
              class="w-full p-5 font-bold text-center text-white bg-black bg-opacity-50 cursor-pointer ins-title"
            >
              {{ item.title }}
            </div>
            <div
              class="absolute top-0 items-center justify-center hidden w-full h-full bg-black bg-opacity-75 ins-mask"
            >
              <div
                class="absolute w-full p-5 font-bold text-center text-black transform -translate-y-1/2 bg-white bg-opacity-75 cursor-pointer top-1/2 ins-title"
              >
                点击前往
              </div>
            </div>
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
    const insittuteList = [
      { url: '', title: "体育学院", img: "red" },
      { url: '', title: "智能制造学院", img: "blue" },
      { url: '', title: "生物与制药工程院", img: "yellow" },
      { url: '', title: "商学院", img: "indigo" },
      { url: '', title: "外国语学院", img: "purple" },
      { url: '', title: "信息工程学院", img: "green" },
      { url: '', title: "艺术设计与传媒学院", img: "pink" },
      { url: '', title: "创新创业学院", img: "red" },
      { url: '', title: "马克思主义学院", img: "blue" },
    ];

    return {
      insittuteList,
    };
  },
});
</script>

<style scoped>
/* 这里不好使用兄弟选择器，用父子选择器才可以操控里面的元素 */
.ins-box:hover > .ins-mask {
  display: block;
}
.ins-box:hover > .ins-title {
  display: none;
}
</style>