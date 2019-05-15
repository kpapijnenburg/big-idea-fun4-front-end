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
      <router-link to="/" tag="button" class="strong">Login</router-link>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="css" scoped>
.header-link {
  text-decoration: none;
  color: black;
}
</style>



