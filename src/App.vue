<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Home from './views/Home.vue';
import Login from './views/Login.vue';

export default {
  name: 'app',
  components: {
    Home,Login
  }
}
</script>

<style>

</style>
