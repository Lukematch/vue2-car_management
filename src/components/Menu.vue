<!-- eslint-disable vue/multi-word-component-names -->
<!--
  作者:luke
  时间：2024年01月02日 18:19:36
  vue版本:v2.7.14
-->
<template>
  <div class="menu-wrapper">
    <div class="menu-wrapper-left">
      <!-- <img src="https://vue2.baiwumm.com/assets/logo.0bc2ad1b.svg"/> -->
      <img src="../assets/尼莫.png"/>
      <h1>Vue2 CarsMS</h1>
    </div>
    <el-menu default-active="1"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    >
      <el-menu-item index="1">工作台</el-menu-item>
      <el-submenu index="2">
        <template slot="title">综合组件</template>
        <el-menu-item index="2-1">高级表单</el-menu-item>
        <el-menu-item index="2-2">通知公告</el-menu-item>
        <el-menu-item index="2-3">组织架构</el-menu-item>
        <el-menu-item index="2-4">高级表格</el-menu-item>
        <el-menu-item index="2-5">高级详情</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">个人中心</el-menu-item>
      <el-submenu index="4">
        <template slot="title">系统设置</template>
        <el-menu-item index="4-1">用户列表</el-menu-item>
        <el-menu-item index="4-2">菜单管理</el-menu-item>
        <el-menu-item index="4-3">角色管理</el-menu-item>
        <el-menu-item index="4-4">权限管理</el-menu-item>
        <el-menu-item index="4-5">操作日志</el-menu-item>
        <el-menu-item index="4-6">字典管理</el-menu-item>
      </el-submenu>
      <el-menu-item index="5">其他功能</el-menu-item>
    </el-menu>
    <div class="menu-warpper-right">
      <avatar-dropdown/>
    </div>
    </div>
</template>

<script>
import AvatarDropdown from './Avatar.vue';
export default {
  components:{
    AvatarDropdown
  },
  methods:{
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-wrapper {
  display: flex;
  border-bottom: 1px solid #dcdfe6;
  .menu-wrapper-left {
    display: flex;
    margin-right: 20px;
    align-items: center;
    img {
      margin-left: 20px;
      margin-right: 20px;
      width: 40px;
    }
    h1 {
      font-size: 15px;
      color: #002140;
      font-weight: 500;
    }
  }
  .menu-warpper-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: auto;
  }
  .el-menu-demo {
    border-bottom: 0;
  }
}
</style>