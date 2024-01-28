<template>
  <HeaderComp />
  <img class="resto-logo" src="../assets/resto-logo.jpg" />
  <h1>Add Restaurant</h1>

  <form class="addResto">
    <input
      type="text"
      name="name"
      placeholder="Enter Restaurant Name"
      v-model="restaurant.name"
    />
    <br />
    <br />
    <input
      type="text"
      name="address"
      placeholder="Enter Restaurant Address"
      v-model="restaurant.address"
    />
    <br />
    <br />
    <input
      type="number"
      name="contact"
      placeholder="Enter Restaurant Contact No."
      v-model="restaurant.contact"
    />
    <br />
    <br />

    <button v-on:click="addRestaurant">Add</button>
  </form>
</template>

<script>
import HeaderComp from "./HeaderComp.vue";
import axios from "axios";
export default {
  name: "AddRestoComp",
  components: {
    HeaderComp,
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUpComp" });
    }
  },
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async addRestaurant() {
        let result = await axios.post("http://localhost:3000/restaurant", {
            name :  this.restaurant.name ,
            address :   this.restaurant.address , 
            contact : this.restaurant.contact
        });
    //   console.log(result);
      if(result.status == 201){
        alert("Restaurant Added Successfully");
      }
    },
  },
};
</script>
