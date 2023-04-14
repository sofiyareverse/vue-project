<template>
  <div>
    <btn type="submit" v-on:click="parseUsers">Parse Users</btn>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        users: [],
        apiUrl: "https://dummyjson.com/users"
      }
    },
    methods: {
      parseUsers(){
        axios.get(this.apiUrl).then((response) => {
          response.data.users.forEach(element => {
            this.users.push({userName: element.firstName, userId: this.id})
          })
          this.$emit('create', this.users)
        })
        this.users = []
      }
    }
  }
</script>

<style scoped></style>