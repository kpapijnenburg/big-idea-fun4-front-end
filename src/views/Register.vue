<template>
  <v-content>
    <br>
    <v-layout flex align-center justify-center>
      <v-card justify-center width="50%">
        <v-container>
          <v-form>
            <h1>Register</h1>
            <br>
            <v-text-field v-model="name" label="Firstname" solo></v-text-field>
            <v-text-field v-model="email" label="Email" solo></v-text-field>
            <v-text-field v-model="password" label="Password" type="password" solo></v-text-field>
            <v-text-field v-model="confirmPassword" label="Confirm password" type="password" solo></v-text-field>
            <v-alert dismissible v-model="passwordsDoNotMatch" type="error">Passwords do not match</v-alert>
            <v-alert dismissible v-model="registered" type="success">Registration succesful</v-alert>
            <v-alert dismissible v-model="registerFailed" type="error">Registration failed</v-alert>
            <v-btn v-on:click="register" block color="info">Register</v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-layout>
  </v-content>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      passwordsDoNotMatch: false,
      registered: false,
      registerFailed: false
    };
  },
  methods: {
    async register(e) {
      e.preventDefault();

      if (this.checkPasswords()) {
        const user = {
          name: this.name,
          email: this.email,
          password: this.password
        };

        if (await this.$userService.create(user)) {
          this.registered = true;
          setTimeout(() => this.$router.push("/"), 1500);

        } else {
          this.registerFailed = true;
        }
      }
    },
    checkPasswords() {
      if (this.password != this.confirmPassword) {
        this.passwordsDoNotMatch = true;
        return false;
      }
      return true;
    }
  }
};
</script>

<style>
</style>


