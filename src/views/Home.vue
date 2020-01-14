<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <div class="container"> 
      <button @click="getEndos">Get Endorsements</button>
      <button @click="getEndo">Get current endorsement</button>
      <button @click="update"> Update </button>
      <button @click="getMonthRes">Get This Month's Reservations</button>


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

    },
    getMonthRes() {
      let today = new Date();
      UPClient.getMonthSummary(today.getUTCFullYear(), today.getUTCMonth(), data => {
        // Print out each day
        for (let i = 0; i < data.length; i++) {
          let dayData = data[i];
          console.log("Day " + i + ": "  + dayData.count + " reservations");

          for (let j = 0; j < dayData.locations.length; j++) {
            let resData = dayData.locations[j];
            console.log("  " + resData.district + ", " + resData.country);
          }
        }
      }, message => {
        console.log("ERROR: Couldn't get reservations for this month. Message: " + message);
      })
    }
  }


}
</script>
<style lang="scss" scoped>
button {
  padding: 15px;
}
</style>
