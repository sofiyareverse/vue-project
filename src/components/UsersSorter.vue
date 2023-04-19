<template>
  <div class="search__objects">
    <input class="input" type="text" v-model="searchValue" placeholder="Search..." />
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
        ],
        searchValue: ""
      }
    },
    watch: {
      selectedSort(newValue) {
        if (newValue === 'userId') {
          return this.users.sort((user1, user2) => user1[newValue] - user2[newValue])
        } else {
          return this.users.sort((user1, user2) => user1[newValue].localeCompare(user2[newValue]))
        }
      },
      searchValue(newValue) {
        this.sortedUsers = this.users
        return this.$emit("inputChange", this.sortedUsers.filter(user => user.userName.includes(newValue)))
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
  border-color: black;
  border-width: 1px;
  padding: 14px 12px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}

.search__objects {
  display: flex;
}

::placeholder {
  color: black;
}
</style>