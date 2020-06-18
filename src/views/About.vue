<template>
    <div class="about">

        <div class="landing-wrapper">
            <div>
            <v-sheet
            color="#ededee"
            class="footer-sheet">
            </v-sheet>
            <div class="up-footer">
                    <v-img :contain="true" alt="" :src="upsrc"> </v-img>
            </div>
            <div class="movement-footer"> <v-img :contain="true" :src="movementsrc"> </v-img> </div>
        </div>

        </div>

        <v-container>
            <v-row
            style="padding-top: 16px; padding-bottom: 16px;">
                <v-col
                v-for="n in 1"
                :key="n"
                cols="12"
                md="6"
                align-self="center"
                style="padding-top: 16px; padding-bottom: 16px;"
                >
                    <div class="belief-wrapper">
                        <div class="belief"> Freedom for captives </div>
                    </div>
                </v-col>
                    <v-spacer> </v-spacer>
                <v-col
                v-for="n in 1"
                :key="n"
                cols="12"
                md="5"
                align-self="center"
                style="padding-top: 16px; padding-bottom: 16px;">
                    <div class="belief-wrapper"> 
                        <div class="vision-subtitle"> Our Vison</div>
                        <div class="vision-body"> We partner with God to bring Heaven's priorities to Earth today. We believe we will see an end to human trafficking as believers around the globe unite in focused prayer. </div>
                    </div>

                </v-col>
                <v-col class="ml-auto"></v-col>
            </v-row>

            <v-row>
                
                <v-col
                v-for="n in 1"
                :key="n"
                cols="12"
                md="5"
                align-self="center"
                order-sm="1"
                style="padding-top: 16px; padding-bottom: 16px;"
                >
                    <div class="belief-wrapper">
                        <div class="mission"> 30/$30 </div>
                    </div>
                </v-col>
                
                <v-col
                v-for="n in 1"
                :key="n"
                cols="12"
                md="5"
                align-self="center"
                order-sm="2"
                order-md="0"
                style="padding-top: 16px; padding-bottom: 16px;"
                >
                    <div class="belief-wrapper"> 
                        <div class="vision-subtitle"> Our Mission </div>
                        <div class="vision-body"> With thirty minutes of prayer and thirty dollars donated to an anti-trafficking organization, we will see walls fall down.</div>
                    </div>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>

            <v-row
            align="start"
            >

                <v-col
                v-for="n in 1"
                :key="n"
                cols="12"
                md="6"
                align-self="center"
                style="padding-top: 16px; padding-bottom: 16px;"
                >
                <div class="belief-wrapper"> 
                    <v-img class="founder" max-width="500" :src="foundersrc"> </v-img>
                </div>
                </v-col>
                 
                 <v-spacer></v-spacer>
                 <v-col
                    v-for="n in 1"
                    :key="n"
                    cols="12"
                    md="5"
                    align-self="center"
                    style="padding-top: 16px; padding-bottom: 16px;">

                    <div class="belief-wrapper"> 
                    <div class="vision-subtitle"> Our Founder</div>

                    <div class="quote-body">I truly believe God is able to do immeasurably more than we can ask or imagine and I want to discover what we can accomplish when we come together in unity and focus on a specific issue. Passionate, united prayer is powerful beyond measure. We will see the Kingdom released on earth as we band together in alignment with the heart of Jesus. He came to set the captives free and his glory will be revealed as he does this! May our united prayer be the tipping point so we see captives and slaves literally set free. </div>
                    <div class="vision-footer"> -Lecia Retter </div>
                    </div>
                </v-col>
                 
                <v-spacer></v-spacer>
                
            </v-row>

        </v-container>
    </div>
</template>

<script>
export default {
  data() {
    return {
      foundersrc: require('../assets/_GFU9977.jpg'),
      upsrc: require('../assets/up.png'),
      movementsrc: require('../assets/Movement.png')
    }
  },
  mounted () {
    window.scrollTo(0, 0);
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


.belief {
    font-family: 'Montserrat', sans-serif;
        text-align: left;
        color: black;
        font-size: 4.2rem; // 54pt
        font-weight: 900;
        line-height: 1.1em;
}

.mission {
    font-family: 'Montserrat', sans-serif;
        text-align: left;
        color: black;
        font-size: 4.6rem; // 54pt
        font-weight: 900;
        line-height: 1em;
        // margin: auto;
}


.vision-subtitle {
    font-family: 'Montserrat', sans-serif;
        text-align: left;
        color: black !important;
        font-size: 1.33333rem; // 40pt
        font-weight: 700;
        line-height: 1.0em;
}

.vision-footer {
    font-family: 'Montserrat', sans-serif;
        text-align: right;
        color: black !important;
        font-size: 1.33333rem; // 40pt
        font-weight: 700;
        line-height: 1.0em;
}

.vision-body {
    font-family: 'Inter', sans-serif;
        text-align: left;
        color: black !important;
        font-size: 1.1rem; // 16pt
        padding-top: 16px;
        padding-bottom: 16px;
        line-height: 1.4em;
}

.quote-body {
    font-family: 'Inter', sans-serif;
        text-align: left;
        color: black !important;
        font-size: 1.1rem; // 16pt
        padding-top: 16px;
        padding-bottom: 16px;
        line-height: 1.4em;
}

.founder {
    margin-top: 16px;
    margin-bottom: 16px;
    text-align: left;
    // margin: auto;
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

.footer-sheet {
        border-radius: 0px !important;
    }

.up-footer {
    margin-right: 33.33%;
}
.movement-footer {
    margin-left: 2.5%;
    margin-right: 17%;
}



</style>
