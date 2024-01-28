<template>
  <img class="resto-logo" src="../assets/resto-logo.jpg" />
  <h1>Login</h1>

  <div class="login">
    <input type="email" placeholder="Enter Your Email" v-model="email" /> <br />
    <br />
    <input
      type="password"
      placeholder="Enter Your Password"
      v-model="password"
    />
    <br />

    <p>
      Don't have an account.
      <router-link to="sign-up">Sign Up.</router-link>
    </p>

    <button v-on:click="login">Login</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginComp",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      if (result.status == 200 && result.data.length > 0) {
        alert("Login successful");
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "HomePageComp" });
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

<style></style>
