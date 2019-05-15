<template>
  <v-content>
    <v-layout flex align-center justify-center>
      <v-card justify-center width="50%">
        <v-container>
          <v-form>
            <h1>Login</h1>
            <br>
            <v-text-field v-model="credentials.email" placeholder="Email" label="Email" solo></v-text-field>
            <div class="warning-text" v-if="!$v.credentials.email.required">Email is required</div>
            <div class="warning-text" v-if="!$v.credentials.email.email">Not a valid email adress</div>
            <v-text-field
              v-model="credentials.password"
              placeholder="Password"
              label="Password"
              type="password"
              solo
            ></v-text-field>
            <div class="warning-text" v-if="!$v.credentials.password.required">Password is required</div>
            <v-alert dismissible v-model="failed" type="error">Incorrect credentials</v-alert>
            <v-alert dismissible v-model="succesful" type="success">Login succesful</v-alert>
            <v-btn v-on:click="login" block color="info">Login</v-btn>
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
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "login",
  data() {
    return {
      credentials: {
        email: "",
        password: ""
      },
      failed: false,
      succesful: false
    };
  },
  validations: {
    credentials: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  methods: {
    async login(e) {
      // prevent reloading of page
      e.preventDefault();

      const result = await this.$userService.getByCredentials(this.credentials);

      if (result.status == 500) {
        this.failed = true;
      } else {
        this.succesful = true;

        document.cookie = "userId=" + result.id;

        setTimeout(() => this.$router.push("/home"), 1000);
      }
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




