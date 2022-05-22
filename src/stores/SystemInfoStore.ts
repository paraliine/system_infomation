import {defineStore} from "pinia";

class CpuInfo{
    manufacturer: string;
    brand: string;
    cores: number;
    physicalCores: number;
    speedMax: number;
    speedMin: number;

    constructor(manufacturer: string, brand: string, cores: number, physicalCores: number, speedMax: number, speedMin: number) {
        this.manufacturer = manufacturer;
        this.brand = brand;
        this.cores = cores;
        this.physicalCores = physicalCores;
        this.speedMax = speedMax;
        this.speedMin = speedMin;
    }
}

class MemoryInfo{
    total: number;
    free: number;
    used: number;

    constructor(total: number, free: number, used: number) {
        this.total = total;
        this.free = free;
        this.used = used;
    }
}


const systemInfoStore = defineStore('cpuInfo', {
    state: () => {
        return {
            cpuInfo: new CpuInfo("", "", 0, 0, 0, 0),
            memoryInfo: new MemoryInfo(0, 0, 0),

        }
    }
});

module.exports = systemInfoStore;
