<template>
  <v-content>
    <v-layout flex align-center justify-center>
      <v-card justify-center width="50%">
        <v-container>
          <v-form>
            <h1>Login</h1>
            <br>
            <div>
              <v-text-field v-model="email" placeholder="Email" label="Email" solo></v-text-field>
            </div>
            <v-text-field
              v-model="password"
              placeholder="Password"
              label="Password"
              type="password"
              solo
            ></v-text-field>
            <v-alert dismissible v-model="failed" type="error">Incorrect credentials</v-alert>
            <v-alert dismissible v-model="succesful" type="success">Login succesful</v-alert>
            <v-btn v-on:click="login" block color="info">Login</v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-layout>
  </v-content>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      user: Object,
      failed: false,
      succesful: false
    };
  },
  methods: {
    async login(e) {
      // prevent reloading of page
      e.preventDefault();

      // Create credentials object to be send to server.
      const credentials = {
        email: this.email,
        password: this.password
      };

      const result = await this.$userService.getByCredentials(credentials);

      if (result.status == 500) {
        this.failed = true;
      } else {
        this.succesful = true;

        this.user = result;

        setTimeout(() => this.$router.push("/home"), 1000);
      }
    }
  },
  components: {}
};
</script>

<style>
</style>




