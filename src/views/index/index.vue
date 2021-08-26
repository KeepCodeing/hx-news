<template>
  <div class="w-full">
    <a-carousel autoplay>
      <div class="w-full bg-red-500 h-52 md:h-72"></div>
      <div class="w-full bg-yellow-500 h-52 md:h-72"></div>
      <div class="w-full bg-green-500 h-52 md:h-72"></div>
      <div class="w-full bg-blue-500 h-52 md:h-72"></div>
    </a-carousel>
    <articles-shower />
    <institute-shower />
    <member-shower />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ArticlesShower from "./components/ArticlesShower.vue";
import InstituteShower from "./components/InstituteShower.vue";
import MemberShower from "./components/MemberShower.vue";

export default defineComponent({
  components: { ArticlesShower, InstituteShower, MemberShower },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  overflow: hidden;
  @apply h-52 md:h-72;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>