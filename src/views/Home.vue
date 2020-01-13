<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <div class="container"> 
      <button @click="getEndos">Get Endorsements</button>
      <button @click="getEndo">Get current endorsements</button>
      <button @click="update"> Update </button>


    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  methods: {
    getEndos() {

    },
    getEndo() {

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
