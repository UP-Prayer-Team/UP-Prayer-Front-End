<template>
    <div class="about">

        <div class="landing-wrapper">
            
            <v-sheet
            :height="430">
                <v-img :max-height="430" :position="center" :src="require('..\\assets\\placeholder2.jpg')"> 

                    <div class="landing-text">
                        <div> What is the UP Prayer Movement? </div>
                    </div>
                </v-img>


            </v-sheet>

        </div>

        <v-container>
            <v-row>
                <v-col>
                    
                    <v-card> 
                        <v-card-title> Our Vison</v-card-title>
                        <v-card-text> We believe we will see an end to human trafficing through prayer</v-card-text>
                    </v-card>

                </v-col>

                <v-col>
                    
                    <v-card> </v-card>

                </v-col>
            </v-row>
        </v-container>
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
    margin-top: 82px;
}

.landing-text {
    
    font-family: 'Montserrat', sans-serif;
    color: white !important;    
    text-align: center;
    font-weight: 700;
    font-size: 200%;
    line-height: 1.33em;

    position: absolute;
    left: 50%;
    top: 50%;
    
    transform: translate(-50%,-50%);
    transform: translate3d(-50%,-50%,0);
}

.v-card {
    margin: 1rem;
    flex: 1 1 200px;
}

.card-grid {
    // max-width: 940px;
    display: grid;
    margin: 0 20px;
    grid-gap: 1rem;
}

.v-card__title {
    word-break: keep-all;
}

</style>
