<template>
    <div class="about">

        <div class="landing-wrapper">
            
            <!-- <v-sheet>
                <v-img :max-height="430" position="center" :src="require('..\\assets\\placeholder2.jpg')"> 

                    <div class="landing-text">
                        
                        <div> <strong> We are prayer warriors </strong></div>
                    </div>
                </v-img>


            </v-sheet> -->

            <div>
            <v-sheet
            color="#ededee"
            class="footer-sheet">
            </v-sheet>
            <div class="up-footer">
                    <v-img :contain="true" alt="" :src="require('..\\assets\\up.png')"> </v-img>
            </div>
            <div class="movement-footer"> <v-img :contain="true" :src="require('..\\assets\\Movement.png')"> </v-img> </div>
        </div>

        </div>

        <v-container>
            <v-row>
                <v-col
                v-for="n in 1"
                :key="n"
                cols="12"
                md="6"
                align-self="center"
                >
                    <div class="belief-wrapper">
                        <div class="belief"> We believe we will see an end to human trafficking </div>
                    </div>
                </v-col>
                    <v-spacer> </v-spacer>
                <v-col
                v-for="n in 1"
                :key="n"
                cols="12"
                md="5"
                align-self="center">
                    <div class="belief-wrapper"> 
                        <div class="vision-subtitle"> Our Vison</div>
                        <div class="vision-body"> We believe we can partner with God to bring Heaven to earth today. We believe we will see an end to human trafficking in our day as the global church unites and the heavens are opened. </div>
                    </div>

                </v-col>
                <v-spacer></v-spacer>
            </v-row>

            <v-row>
                
                <v-col
                v-for="n in 1"
                :key="n"
                cols="12"
                md="6"
                align-self="center"
                order-sm="1"
                >
                    <div class="belief-wrapper">
                        <div class="mission"> 24 hour prayer </div>
                    </div>
                </v-col>
                
                <v-col
                v-for="n in 1"
                :key="n"
                cols="12"
                md="5"
                align-self="center"
                order-sm="2"
                order-md="0">
                    <div class="belief-wrapper"> 
                        <div class="vision-subtitle"> Our Mission</div>
                        <div class="vision-body"> We seek to rally the global church together to cover the issue of human trafficking in 24/7 prayer until it ceases from the earth. We aim to partner with other organizations that are the hands and feet and support them financially and cover them in prayer.</div>
                    </div>

                </v-col>
                <v-spacer></v-spacer>
            </v-row>

            <v-row>

                <v-col
                v-for="n in 1"
                :key="n"
                cols="12"
                md="6"
                align-self="center">
                <div class="belief-wrapper"> 
                    <v-img class="founder" :src="require('..\\assets\\_GFU9977.jpg')"> </v-img>
                </div>
                </v-col>
                 
                 <v-spacer></v-spacer>
                 <v-col
                    v-for="n in 1"
                    :key="n"
                    cols="12"
                    md="5"
                    align-self="center">

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
      imgsrc: require('../assets/_GFU9977.jpg')
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


.belief-wrapper {
    margin-top: 24px;
    margin-bottom: 24px;

}

.belief {
    font-family: 'Montserrat', sans-serif;
        text-align: left;
        color: black;
        font-size: 2.5rem; // 54pt
        font-weight: 900;
        line-height: 1.2em;
        // margin: auto;
}

.mission {
    font-family: 'Montserrat', sans-serif;
        text-align: center;
        color: black;
        font-size: 4.2rem; // 54pt
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
