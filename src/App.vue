<template>
  <div id="app">
<<<<<<< HEAD
    <keep-alive exclude="Detail">
      <!-- 详情页状态不保持  exclude="与该组件name相同"，否则无效 -->
      <router-view/>
    </keep-alive>
    
    <main-tab-bar></main-tab-bar>
=======
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
>>>>>>> 20e77ca7af1df4dd54781097cfc00bd6d408b590
  </div>
</template>

<script>
<<<<<<< HEAD
import MainTabBar from 'components/content/MainTabBar'
export default {
  name: 'app',
  components: {
    MainTabBar
=======
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
>>>>>>> 20e77ca7af1df4dd54781097cfc00bd6d408b590
  }
}
</script>

<style>
<<<<<<< HEAD
@import 'assets/css/base.css';
=======
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
>>>>>>> 20e77ca7af1df4dd54781097cfc00bd6d408b590
</style>
