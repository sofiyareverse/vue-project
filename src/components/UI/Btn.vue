<template>
  <span>
    <button><slot></slot></button>
  </span>
</template>

<script>
  export default {
    name: 'Btn'
  }
</script>

<style scoped>
button {
  width: 138px !important;
  background-color: #04AA6D;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}
</style>