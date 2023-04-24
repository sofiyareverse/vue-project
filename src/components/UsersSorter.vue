<template>
  <div>
    <Select v-model="selectedSort" :options="sortOptions" />
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
        selectedSort: "",
        sortOptions: [
          { value: "userName", name: "By First Name" },
          { value: "userId", name: "By Id" }
        ]
      }
    },
    watch: {
      selectedSort(newValue) {
        if (newValue === 'userId') {
          this.users.sort((user1, user2) => user1[newValue] - user2[newValue])
        } else {
          this.users.sort((user1, user2) => user1[newValue].localeCompare(user2[newValue]))
        }
      }
    }
  }
</script>

<style scoped>
</style>
