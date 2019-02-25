<template>
  <div class="top-bar">
      <div class="container">
          {{userinfo.name}}
      </div>
  </div>
</template>
<style scoped>
.top-bar{
    height: 60px;
    background-color: rgb(34, 34, 77);
    color: #fff;
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'TopBar',
//   props: ['userinfo'],
  data(){
    return {
      userinfo: this.$store.state.userinfo
    }
  },
  created: ()=>{
      
  }
}
</script>
