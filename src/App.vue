<template>
  <NavBar @tabClick="setActive($event)"/>
  <ContentBox :active="this.active" />
</template>

<script>
  import NavBar from './components/NavBar.vue'
  import ContentBox from './components/ContentBox.vue'

  export default {
    name: 'App',
    components: {
      NavBar, 
      ContentBox
    },
    methods: {
      setActive(num) {
        this.active = num
      }
    },
    data () {
      return {
        active: 0
      }
    }
  }
</script>

<style>
  #app {
    position: fixed;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 700px;
    
    background: linear-gradient(0deg, #FFFFFF 15%, #004040 100%); 

    border-radius: 25px 25px;
  }
</style>