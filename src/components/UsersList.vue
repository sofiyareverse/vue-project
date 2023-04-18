<template>
  <div>
    <table v-if="users.length > 0" id="customers">
      <thead>
        <th>Id</th>
        <th>Name</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td>{{ user.userId }}</td>
          <td>{{ user.userName }}</td>
          <td>
            <btn @click="$emit('remove', user)" type="reset">Remove</btn>
          </td>
        </tr>
      </tbody>
    </table>
    <h2 v-else>No Users yet...</h2>
  </div>
</template>

<script>
  export default {
    props: {
      users: {
        type: Array
      }
    }
  }
</script>

<style scoped>

#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
</style>