<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue Proj</div>
    <div class="navbar__btns">
      <btn @click="$router.push('/')">Users Store</btn>
      <btn @click="$router.push('/users')">Users</btn>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: #ddd;
  /* box-shadow: 2px 2px 4px gray; */
  display: flex;
  /* align-items: center; */
  /* padding: 0 15px; */
}

.navbar__btns {
  margin-left: auto;
}
</style>