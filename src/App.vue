<template>
    <Header />
    <AppMain />
</template>
<script>
import Header from './components/Header.vue'
import AppMain from './components/AppMain.vue'
export default {
  name: "App",
  components:{
    Header,
    AppMain
  }
}
</script>

<style lang="scss">
 @import './App.scss'
</style>
