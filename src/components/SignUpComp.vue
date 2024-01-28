<template>
  <img class="resto-logo" src="../assets/resto-logo.jpg" />
  <h1>Sign Up</h1>

  <div class="signup">
    <input type="text" placeholder="Enter Your Name" v-model="name" /> <br />
    <br />
    <input type="email" placeholder="Enter Your Email" v-model="email" /> <br />
    <br />
    <input
      type="password"
      placeholder="Enter Your Password"
      v-model="password"
    />
    <br />

    <p>
      Already have an account.
      <router-link to="login">Login.</router-link>
    </p>

    <button v-on:click="signup">Save</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUpComp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signup() {
      // console.warn(this.name, this.email, this.password)
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.warn("Result: ", result);
      if (result.status == 201) {
        alert("Sign up successful");
        this.$router.push({ name: "LoginComp" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "HomePageComp" });
    }
  },
};
</script>

<style>

</style>
