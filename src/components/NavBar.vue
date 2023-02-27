<template>
  <div class="bar">
    <NavButton title="Home" :num="0" @tabClick="$emit('tabClick', $event)" />
    <NavButton title="About" :num="1" @tabClick="$emit('tabClick', $event)" />
    <NavButton title="Projects" :num="2" @tabClick="$emit('tabClick', $event)" />
    <NavButton title="Contact" :num="3" @tabClick="$emit('tabClick', $event)" />
  </div>
</template>

<script>
  import NavButton from './NavButton.vue'

  export default {
    name: 'NavBar',
    components: {
      NavButton
    }
  }
</script>

<style>
  .bar {
    display: flex;
  }
</style>