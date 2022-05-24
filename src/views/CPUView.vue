<template>
  <div class="container">
    <div class="card">
      <div id="title">
        CPU Info
      </div>
      <div class="content">
        Manufacturer: {{ cpuInfo.manufacturer }}
      </div>
<!--      TODO:单个元素warp时如何全部居中 -->
      <div class="content">
        Brand: {{ cpuInfo.brand }}
      </div>
      <div class="content">
        Cores: {{ cpuInfo.cores }}
      </div>
      <div class="content">
        PhysicalCores: {{ cpuInfo.physicalCores }}
      </div>
      <div class="content">
        MaxSpeed:{{ cpuInfo.speedMax }} GHz
      </div>
      <div class="content">
        MinSpeed:{{ cpuInfo.speedMin }} GHz
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, onBeforeMount} from 'vue';

const {ipcRenderer} = require('electron');
import {systemInfoStore} from '../stores/SystemInfoStore';
import {storeToRefs} from "pinia";
import emitter from '../bus/bus.js';


const systemStore = systemInfoStore();

const {cpuInfo} = storeToRefs(systemStore);


onBeforeMount(() => {
  // ipcRenderer.send("Watch","CPU");
});


onMounted(() => {
  console.log("HomeView Mounted");
  emitter.emit("Watch", "CPU");


});


</script>
<style scoped>
.container {
  height: 100%;
  display: flex;
  /*flex-direction: column;*/
  justify-content: center;
  align-items: center;
}

.card {
  width: 70%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: var(--border-size-3) solid var(--indigo-5);
  border-radius: var(--radius-conditional-3);
  box-shadow: var(--shadow-6);
  background: var(--gray-0);
}

.content {
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-4);
}

#title {
  font-size: var(--font-size-6);
  font-weight: var(--font-weight-6);
}

</style>
