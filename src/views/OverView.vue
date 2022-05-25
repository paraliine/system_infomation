<script setup lang="ts">
import {systemInfoStore} from '../stores/SystemInfoStore';
import {storeToRefs} from "pinia";
import Sortable from 'sortablejs';
import {onMounted} from "vue";

const systemStore = systemInfoStore();

onMounted(()=>{
  let cards = document.getElementById("draggable")
  let sortable = Sortable.create(cards);

})

const {
  cpuInfo,
  memoryInfo,
  gpuStaticInfo,
  gpuDynamicInfo,
  systemInfo,
  biosInfo,
  baseboardInfo,
  osInfo
} = storeToRefs(systemStore);


</script>

<template>
  <div class="container">
    <!--TODO:学习 %和vh的区别-->
    <el-scrollbar id="scrollbar" max-height="100vh">
      <div class="responsive-cards" id="draggable">
        <div class="card">
          <div class="title">CPU</div>
          <div class="content">
            Manufacturer: {{ cpuInfo.manufacturer }}
          </div>
          <div class="content">
            Brand: {{ cpuInfo.brand }}
          </div>
          <div class="content">
            Cores: {{ cpuInfo.cores }}
          </div>
        </div>
        <div class="card">
          <div class="title">GPU</div>
          <div class="content">
            Vendor: {{ gpuStaticInfo.vendor }}
          </div>
          <div class="content">
            Model: {{ gpuStaticInfo.model }}
          </div>
          <div class="content">
            Video RAM: {{ gpuStaticInfo.vram }}
          </div>
          <div class="content">
            Driver Version: {{ gpuStaticInfo.driverVersion }}
          </div>
        </div>
        <div class="card">
          <div class="title">Memory</div>
        </div>
        <div class="card">
          <div class="title">System</div>
          <div class="content">
            Manufacturer: {{ systemInfo.manufacturer }}
          </div>
          <div class="content">
            Version: {{ systemInfo.version }}
          </div>
          <div class="content">
            Serial: {{ systemInfo.serial }}
          </div>
          <div class="content">
            Uuid: {{ systemInfo.uuid }}
          </div>
          <div class="content">
            Virtual: {{ systemInfo.virtual }}
          </div>

        </div>
        <div class="card">
          <div class="title">BIOS</div>
          <div class="content">
            Vendor: {{ biosInfo.vendor }}
          </div>
          <div class="content">
            Version: {{ biosInfo.version }}
          </div>
          <div class="content">
            Release Date: {{ biosInfo.releaseDate }}
          </div>
          <div class="content">
            Serial: {{ biosInfo.serial }}
          </div>
        </div>
        <div class="card">
          <div class="title">Baseboard</div>
          <div class="content">
            Manufacturer: {{ baseboardInfo.manufacturer }}
          </div>
          <div class="content">
            Model: {{ baseboardInfo.model }}
          </div>
          <div class="content">
            Version: {{ baseboardInfo.version }}
          </div>
          <div class="content">
            Serial: {{ baseboardInfo.serial }}
          </div>
          <div class="content">
            MemSlots: {{ baseboardInfo.memSlots }}
          </div>
        </div>
        <div class="card">
          <div class="title">OS</div>
          <div class="content">
            Platform: {{ osInfo.platform }}
          </div>
          <div class="content">
            Distro: {{ osInfo.distro }}
          </div>
          <div class="content">
            Release: {{ osInfo.release }}
          </div>
          <div class="content">
            Kernel: {{ osInfo.kernel }}
          </div>
          <div class="content">
            Arch: {{ osInfo.arch }}
          </div>
          <div class="content">
            Hostname: {{ osInfo.hostname }}
          </div>
          <div class="content">
            Uefi: {{ osInfo.uefi }}
          </div>
        </div>
        <div class="card"></div>
      </div>

    </el-scrollbar>


  </div>

</template>

<style scoped>

.container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  /*background: var(--gradient-9);*/
}

#scrollbar {
  width: 100%;
}

.responsive-cards {
  height: 80%;
  width: 100%;
  justify-content: space-evenly;
  padding-top: 1rem;
  padding-left: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;

}

.card {
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--gray-0);
  /*border: var(--border-size-3) solid var(--indigo-5);*/
  border-radius: var(--radius-conditional-4);
  box-shadow: var(--inner-shadow-4);

}
@keyframes c-scale-up {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}


.card:hover {
  box-shadow: var(--shadow-6);
  animation: c-scale-up forwards;
  animation-duration: 0.7s;
  animation-timing-function: var(--ease-out-5);
}

.title{
  text-align: center;
  background: var(--gradient-24);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: var(--font-size-5);
  font-weight: var(--font-weight-6);
  font-family: 'JetBrains Mono', monospace;
}

.content{
  text-align: center;
  font-weight: var(--font-weight-6);
  font-family: 'JetBrains Mono', monospace;
}
</style>