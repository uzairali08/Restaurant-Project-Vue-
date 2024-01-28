<template>
  <HeaderComp />
  <img class="resto-logo" src="../assets/resto-logo.jpg" />
  <h1>Update Restaurant</h1>
  <form class="updateResto">
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

    <button type="button" v-on:click="updateRestaurant">Update</button>
  </form>
</template>

<script>
import HeaderComp from "./HeaderComp.vue";
import axios from "axios";
export default {
  name: "UpdateRestoComp",
  components: {
    HeaderComp,
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
  methods:{
    async updateRestaurant(){
        let result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id, {
            name: this.restaurant.name,
            address: this.restaurant.address,
            contact: this.restaurant.contact
        });
        if(result.status == 200){
            this.$router.push({name:"HomePageComp"});
            alert("Restaurant Updated Successfully");
        }
    }
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUpComp" });
    }

    // console.log(this.$route.params.id);
    let result = await axios.get(
      "http://localhost:3000/restaurant/" + this.$route.params.id
    );
    // console.warn(result.data);
    this.restaurant = result.data;
  },
};
</script>
