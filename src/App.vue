<template>
  <a-layout>
    <a-layout-header
      class="z-20 hidden h-16 layout-header md:block"
      style="padding: 0"
    >
      <div class="logo" />
      <a-menu
        mode="horizontal"
        v-model:selectedKeys="selectedKeys"
        class="layout-header-menu"
      >
        <a-row class="justify-center layout-header-menu-row">
          <a-col :md="4" :xs="4" :sm="4">
            <a-menu-item key="1">首页</a-menu-item>
          </a-col>
          <a-col :md="4" :xs="4" :sm="4">
            <a-menu-item key="2">支部概况</a-menu-item>
          </a-col>
          <a-col :md="4" :xs="4" :sm="4">
            <a-menu-item key="3">支部活动</a-menu-item>
          </a-col>
          <a-col :md="4" :xs="4" :sm="4">
            <a-menu-item key="4">党员风采</a-menu-item>
          </a-col>
          <a-col :md="4" :xs="4" :sm="12">
            <a-menu-item key="5">教学科研</a-menu-item>
          </a-col>
        </a-row>
      </a-menu>
    </a-layout-header>
    <a-layout-content class="w-full mt-0 md:mt-16">
      <router-view />
    </a-layout-content>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import "ant-design-vue/dist/antd.css";
export default defineComponent({
  setup() {
    return {
      selectedKeys: ref<string[]>(["1"]),
    };
  },
});
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
}
:root {
  --layout-bg-color: rgb(217, 36, 27);
}
.ant-menu-item-selected {
  color: rgb(177, 9, 0);
  background: white;
}
.ant-menu-item:hover {
  color: rgb(177, 9, 0) !important;
  background: white;
}
.ant-menu-item-active {
  color: rgb(177, 9, 0) !important;
}

::-webkit-scrollbar {
  width: 7px;
  height: 5px;
  border-radius: 15px;
  -webkit-border-radius: 15px;
}
::-webkit-scrollbar-track-piece {
  background-color: #ffff;
  border-radius: 15px;
  -webkit-border-radius: 15px;
}
::-webkit-scrollbar-thumb:vertical {
  height: 5px;
  background-color: rgba(144, 147, 153, 0.5);
  border-radius: 15px;
  -webkit-border-radius: 15px;
}
::-webkit-scrollbar-thumb:horizontal {
  width: 7px;
  background-color: rgba(144, 147, 153, 0.5);
  border-radius: 15px;
  -webkit-border-radius: 15px;
}
</style>
<style>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
.layout-header {
  position: fixed;
  z-index: 1;
  width: 100%;
  background: var(--layout-bg-color);
}
.layout-header .layout-header-menu {
  line-height: 64px;
  justify-content: center;
  border: 0;
  background: var(--layout-bg-color);
}
.layout-header .layout-header-menu .layout-header-menu-row {
  height: 100%;
  width: 100%;
  background: var(--layout-bg-color);
  font-weight: bold;
  color: white;
  text-align: center;
}
</style>
