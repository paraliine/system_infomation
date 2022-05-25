<template>
  <div class="container">

    <div class="card">
      <div class="title">
        Memory
      </div>
      <div id="chart">
        <!--        TODO:chart的大小自适应-->
        <div id="pie"></div>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import {onMounted, ref, watch} from 'vue';

const {ipcRenderer} = require('electron');
import {MemoryInfo} from "../stores/SystemInfoStore";
import * as echarts from 'echarts';
import {systemInfoStore} from "../stores/SystemInfoStore";
import emitter from '../bus/bus.js';
import {storeToRefs} from "pinia";

const systemStore = systemInfoStore();

const {memoryInfo} = storeToRefs(systemStore);


const memInfo = memoryInfo;
const memChart = ref({} as echarts.ECharts);

onMounted(() => {

  console.log("AboutView Mounted");


  memChart.value = echarts.init(document.getElementById('pie'), null);
});


window.onresize = function () {

  memChart.value.resize({
    animation:{
      duration:500,
      easing:'cubicInOut'
    }
  });
};

watch(memInfo, (newMemInfo) => {
  memChart.value.setOption({
    title: {
      text: 'Memory',
      left: 'center',
      top: 'center'
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            value: newMemInfo.used,
            name: 'Used'
          },
          {
            value: newMemInfo.free,
            name: 'Free'
          }
        ],
        radius: ['40%', '70%']
      }
    ]
  })
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
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: var(--border-size-3) solid var(--indigo-5);
  border-radius: var(--radius-conditional-3);
  box-shadow: var(--shadow-6);
  background: var(--gray-0);
}

.title {
  background: var(--gradient-4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-top: var(--size-fluid-3);
  font-size: var(--font-size-6);
  font-weight: var(--font-weight-6);
  font-family: 'JetBrains Mono', monospace;
}

#chart {
  width: 100%;
  height: 100%;
}

#pie {
  height: 100%;
  width: 100%;
  margin: 0 auto;
}


</style>