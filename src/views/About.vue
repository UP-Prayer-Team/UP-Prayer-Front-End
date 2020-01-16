<template>
    <div class="about">

        <div class="card-grid">
            <v-card
            class="mx-auto"
            max-width="344"
            min-width="250"
            max-heigth="550"
            shaped=true
        >
            <v-img :src="imgsrc" aspect-ratio="1.7"></v-img>
            <v-card-title> Lecia Retter </v-card-title>
            <v-card-subtitle style="text-align: left"> George Fox University </v-card-subtitle>
            <v-card-text>
            <div>I truly believe God is able to do immeasurably more than we can ask or imagine and want to discover
        what we can accomplish when we come together in unity and focus on a specific issue. Passionate,
        united prayer is powerful beyond measure. We will see the Kingdom released on earth as we band
        together in alignment with the heart of Jesus. He came to set the captives free and his glory will
        be revealed as he does this! May our united prayer be the tipping point so we see captives and
        slaves literally set free.</div>
            
            </v-card-text>
        </v-card>

                <v-card
                class="mx-auto"
                shaped=true
                max-height="400"
                min-width="400"
                >
                    <v-card-title> What is the UP Prayer Movement? </v-card-title>
                    <v-card-text>
                    <p> What happens when thousands around the world focus their prayer on bringing an end to human trafficking? It. Ends. 
                    Join the Unstoppable Prayer Movement (UP Movement). Once a year (or more) commit to pray for 30 minutes and donate $30 to the anti-trafficking organization of your choice. 
                    Why 30 minutes and $30? 
                    There are 8,750 hours per year which is 17,500 30-minute segments. With that many people praying and each donating $30, human trafficking can stop. It’s not about the money. It’s about the collective force that we can create to call on the Glory of the Lord. The UP Movement breaks down this complex and overwhelming issue into 30 minutes and $30. You, along with many others, can be the movement that stops trafficking in our world.
                    </p>
                    </v-card-text>
                </v-card>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      imgsrc: require('../assets/_GFU9977.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
    margin-left: 5%;
    margin-right: 5%;
}

.v-card {
    margin: 1rem;
}

.card-grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-auto-rows: auto;
    grid-gap: 1rem;
}
</style>
