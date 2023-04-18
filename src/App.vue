<template>
  <div>
    <user-form @create="saveForm" />
    <users-parser @create="parseUsers" />
    <users-list :users="users" @remove="removeUser" />
  </div>
</template>

<script>
  import UserForm from './components/UserForm.vue'
  import UsersParser from './components/UsersParser.vue'
  import UsersList from './components/UsersList.vue'
  export default {
    components: {
      UserForm, UsersParser, UsersList
    },
    data() {
      return {
        id: 0,
        users: []
      }
    },
    watch: {
      
    },
    methods: {
      saveForm: function(newUser) {
        newUser.userId = this.id++
        this.users.push(newUser)
      },
      parseUsers: function(newUsers) {
        newUsers.forEach(element => {
          element.userId = this.id++
          this.users.push(element)
        })
      },
      removeUser: function(user) {
        this.users = this.users.filter(u => u.userId !== user.userId)
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
</style>
