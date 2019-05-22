<template>
  <v-container>
    <v-layout justify-center>
      <table>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <td>
            <v-btn v-on:click="subtractWeight" flat icon>
              <v-icon>remove</v-icon>
            </v-btn>
          </td>
          <td>
            <strong>Weight:</strong>
          </td>
          <td>
            <strong>{{this.weight}}</strong>
          </td>
          <td>
            <v-btn v-on:click="addWeight" flat icon>
              <v-icon>add</v-icon>
            </v-btn>
          </td>
        </tr>
        <tr>
          <td>
            <v-btn v-on:click="subtractRep" flat icon>
              <v-icon>remove</v-icon>
            </v-btn>
          </td>
          <td>
            <strong>Reps:</strong>
          </td>
          <td>
            <strong>{{this.reps}}</strong>
          </td>
          <td>
            <v-btn v-on:click="addRep" flat icon>
              <v-icon>add</v-icon>
            </v-btn>
          </td>
        </tr>
        <tr>
          <td>
            <v-btn v-on:click="saveSet" flat icon color="green">
              <v-icon>save</v-icon>
            </v-btn>
          </td>
          <td></td>
          <td></td>
          <td>
            <v-btn v-on:click="deleteSet" flat icon color="red">
              <v-icon>delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </table>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "SetComponent",
  props: ["setNumber", "setInfo"],
  methods: {
    subtractWeight() {
      if (this.weight > 0) {
        this.weight--;
      }
    },
    addWeight() {
      this.weight++;
    },
    subtractRep() {
      if (this.reps > 0) {
        this.reps--;
      }
    },
    addRep() {
      this.reps++;
    },
    saveSet() {},
    deleteSet() {}
  },
  data() {
    return {
      id: -1,
      weight: -1,
      reps: -1
    };
  },
  mounted() {
    this.id = this.setInfo.id;
    this.reps = this.setInfo.reps;
    this.weight = this.setInfo.weight;
  }
};
</script>

<style>

</style>


