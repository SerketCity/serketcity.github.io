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
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>