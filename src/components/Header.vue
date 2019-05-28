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
      <v-btn v-on:click="logout" v-if="this.user != null">Logout</v-btn>
      <router-link v-if="this.user == null" to="/" tag="button" class="strong">Login</router-link>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      user: null
    };
  },
  async mounted() {
    const id = this.getUserId();
    if (id > 0) {
      this.user = await this.$userService.getById(id);
    } else {
      this.user = null;
    }
  },
  methods: {
    logout() {
      document.cookie = "userId==;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      this.$router.push("/");
    },
    getUserId() {
      let value = "; " + document.cookie;
      let parts = value.split("; " + "userId" + "=");

      if (parts.length == 2) {
        return parts
          .pop()
          .split(";")
          .shift();
      } else {
        return null;
      }
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



