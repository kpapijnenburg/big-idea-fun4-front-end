<template>
  <v-content>
    <v-container>
      <v-layout align-center justify-center>
        <v-card height="100%" width="50%">
          <v-card-tile primary-title>
            <div class="text-xs-center">
              <h2>Login</h2>
              <template>
                <v-from v-model="valid">
                  <v-container>
                    <v-text-field v-model="email" label="Email adress" required></v-text-field>
                    <v-text-field v-model= "password" label="Password" :type="'password'" required></v-text-field>
                  </v-container>
                  <v-btn>Submit</v-btn>
                </v-from>
              </template>
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
  components: {}
};
</script>

<style>
</style>




