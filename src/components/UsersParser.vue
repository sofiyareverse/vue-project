<template>
  <div>
    <btn v-if="isPostLoading" type="submit" v-on:click="parseUsers">Loading...</btn>
    <btn v-else type="submit" v-on:click="parseUsers">Parse Users</btn>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        users: [],
        apiUrl: "https://dummyjson.com/users",
        isPostLoading: true
      }
    },
    methods: {
      async parseUsers(){
        try {
          await axios.get(this.apiUrl).then((response) => {
            response.data.users.forEach(element => {
              this.users.push({userName: element.firstName, userId: this.id})
            })
            this.$emit('create', this.users)
          })
        } catch(e) {
          alert('Something went wrong')
        } finally {
          this.users = []
          this.isPostLoading = false
        }
      }
    },
    mounted() {
      this.parseUsers()
    }
  }
</script>

<style scoped></style>