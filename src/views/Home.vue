<template>
  <div class="home">
    <Menu/>
    <div class="container">
      <HelloWorld />
      </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import Menu from '@/components/Menu.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Menu
},
  data(){
    
    return{

    }
  },
  methods: {
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  },
}
</script>

<style scoped>

</style>
