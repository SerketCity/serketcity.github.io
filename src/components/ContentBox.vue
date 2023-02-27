<template>
  <div class="box">
    <span v-html="contents[active]"></span>
  </div>
</template>
  
<script>
  import content from '../assets/content.json'

  export default {
    name: 'ContentBox',
    props: {
      active: Number
    },
    data() {
      return {
        contents: [
          content.home, 
          content.about, 
          content.projects, 
          content.contact
        ]
      }
    }
  }
</script>
  
<style>
  .box {
    text-align: center;
  }
</style>