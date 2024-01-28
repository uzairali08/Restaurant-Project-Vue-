<template>
    <div class="header-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add-restaurant">Add Restaurant</router-link>
        <a v-on:click="logout">Logout</a>
    </div>
</template>

<script>
export default {
    name: "HeaderComp",
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:"LoginComp"});
            alert('Logout');
        }
    }
}
</script>

<style>
.header-nav{
    background-color: rgba(0, 0, 0, 0.8);
    overflow: hidden;
    cursor: pointer;
}

.header-nav a{
    float: left;
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    text-align: center;
}

.header-nav a:hover{
    background-color: #E2E2E2;
    color: rgba(0, 0, 0, 0.8);
}
</style>