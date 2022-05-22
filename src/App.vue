<template>
  <el-row>
    <el-col :span="6">
      <el-menu
          default-active="2"
          :router="true"
          class="el-menu-vertical-demo"
          @open="handleOpen"
      >
        <el-menu-item index="/">
          <el-icon>
            <icon-menu/>
          </el-icon>
          <span>CPU</span>
        </el-menu-item>
        <el-menu-item index="/about">
          <el-icon>
            <setting/>
          </el-icon>
          <span>Memory</span>
        </el-menu-item>
      </el-menu>
    </el-col>

    <el-col :span="18">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component"/>
        </keep-alive>
      </router-view>

    </el-col>
  </el-row>

</template>


<script setup lang="ts">
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from "@element-plus/icons-vue"

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key);
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
