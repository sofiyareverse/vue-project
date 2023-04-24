<template>
  <div>
    <div class="app__objects">
      <users-search @input-change="searchUsers" :users="users" />
      <users-sorter :users="paginatedUsers" />
      <user-form @create="saveForm" />
      <users-parser @create="parseUsers" />
    </div>
    <users-list @remove="removeUser" :users="paginatedUsers" />
    <users-pagination v-if="users.length" @paginate="paginateUsers" :users="searchResult.length ? searchResult : users" />
  </div>
</template>

<script>
  import UsersSearch from '@/components/UserSearch.vue'
  import UsersSorter from '@/components/UsersSorter.vue'
  import UserForm from '@/components/UserForm.vue'
  import UsersParser from '@/components/UsersParser.vue'
  import UsersList from '@/components/UsersList.vue'
  import UsersPagination from '@/components/UsersPagination.vue'
  export default {
    components: {
      UsersSearch, UsersSorter, UserForm, UsersParser, UsersList, UsersPagination
    },
    data() {
      return {
        id: 0,
        users: [],
        searchResult: [],
        paginatedUsers: []
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
        this.paginatedUsers = this.paginatedUsers.filter(u => u.userId !== user.userId)
      },
      searchUsers(searchResult) {
        this.searchResult = searchResult
      },
      paginateUsers(paginatedResult) {
        this.paginatedUsers = paginatedResult
      }
    }
  }
</script>

<style>
.app__objects {
  display: flex;
}
</style>
