<template>
  <div class="home">
    <Menu/>
    <div class="container">
      <Workbench />
    </div>
    <card shadow="hover" class="footer">
      <Footer/>
    </card>
  </div>
</template>

<script>
import Workbench from '@/components/Workbench.vue'
import Menu from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Workbench,Menu,Footer
},
  data(){

    return{

    }
  },
  methods: {
    
  },
}
</script>

<style scoped>
  .container{
    background-color: #f5f1f1;
  }
  .footer{
    height: 20px;
    background-color: #e9e4e4;
    text-align: center;
  }
</style>
