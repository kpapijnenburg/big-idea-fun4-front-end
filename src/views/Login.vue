<template>
  <v-content>
    <br>
    <v-layout flex align-center justify-center>
      <v-card justify-center width="50%">
        <v-container>
          <v-form>
            <h1>Login</h1>
            <br>
            <v-text-field
              :rules="[rules.required, rules.email]"
              v-model="credentials.email"
              label="Email"
            ></v-text-field>
            <v-text-field
              :rules="[rules.required]"
              v-model="credentials.password"
              label="Password"
              type="password"
            ></v-text-field>
            <v-alert dismissible v-model="failed" type="error">Incorrect credentials</v-alert>
            <v-alert dismissible v-model="succesful" type="success">Login succesful</v-alert>
            <v-btn :loading="isloggingin" v-on:click.prevent="login" block color="info">Login</v-btn>
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
      this.isloggingin = true;

      const result = await this.$userService.getByCredentials(this.credentials);

      if (result.id == undefined) {
        this.failed = true;
      } else {
        this.succesful = true;

        this.$store.commit("setUserId", result.id);
        this.$router.push("/home");
      }

      this.isloggingin = false;
    }
  }
};
</script>

<style <style lang="scss" scoped>
.warning-text {
  color: red;
}
</style>




