<template>
  <div>
    <div class="app__objects">
      <users-search @input-change="searchUsers" :users="users" />
      <users-sorter :users="$store.state.userModule.paginatedResult" />
      <user-form @create="saveForm" />
      <users-parser @create="parseUsers" />
    </div>
    <users-list @remove="removeUser" :users="$store.state.userModule.paginatedResult" />
    <users-pagination v-if="this.$store.state.userModule.users.length" @paginate="paginateUsers"
      :users="this.$store.state.userModule.searchResult.length ? this.$store.state.userModule.searchResult : this.$store.state.userModule.users" />
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
    methods: {
      saveForm(newUser) {
        this.$store.dispatch('addUser', newUser)
      },
      parseUsers(newUsers) {
        newUsers.forEach(newUser => {
          this.$store.dispatch('addUser', newUser)
        })
      },
      removeUser(user) {
        this.$store.dispatch('removeUser', user)
      },
      searchUsers(searchResult) {
        this.$store.dispatch('searchResult', searchResult)
      },
      paginateUsers(paginatedResult) {
        this.$store.dispatch('paginatedResult', paginatedResult)
      }
    }
  }
</script>

<style>
.app__objects {
  display: flex;
}
</style>
