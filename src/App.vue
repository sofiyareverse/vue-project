<template>
  <div>
    <div class="app__objects">
      <users-sorter @changed="sortUsers" @input-change="searchUsers" :users="users" />
      <user-form @create="saveForm" />
      <users-parser @create="parseUsers" />
    </div>
    <users-list @remove="removeUser" :users="searchResult.length ? searchResult : users" />
  </div>
</template>

<script>
  import UsersSorter from './components/UsersSorter.vue'
  import UserForm from './components/UserForm.vue'
  import UsersParser from './components/UsersParser.vue'
  import UsersList from './components/UsersList.vue'
  export default {
    components: {
      UsersSorter, UserForm, UsersParser, UsersList
    },
    data() {
      return {
        id: 0,
        users: [],
        searchResult: []
      }
    },
    methods: {
      saveForm(newUser) {
        newUser.userId = this.id++
        this.users.push(newUser)
      },
      parseUsers(newUsers) {
        newUsers.forEach(element => {
          element.userId = this.id++
          this.users.push(element)
        })
      },
      removeUser(user) {
        this.users = this.users.filter(u => u.userId !== user.userId)
      },
      sortUsers(sortedUsers) {
        this.users = sortedUsers
      },
      searchUsers(searchResult) {
        this.searchResult = searchResult
      }
    }
  }
</script>

<style>
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

.app__objects {
  display: flex;
}
</style>
