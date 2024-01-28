<template>
  <HeaderComp />
  <h1>Welcome to Home, {{ name }}</h1>
  <table>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Address</th>
      <th>Contact</th>
      <th>Actions</th>
    </tr>
    <tr v-for="item in restaurantList" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.address }}</td>
      <td>{{ item.contact }}</td>
      <td>
        <router-link :to="'/update-restaurant/' + item.id" class="updateBtn">Update</router-link>
        <button class="delBtn" v-on:click="deleteResto(item.id)">Delete</button>
      </td>
    </tr>
  </table>
</template>

<script>
import HeaderComp from "./HeaderComp.vue";
import axios from "axios";
export default {
  name: "HomePageComp",
  components: {
    HeaderComp,
  },
  data() {
    return {
      name: "",
      restaurantList: [],
    };
  },
  methods: {
    async deleteResto(id) {
      let result = await axios.delete("http://localhost:3000/restaurant/" + id);
      if (result.status == 200) {
        alert("Restaurant Deleted");
        this.getData();
      }
    },
    async getData() {
      let result = await axios.get("http://localhost:3000/restaurant");
      this.restaurantList = result.data;
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "SignUpComp" });
    }
    this.getData();
  },
};
</script>

<style>
table {
  padding-top: 20px;
  margin: auto;
  text-align: left;
}
tr {
  line-height: 50px;
}
th,
td {
  width: 150px;
}
th {
  border-bottom: 1px solid black;
}
.delBtn, .updateBtn{
    border: none;
    font-size: 10pt;
    color: white;
    padding: 8px 10px;
    margin: 3px;
    cursor: pointer;
}
.delBtn{
    background-color: rgb(230, 0, 0);
}
.delBtn:hover, .updateBtn:hover{
    opacity: 0.7;
}
.updateBtn{
    background-color: rgba(0, 0, 0, 0.8);
}
</style>
