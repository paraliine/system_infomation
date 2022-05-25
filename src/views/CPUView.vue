<template>
  <div class="container">
    <div class="card">
      <div class="title">
        CPU Info
      </div>
      <div class="content">
        Manufacturer: {{ cpuInfo.manufacturer }}
      </div>
      <div class="content" style="text-align: center">
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
  //TODO:感觉没有必要
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
  font-weight: var(--font-weight-6);
  font-family: 'JetBrains Mono', monospace;
}

.title {
  background: var(--gradient-4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: var(--font-size-6);
  font-weight: var(--font-weight-6);
  font-family: 'JetBrains Mono', monospace;
}

</style>
