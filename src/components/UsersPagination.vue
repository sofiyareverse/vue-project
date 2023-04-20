<template>
  <div>
    <div class="page__wrapper">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        :class="{'current-page': page === pageNumber}"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div>
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
        page: 1,
        limit: 5,
        paginatedUsers: []
      }
    },
    computed: {
      totalPages() {
        return Math.ceil(this.users.length / this.limit)
      }
    },
    methods: {
      changePage(pageNumber) {
        this.page = pageNumber
        this.paginateUsersList()
      },
      paginateUsersList() {
        this.paginatedUsers = this.users.slice(this.limit * (this.page - 1), this.limit * this.page)
        this.$emit('paginate', this.paginatedUsers)
      }
    },
    mounted() {
      this.paginateUsersList()
      console.log(this.paginatedUsers)
    }
  }
</script>

<style scoped>
.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  color: #04AA6D;
  border: 1px solid black;
  padding: 10px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}

.page:hover {
  background-color: #ddd;
}

.current-page {
  color: white;
  background-color: #04AA6D;
  /* border: none; */
}
</style>