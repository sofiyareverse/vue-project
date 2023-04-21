<template>
  <div>
    <div class="app__objects">
      <users-sorter @changed="sortUsers" @input-change="searchUsers" :users="users" />
      <user-form @create="saveForm" />
      <users-parser @create="parseUsers" />
    </div>
    <users-list @remove="removeUser" :users="paginatedResult" />
    <users-pagination v-if="users.length" @paginate="paginateUsers" :users="searchResult.length ? searchResult : users" />
  </div>
</template>

<script>
  import UsersSorter from '@/components/UsersSorter.vue'
  import UserForm from '@/components/UserForm.vue'
  import UsersParser from '@/components/UsersParser.vue'
  import UsersList from '@/components/UsersList.vue'
  import UsersPagination from '@/components/UsersPagination.vue'
  export default {
    components: {
      UsersSorter, UserForm, UsersParser, UsersList, UsersPagination
    },
    data() {
      return {
        id: 0,
        users: [],
        searchResult: [],
        paginatedResult: []
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
        this.searchResult = this.searchResult.filter(u => u.userId !== user.userId)
        this.paginatedResult = this.paginatedResult.filter(u => u.userId !== user.userId)
      },
      sortUsers(sortedUsers) {
        this.users = sortedUsers
      },
      searchUsers(searchResult) {
        this.searchResult = searchResult
      },
      paginateUsers(paginatedResult) {
        this.paginatedResult = paginatedResult
      }
    }
  }
</script>

<style>
.app__objects {
  display: flex;
}
</style>
