<!-- eslint-disable vue/multi-word-component-names -->
<!--
  作者:luke
  时间：2024年01月04日 11:41:08
  vue版本:v2.7.14
-->
<template>
  <div class="text">
    design by
    <a href="https://github.com/Lukematch" target="__blank">Lukematch</a>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .text {
    font-size: 15px;
    font-weight: 200;
    filter:brightness(0.5);
    a{
      text-decoration: none;
      color: rgb(22,200,200);
    }
    a:hover{
      color: orange;
      font-size: 16px;
    }
  }
</style>