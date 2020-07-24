<template>
    <div class="about">

        <div class="landing-wrapper">
            <div>
                <v-sheet
                color="#ededee"
                class="footer-sheet">
                </v-sheet>
                <div class="about-image">
                    <v-img :contain="true" alt="" position="left" :src="aboutsrc" style="max-height: 100% !important;"> </v-img>
                </div>
            </div>
        </div>

        <v-container>
            <v-row>
                <v-col data-aos="fade-in">
                    <v-row align="center" justify="center" style="padding: 16px;">
                        <div class="belief"> Freedom for captives </div>
                    </v-row>
                    <v-row align="center" justify="center" style="padding: 16px;">
                        <div>
                            <div class="vision-subtitle"> Our Vison </div>
                            <div class="vision-body"> We partner with God to bring Heaven's priorities to Earth today. We believe we will see an end to human trafficking as believers around the globe unite in focused prayer. </div>
                        </div>
                    </v-row>
                </v-col>
            </v-row>

            <v-row>
                <v-col data-aos="fade-in">
                    <v-row align="center" justify="center" style="padding: 16px;">
                        <div class="mission"> 30/$30 </div>
                    </v-row>
                    <v-row align="center" justify="center" style="padding: 16px;">
                        <div>
                            <div class="vision-subtitle"> Our Mission </div>
                            <div class="vision-body"> With thirty minutes of prayer and thirty dollars donated to an anti-trafficking organization, we will see walls fall down.</div>
                        </div>
                    </v-row>
                </v-col>
            </v-row>

            <v-row
            align="start"
            justify="center"
            style="padding: 16px;"
            >
                <v-col
                align-self="center"
                style="padding-top: 24px; padding-bottom: 24px;"
                >
                <div class="founder-wrapper"> 
                    <v-img class="founder" max-width="500" position="center center" :contain="true" :src="foundersrc"> </v-img>
                </div>

                <div> 
                <div class="vision-subtitle"> Our Founder</div>

                <div class="quote-body">I truly believe God is able to do immeasurably more than we can ask or imagine and I want to discover what we can accomplish when we come together in unity and focus on a specific issue. Passionate, united prayer is powerful beyond measure. We will see the Kingdom released on earth as we band together in alignment with the heart of Jesus. He came to set the captives free and his glory will be revealed as he does this! May our united prayer be the tipping point so we see captives and slaves literally set free. </div>
                <div class="vision-footer"> -Lecia Retter </div>
                </div>
                </v-col>
            </v-row>
        </v-container>


        <!-- <v-img alt="" :src="require('../assets/grey-logo.svg')" style="max-width: 80%;" /> -->
    </div>
</template>

<script>

export default {
  data() {
    return {
      foundersrc: require('../assets/_GFU9977.jpg'),
      aboutsrc: require('../assets/about_up.png'),
    }
  },
  mounted () {
    window.scrollTo(0, 0);
  },
  
}
</script>

<style lang="scss" scoped>
.about {
    margin-top: 82px;
}

.about-image {
    height: 90vh;
}

 @media only screen and (max-width: 959px) {
    .about-image {
    height: 100% !important;
    }
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
        text-align: center;
        color: black;
        font-size: 4.6rem;
        font-weight: 900;
        line-height: 1.1em;
}

.mission {
    font-family: 'Montserrat', sans-serif;
        text-align: center;
        color: black;
        font-size: 5rem;
        font-weight: 900;
        line-height: 1em;
        // margin: auto;
}


.vision-subtitle {
    font-family: 'Montserrat', sans-serif;
        text-align: center;
        color: black !important;
        font-size: 1.33333rem; // 40pt
        font-weight: 700;
        line-height: 1.0em;
    display: block;
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
        text-align: center;
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
    margin: auto;
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

.movement-footer {
    margin-left: 2.5%;
    margin-right: 17%;
}

.row-padding {
    padding-top: 24px;
    padding-bottom: 24px;
}

.founder-wrapper {
    padding-top: 24px;
    padding-bottom: 24px;

}

    @media only screen and (max-width: 460px) {
        .belief {
            font-size: 3rem;
        }

        .mission {
            font-size: 3rem;
        }
    }

    .theme--light.v-card {
        border: white !important;
    }

    .background {
        background: url('../assets/grey-logo.svg');
    }

</style>
