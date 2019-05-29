<template>
  <v-container>
    <v-alert dismissible v-model="failed" type="error">Update failed</v-alert>
    <v-alert dismissible v-model="succesful" type="success">Update succeeded</v-alert>
    <v-layout justify-center>
      <table>
        <tr>
          <th></th>
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
            <strong>{{this.set.weight}}</strong>
          </td>
          <td>
            <v-btn v-on:click="addWeight" flat icon>
              <v-icon>add</v-icon>
            </v-btn>
          </td>
          <td>
            <v-btn v-on:click="saveSet" flat icon color="green">
              <v-icon>save</v-icon>
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
            <strong>{{this.set.reps}}</strong>
          </td>
          <td>
            <v-btn v-on:click="addRep" flat icon>
              <v-icon>add</v-icon>
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
      if (this.set.weight > 0) {
        this.set.weight--;
      }
    },
    addWeight() {
      this.set.weight++;
    },
    subtractRep() {
      if (this.set.reps > 0) {
        this.set.reps--;
      }
    },
    addRep() {
      this.set.reps++;
    },
    saveSet() {
      if (this.$setService.update(this.set, this.set.id)) {
        this.succesful = true;
      } else {
        this.failed = true;
      }
    }
  },
  data() {
    return {
      set: {
        id: 0,
        weight: 0,
        reps: 0,
        exercise: {}
      },
      succesful: false,
      failed: false
    };
  },
  mounted() {
    this.set.id = this.setInfo.id;
    this.set.reps = this.setInfo.reps || 0;
    this.set.weight = this.setInfo.weight || 0;
    this.set.exercise = this.setInfo.exercise;
  }
};
</script>

<style>
</style>


