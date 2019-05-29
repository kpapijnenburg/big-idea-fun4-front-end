<template>
  <v-content>
    <br>
    <v-layout flex align-center justify-center>
      <v-card justify-center width="50%">
        <v-container>
          <v-form>
            <h1>Register</h1>
            <br>
            <v-text-field :rules="[rules.required]" v-model="name" label="Firstname"></v-text-field>
            <v-text-field :rules="[rules.required, rules.email]" v-model="email" label="Email"></v-text-field>
            <v-text-field
              :rules="[rules.required]"
              v-model="password"
              label="Password"
              type="password"
            ></v-text-field>
            <v-text-field
              :rules="[rules.required]"
              v-model="confirmPassword"
              label="Confirm password"
              type="password"
            ></v-text-field>
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
      registerFailed: false,
      rules: {
        required: v => !!v || "This field is required.",
        email: v => /.+@.+/.test(v) || "E-mail must be valid"
      }
    };
  },
  methods: {
    async register(e) {
      e.preventDefault();

      if (this.checkPasswords() && this.name && this.email && this.password) {
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
      } else {
        this.registerFailed = true;
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


