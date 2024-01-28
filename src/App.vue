<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <router-view></router-view>
  <teleport to="#footer">
    <FooterComp />
  </teleport>
</template>

<script>
import FooterComp from './components/FooterComp.vue';
export default {
  name: 'App',
  components:{
    FooterComp,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

body{
  margin: 0;
  padding: 0;
}

.resto-logo {
  width: 250px;
}
.signup input, .login input, .addResto input, .updateResto input{
  border: 1px solid rgba(0, 0, 0, 0.8);;
  padding: 10px;
  width: 300px;
}
.signup button, .login button, .addResto button, .updateResto button {
  width: 325px;
  padding: 10px;
  border: 1px solid;
  background-color: rgba(0, 0, 0, 0.8);;
  color: white;
  cursor: pointer;
}
.signup button:hover, .login button:hover, .addResto button:hover, .updateResto button:hover {
  border: 1px solid;
  background-color: #E2E2E2;
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
}
</style>
