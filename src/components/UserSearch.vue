<template>
  <div>
    <input class="input" type="text" v-model="searchValue" placeholder="Search..." />
  </div>
</template>

<script>
  export default {
    props: {
      users: {
        type: Array
      }
    },
    data() {
      return {
        searchValue: ""
      }
    },
    watch: {
      searchValue(newValue) {
        return this.$emit(
          "inputChange", this.users.filter(
            user => user.userName.toLowerCase().includes(newValue.toLowerCase())
          )
        )
      }
    }
  }
</script>

<style scoped>
.p-0 {
  padding: 0;
}
.input {
  width: 138px !important;
  border-radius: 4px;
  border-color: transparent;
  border-width: 1px;
  padding: 14px 12px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}

::placeholder {
  color: black;
}
</style>
