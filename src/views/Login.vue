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
            <v-btn color="info">Login</v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-layout>
  </v-content>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      user: Object
    };
  },
  validations: {
    email: {
      required
    }
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

      this.user = await this.$userService.getByCredentials(credentials);
      console.log(this.user);
    }
  },
  components: {}
};
</script>

<style>
</style>

  <!-- <v-content>
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
  </v-content> -->



