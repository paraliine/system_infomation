<template>

<!--  TODO:改为flex布局，把侧菜单的宽度卡死，不允许重叠-->
  <div class="container">
    <el-row>
      <el-col :span="4">
        <el-menu
            default-active="2"
            :router="true"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            style="background: transparent"
        >
          <el-menu-item index="/">
            <el-icon>
              <icon-menu/>
            </el-icon>
            <span>Overview</span>
          </el-menu-item>
          <el-menu-item index="/cpu">
            <el-icon>
              <icon-menu/>
            </el-icon>
            <span>CPU</span>
          </el-menu-item>
          <el-menu-item index="/memory">
            <el-icon>
              <setting/>
            </el-icon>
            <span>Memory</span>
          </el-menu-item>
        </el-menu>
      </el-col>

      <el-col :span="20">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component"/>
          </keep-alive>
        </router-view>

      </el-col>
    </el-row>
  </div>


</template>


<script setup lang="ts">
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from "@element-plus/icons-vue"
import emitter from './bus/bus.js';
import {onBeforeMount, onMounted} from "vue";

const {ipcRenderer} = require('electron');
import {systemInfoStore} from "./stores/SystemInfoStore";


const systemStore = systemInfoStore();

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key);
}

const watcher = (args: any) => {
  if (args === "CPU") {
    ipcRenderer.invoke("Get", "CPU").then((result) => {
      systemStore.cpuInfo = result;
    })
  }
}

const interval = 1000;

const initialize = () => {
    //执行相关的动态监听工作

  setInterval(watchSystemInfo, interval);
}

const watchSystemInfo = () =>{
  ipcRenderer.invoke("Get","Memory").then((result)=>{
    systemStore.memoryInfo = result;
  })
}

onBeforeMount(() => {

  emitter.on("Watch", watcher);

})

onMounted(() => {
  initialize();
})

</script>

<style scoped>
.container{
  min-height: 100vh;
  background: var(--gray-2);
}
</style>
