<template>
  <navbar></navbar>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import navbar from './components/Navbar.vue';
  export default {
    components: { navbar }
  }
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 10px;
}
</style>