<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase">
      <router-link class="header-link" to="/home">
        <span>Fitness App</span>
        <span class="font-weight-light"></span>
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-on:click="logout" v-if="$store.state.userId">Logout</v-btn>
      <v-btn to="/" v-if="!$store.state.userId">Login</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push("/");
    },
  }
};
</script>

<style lang="css" scoped>
.header-link {
  text-decoration: none;
  color: black;
}
</style>



