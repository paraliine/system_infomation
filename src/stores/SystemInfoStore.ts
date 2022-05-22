import {defineStore} from "pinia";

export class CpuInfo{
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

export class MemoryInfo{
    total: number;
    free: number;
    used: number;

    constructor(total: number, free: number, used: number) {
        this.total = total;
        this.free = free;
        this.used = used;
    }
}



export const systemInfoStore = defineStore('cpuInfo',{
    state:()=>{
        return{
            cpuInfo: new CpuInfo("", "", 0, 0, 0, 0),
            memoryInfo: new MemoryInfo(0, 0, 0),

        }
    }
})