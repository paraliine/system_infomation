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
              <set-up/>
            </el-icon>
            <span>Overview</span>
          </el-menu-item>
          <el-menu-item index="/cpu">
            <el-icon>
              <postcard/>
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
  SetUp,
  Postcard,
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

  }
}

const highFrequency = 2000;
const lowFrequency = 5000;

const initialize = () => {

  getSystemInfo();
  setInterval(watchSystemInfoLow, lowFrequency);
  setInterval(watchSystemInfoHigh, highFrequency);
}


const getSystemInfo = () =>{
  //Get system static info
  ipcRenderer.invoke("Get", "Overview").then((result) => {
    console.log("Get Overview");
    systemStore.systemInfo=result.system;
    systemStore.biosInfo=result.bios;
    systemStore.baseboardInfo=result.baseboard;
    systemStore.osInfo=result.osInfo;
  });
  //Overview


  //CPU
  ipcRenderer.invoke("Get", "CPU").then((result) => {
    systemStore.cpuInfo = result;
  });

  //GPUStatic
  ipcRenderer.invoke("Get", "GPUStatic").then((result) => {
    systemStore.gpuStaticInfo = result;
  });





}

const watchSystemInfoLow = () =>{
  //GEt system dynamic info

  //Memory
  // ipcRenderer.invoke("Get", "Memory").then((result) => {
  //   systemStore.memoryInfo = result;
  // });

  //GPUDynamic
  // ipcRenderer.invoke("Get", "GPUDynamic").then((result) => {
  //   systemStore.gpuDynamicInfo = result;
  // });

}

const watchSystemInfoHigh =() =>{
  //GEt system dynamic info

  //Memory
  ipcRenderer.invoke("Get", "Memory").then((result) => {
    systemStore.memoryInfo = result;
  });
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
  background: var(--gradient-9);
}
</style>
