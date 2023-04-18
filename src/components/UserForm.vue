<template>
  <div>
    <input type="text" v-model="modifValue">
    <btn @click="showModal">Add User</btn>
    <modal v-model:show="modalOpen">
      <form v-on:submit="saveForm">
        <input type="text" v-model="name" placeholder="Type here">
        <btn type="submit">Save</btn>
      </form>
    </modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        user: {},
        modalOpen: false,
        modifValue: ''
      }
    },
    methods: {
      saveForm(e) {
        e.preventDefault()
        this.user.userName = this.name
        this.$emit('create', this.user)
        this.name = ''
        this.user = {}
        this.modalOpen = false
      },
      showModal() {
        this.modalOpen = true
      }
    }
  }
</script>

<style scoped>
input[type=text], select {
  padding: 16px 32px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>