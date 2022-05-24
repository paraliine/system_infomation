<script setup lang="ts">

</script>

<template>
  <div class="container">
<!--TODO:学习 %和vh的区别-->
    <el-scrollbar id="scrollbar" max-height="100vh">
<!--      TODO:最终实现可拖拽排序-->
      <div class="responsive-cards">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      </div>

    </el-scrollbar>




  </div>

</template>

<style scoped>

.container{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

#scrollbar{
  width: 100%;
}

.responsive-cards {
  height: 80%;
  width: 100%;
  justify-content: space-evenly;
  padding-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
  grid-gap: 1rem;

}

.card{
  width: 250px;
  height: 250px;
  background: var(--gray-0);
  border: var(--border-size-3) solid var(--indigo-5);
  border-radius: var(--radius-conditional-3);
  box-shadow: var(--shadow-6);
}

</style>