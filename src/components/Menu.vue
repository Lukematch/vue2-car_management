<!-- eslint-disable vue/multi-word-component-names -->
<!--
  作者:luke
  时间：2024年01月02日 18:19:36
  vue版本:v2.7.14
-->
<template>
  <div class="menu-wrapper">
    <div class="menu-wrapper-left">
      <img src="https://vue2.baiwumm.com/assets/logo.0bc2ad1b.svg"/>
      <h1>Vue2 CarsMS</h1>
    </div>
    <el-menu default-active="1"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.home {
  display:flex;
  align-items: center;
  background-color: #fff;
  padding: 8px;
}
.menu-wrapper-left {
  display: flex;
  margin-right: 20px;
  align-items: center;
}
img {
  margin-left: 20px;
  margin-right: 20px;
  width: 32px;
}
h1 {
  font-size: 15px;
  color: #002140;
  font-weight: 500;
  
}
.menu-wrapper {
  display: flex;
  border-bottom: 1px solid #dcdfe6;
}
</style>