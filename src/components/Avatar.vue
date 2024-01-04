<!-- eslint-disable vue/multi-word-component-names -->
<!--
  作者:luke
  时间：2024年01月03日 11:03:55
  vue版本:v2.7.14
-->
<template>
  <el-dropdown trigger="click" placement="bottom-end">
    <span class="el-account-avatar">
       <el-avatar :fit="fill" src="https://vue2.baiwumm.com/public/admin/20210115162407_9573.jpg" :size="30"></el-avatar>
       <span>User</span>
    </span>
      <el-dropdown-menu class="el-drop-down menu">
        <el-dropdown-item @click="handleToCenter">
            <!-- <el-icon type="user" /> -->
            个人中心
        </el-dropdown-item>
        <!-- <el-menu-divider /> -->
        <el-dropdown-item @click="handleLogout">
            <!-- <a-icon type="logout" /> -->
            注销登录
        </el-dropdown-item>
      </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  methods:{
    handleToCenter(){

    },
    handleLogout(){

    }
  }
}
</script>

<style lang="scss" scoped>

.el-account-avatar {
  display: flex;
  align-items: center;
  margin-right: 20px;
  span{
    vertical-align: middle;
    margin-left: 5px;
  }
  span:hover {
    cursor: pointer;
    color: orange;
  }
  .el-drop-down :hover{
    background-color: #fff;
  }
}
</style>