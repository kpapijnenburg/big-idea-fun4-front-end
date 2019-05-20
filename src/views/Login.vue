<template>
  <v-content>
    <v-layout flex align-center justify-center>
      <v-card justify-center width="50%">
        <v-container>
          <v-form>
            <h1>Login</h1>
            <br>
            <v-text-field :rules="[rules.required, rules.email]" v-model="credentials.email" label="Email"></v-text-field>
            <v-text-field :rules="[rules.required]" v-model="credentials.password" label="Password" type="password"></v-text-field>
            <v-alert dismissible v-model="failed" type="error">Incorrect credentials</v-alert>
            <v-alert dismissible v-model="succesful" type="success">Login succesful</v-alert>
            <v-btn :loading="isloggingin" v-on:click="login" block color="info">Login</v-btn>
          </v-form>
          <br>
          <router-link to="/register">No account yet? Click here to register.</router-link>
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
      credentials: {
        email: "",
        password: ""
      },
      failed: false,
      succesful: false,
      isloggingin: false,
      rules: {
        required: v => !!v || "This field is required.",
        email: v => /.+@.+/.test(v) || "E-mail must be valid"
      }
    };
  },
  methods: {
    async login(e) {
      // prevent reloading of page
      this.isloggingin = true;
      e.preventDefault();

      const result = await this.$userService.getByCredentials(this.credentials);

      if (result.status == 500) {
        this.failed = true;
      } else {
        this.succesful = true;

        document.cookie = "userId=" + result.id;

        setTimeout(() => this.$router.push("/home"), 1000);
      }

      this.isloggingin = false;
    }
  },
  components: {}
};
</script>

<style <style lang="scss" scoped>
.warning-text {
  color: red;
}
</style>




