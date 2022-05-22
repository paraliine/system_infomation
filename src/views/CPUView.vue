<template>
  <div id="CPUInfo">
    <el-row justify="center">
      <el-col :span="12">
        <h1>CPU Info</h1>
      </el-col>
    </el-row>
    <div>
      <el-row justify="center" class="content">
        Manufacturer: {{ cpuInfo.manufacturer }}
      </el-row>
      <el-row justify="center" class="content">
        Brand: {{ cpuInfo.brand }}
      </el-row>
      <el-row justify="center" class="content">
        Cores: {{ cpuInfo.cores }}
      </el-row>
      <el-row justify="center" class="content">
        PhysicalCores: {{ cpuInfo.physicalCores }}
      </el-row>
      <el-row justify="center" class="content">
        MaxSpeed:{{ cpuInfo.speedMax }} GHz
      </el-row>
      <el-row justify="center" class="content">
        MinSpeed:{{ cpuInfo.speedMin }} GHz
      </el-row>
    </div>

  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, onBeforeMount} from 'vue';

const {ipcRenderer} = require('electron');
import {systemInfoStore} from '../stores/SystemInfoStore';
import {storeToRefs} from "pinia";

const systemStore = systemInfoStore();

const {cpuInfo} = storeToRefs(systemStore);

onBeforeMount(() => {
  //TODO: 先这么写，使用electron的ipcRenderer
  ipcRenderer.send("Watch","CPU");
});


onMounted(() => {
  console.log("HomeView Mounted");


});


</script>
<style>
.content {
  font-size: 30px;
}
</style>
