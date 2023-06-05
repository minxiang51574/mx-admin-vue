<template>
  <div class="container">
    {{ $t('menu.dashboard') }}
    <el-table mb-1 :data="[]" />
    <el-pagination :total="100" />
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped></style>
