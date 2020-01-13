<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <div class="container"> 
      <button @click="getEndos">Get Endorsements</button>
      <button @click="getEndo">Get current endorsement</button>
      <button @click="update"> Update </button>


    </div>
  </div>
</template>

<script>
import UPClient from '../services/UPClient'

export default {
  name: 'home',
  methods: {
    getEndos() {
      UPClient.getEndorsementList((currentIndex, endorsements) => {
        console.log("Endorsements: (current index: " + currentIndex + ")\n" + JSON.stringify(endorsements));
      }, message => {
        console.log("ERROR: Couldn't get endorsement list. Message: " + message);
      });
    },
    getEndo() {
      UPClient.getCurrentEndorsement(endorsement => {
        console.log("Current endorsement: \n" + JSON.stringify(endorsement));
      }, message => {
        console.log("ERROR: Couldn't get current endorsement. Message: " + message);
      });
    },
    update() {

    }
  }


}
</script>
<style lang="scss" scoped>
button {
  padding: 15px;
}
</style>
