<template>
  <div class="app-process">
    <div class="app-process__icon" @click="router.back">
      <!-- <el-icon><arrow-left-bold /></el-icon> -->
      <span>后退</span>
    </div>
  </div>
</template>
<script lang="ts" name="app-process" setup></script>
<style lang="scss" scoped>
.app-process {
  display: flex;
  align-items: center;
  height: 30px;
  position: relative;
  margin-bottom: 10px;
  padding: 0 10px;
  user-select: none;

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    height: 30px;
    padding: 0 10px;
    border-radius: 3px;
    margin-right: 10px;
    cursor: pointer;
    color: #000;

    span {
      font-size: 12px;
    }

    .el-icon {
      margin-right: 2px;
      font-size: 15px;
      color: #666;
    }

    &:hover {
      background-color: #eee;
    }

    &.active {
      span,
      .el-icon {
        color: var(--color-primary);
        font-weight: bold;
      }
    }
  }

  &__scroller {
    width: 100%;
    flex: 1;
    white-space: nowrap;
  }

  &__item {
    display: inline-flex;
    align-items: center;
    border-radius: 3px;
    height: 30px;
    padding: 0 10px;
    background-color: #fff;
    font-size: 12px;
    margin-right: 10px;
    color: #909399;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    .el-icon {
      font-size: 13px;
      width: 0;
      overflow: hidden;
      transition: all 0.3s;

      &:hover {
        color: #fff;
        background-color: var(--color-primary);
      }
    }

    &:hover {
      &:not(.active) {
        background-color: #eee;
      }

      .el-icon {
        width: 13px;
        margin-left: 5px;
      }
    }

    &.active {
      span {
        color: var(--color-primary);
        font-weight: bold;
      }

      .el-icon {
        width: auto;
        margin-left: 5px;
      }

      &:before {
        background-color: var(--color-primary);
      }
    }
  }
}
</style>
