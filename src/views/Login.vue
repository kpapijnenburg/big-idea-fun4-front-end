<template>
  <v-content>
    <v-container>
      <v-layout align-center justify-center>
        <v-card height="100%" width="50%">
          <v-card-tile primary-title>
            <div class="text-xs-center">
              <h2>Login</h2>
              <div>
                <form @submit="login">
                  <input type="text" v-model="email" name="email" placeholder="Email adress">
                  <input type="text" v-model="password" name="password" placeholder="Password">
                  <input type="submit" value="submit" class="btn">
                </form>
              </div>
            </div>
          </v-card-tile>
        </v-card>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      user: {}
    };
  },
  methods: {
    login(e) {
      // prevent reloading of page
      e.preventDefault();

      // Create credentials object to be send to server.
      const credentials = {
        email: this.email,
        password: this.password
      };

      // POST request to server.
      this.$http
        .post(this.$api + "users/getByCredentials", credentials)
        .then(function(response) {
          document.cookie = "userId" + response.data.id;
        })
    },
  },
  components: {}
};
</script>

<style>
</style>




