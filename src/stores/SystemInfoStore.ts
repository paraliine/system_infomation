import {defineStore} from "pinia";

export class SystemInfo{
    manufacturer: string;
    version: string;
    serial: string;
    uuid: string;
    virtual: boolean;
    constructor(manufacturer: string, version: string, serial: string, uuid: string, virtual: boolean){
        this.manufacturer = manufacturer;
        this.version = version;
        this.serial = serial;
        this.uuid = uuid;
        this.virtual = virtual;
    }
}

export class BiosInfo{
    vendor: string;
    version: string;
    releaseDate: string;
    serial: string;

    constructor(vendor: string, version: string, releaseDate: string, serial: string){
        this.vendor = vendor;
        this.version = version;
        this.releaseDate = releaseDate;
        this.serial = serial;
    }
}

export class BaseboardInfo{
    manufacturer: string;
    model: string;
    version: string;
    serial: string;
    memSlots: number;

    constructor(manufacturer: string, model: string, version: string, serial: string, memSlots: number){
        this.manufacturer = manufacturer;
        this.model = model;
        this.version = version;
        this.serial = serial;
        this.memSlots = memSlots;
    }
}

export class OSInfo{
    platform: string;
    distro: string;
    release: string;
    kernel: string;
    arch: string;
    hostname: string;
    uefi: boolean;

    constructor(platform: string, distro: string, release: string, kernel: string, arch: string, hostname: string, uefi: boolean){
        this.platform = platform;
        this.distro = distro;
        this.release = release;
        this.kernel = kernel;
        this.arch = arch;
        this.hostname = hostname;
        this.uefi = uefi;
    }
}


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

export class GPUStaticInfo{
    vendor: string;
    model: string;
    bus: string;
    vram: number;
    vramDynamic: boolean;
    driverVersion: string;

    constructor(vendor: string, model: string, bus: string,
                vram: number, vramDynamic: boolean, driverVersion: string) {
        this.vendor = vendor;
        this.model = model;
        this.bus = bus;
        this.vram = vram;
        this.vramDynamic = vramDynamic;
        this.driverVersion = driverVersion;
    }
}



export class GPUDynamicInfo{
    memoryTotal: number;
    memoryUsed: number;
    memoryFree: number;
    temperatureGpu: number;
    powerDraw: number;
    clockCore: number;

    constructor(memoryTotal: number, memoryUsed: number, memoryFree: number,
                temperatureGpu: number, powerDraw: number, clockCore: number) {
        this.memoryTotal = memoryTotal;
        this.memoryUsed = memoryUsed;
        this.memoryFree = memoryFree;
        this.temperatureGpu = temperatureGpu;
        this.powerDraw = powerDraw;
        this.clockCore = clockCore;
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


export const systemInfoStore = defineStore('cpuInfo', {
    state: () => {
        return {
            systemInfo: new SystemInfo("", "", "", "", false),
            biosInfo: new BiosInfo("", "", "", ""),
            baseboardInfo: new BaseboardInfo("", "", "", "", 0),
            osInfo: new OSInfo("", "", "", "", "", "", false),
            cpuInfo: new CpuInfo("", "", 0, 0, 0, 0),
            memoryInfo: new MemoryInfo(0, 0, 0),
            gpuStaticInfo: new GPUStaticInfo("", "", "", 0, false, ""),
            gpuDynamicInfo: new GPUDynamicInfo(0, 0, 0, 0, 0, 0),
        }
    }
});

