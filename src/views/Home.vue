<template>
    <div class="home">

        <div class="landing-wrapper">
             <v-container
             style="padding-top: 0px !important; padding-bottom: 0px !important;">
                 <v-row
                 justify="center"
                 align="center">
                 <v-col
                 align-self="center"
                 cols="12"
                 style="padding-top: 0px !important; padding-bottom: 0px !important;">

                <div class="landing">
                    <v-img style="margin: auto;" :src="require('../assets/logo.svg')" alt="" height="200" width="200" />
                    <div class="landing-text" style="padding: 16px; margin: auto;"> UP MOVEMENT </div>
                </div>

                </v-col>
                 </v-row>
            </v-container>
        </div>
        <div class="banner-wrapper">
            <v-card class="banner">            
                <div class="banner-text-wrapper">
                    <v-card-text class="banner-text">
                    What happens when thousands around the
                    world focus their prayer on bringing an end
                    to human trafficking? <div> It ends. </div>
                    </v-card-text>
                    <v-card-actions class="banner-btns">
                        <v-btn
                        @click="toSignUp"
                        depressed
                        :outlined="true"
                        color="white"
                        min-width="100"
                        max-width="100"
                        class="pray-btn"> 
                        pray </v-btn>
                    </v-card-actions>
                </div>
            </v-card>
        </div>

        <v-container
        >
            <v-row
            align="center"
            justify="start"
            align-content="start"
            >
                <v-col
                :md="6">
                    <v-card 
                    :outlined="true"
                    min-height="300"
                    min-width="300"
                    style="padding-top: 0px; padding-bottom: 0px; float: left;">
                        <v-img alt="" :src="require('../assets/Flower_Mountain.png')" />
                    </v-card>
                </v-col>

                <v-col
                :md="6">
                    <v-card 
                    :outlined="true"
                    min-height="300"
                    min-width="300"
                    style="padding-top: 0px; padding-bottom: 0px; float: left;">
                        <v-img alt="" :src="require('../assets/Tear.png')" />
                    </v-card>
                </v-col>
            </v-row>

            <v-row
            align="start"
            justify="end">
                <v-col
                class="hidden-md-and-down"
                >

                    <v-card
                    :outlined="true"
                    class="logo-card"> 
                        <v-card-title>
                        </v-card-title>
                        
                        <v-card-text> <v-img alt="" :src="require('../assets/logo.svg')" />
                        </v-card-text>
                    </v-card>
                </v-col>
                 <v-col
                 :md="12"
                 :lg="8"
                 >
                    <div class="resource-card-wrapper">
                    <v-card
                    :outlined="true"
                    class="resource">
                        <v-card-title class="resource-title">
                            Freedom found in prayer
                        </v-card-title>

                        <v-card-subtitle class="resource-subtitle">
                            What is 30/30?
                        </v-card-subtitle>

                        <v-card-text class="resource-text">
                            <div class="resource-text">
                                <div>We believe united, global prayer is powerful and results in change.
                                The 30/30 idea is to pray for a 30-minute interval and give $30 to an 
                                anti-trafficking organization of your choice. Prayer opportunities are available
                                24/7/365. The $30 is to put love in action. It's not a required step, but we do encourage you to 
                                engage in this way. </div>
                                <div> We say to the industry of trafficking, "Get ready to encounter this Glory-King!"
                                    The Lord, armed and ready for battle, the Mighty One, invincible in every way!" (Psalm 24:7-8). </div>


                            </div>
                        
                        </v-card-text>

                        <v-card-actions>
                            <v-btn 
                            depressed
                            height="60px"
                            color="rgba(0, 0, 0, 100)"
                            min-width="150"
                            max-width="150"
                            class="signup-btn"
                            @click="toSignUp">
                                sign up
                            </v-btn>
                            <v-btn 
                            depressed
                            height="60px"
                            :outlined="true"
                            color="rgba(0, 0, 0, 100)"
                            min-width="150"
                            max-width="150"
                            class="resource-btn"
                            @click="toResources">
                                resources
                            </v-btn>
                        </v-card-actions>

                    </v-card>
                </div>
                 </v-col>
            </v-row>

        </v-container>

    </div>
</template>

<script>

export default {
    name: 'home',

    data() {
        return {
            currentEndorsement: null,
        }
    },
    methods: {
     
        toSignUp() {
            this.$router.replace({ name: "pray" });
        },
        toResources() {
            this.$router.replace({ name: "resources" });
        },
    },
    mounted () {
        window.scrollTo(0, 0);
    }
}
</script>
<style lang="scss" scoped>

    #button {
        margin: 15px;
    }

    .home {
        margin-top: 82px;
    }

    .landing-wrapper {

        padding-top: 16px;
        padding-bottom: 16px;
    }

    

    .landing-text {
        font-family: 'Montserrat', sans-serif;
        font-weight: 800;
        font-size: 4rem;
        letter-spacing: .08em;
        color: black;
       
    }

    .banner {
        padding-left: 10%;
    }

    .v-card {
        padding-top: 30px;
        padding-bottom: 30px;
        border-radius: 0px !important;
    }

    .v-btn {
        border-radius: 0px !important;
    }

    .theme--light.v-card.v-card--outlined {
        border: white;
    }

    .banner {
        background: linear-gradient(to right, #a300ff, #c70098, #f91600);
    }

    .banner-text {
        font-family: 'Montserrat', sans-serif;
        color: white !important;    
        text-align: left;
        padding-right: 10%;
        font-weight: 700;
        font-size: 2em;
        line-height: 1.33em;
        padding-left: 0px !important;
    }

    .banner-text-wrapper {
        text-align: left;
        padding-left: 10%;
        padding-right: 10%;
        color: white !important; 
    }

    .banner-btns {
        padding-left: 0px !important;
    }

    .logo-card {
        transform: translateY(110px);
    }

    .pray-btn {
        text-transform: lowercase;
    }

    .resoure-card-wrapper {
        float: right;
        
    }

    .resource-title {
        font-family: 'Montserrat', sans-serif;
        text-align: left;
        color: black;
        font-size: 4.5rem; // 54pt
        font-weight: 900;
        line-height: 1em;
    }

    .resource-subtitle {
        font-family: 'Montserrat', sans-serif;
        text-align: left;
        color: black !important;
        font-size: 3.33333rem; // 40pt
        font-weight: 700;
        line-height: 1.0em;
        padding-top: 32px !important;
    }

    .signup-btn {
        color: white !important; 
        font-family: 'Inter', sans-serif;
        font-size: 22px;
        font-weight: 700;
        letter-spacing: 0.0em; 
        text-transform: lowercase;
    }

    .resource-btn {
        color: rbga(0, 0, 0, 100);
        font-family: 'Inter', sans-serif;
        font-size: 22px;
        font-weight: 700;
        letter-spacing: 0.0em; 
        text-transform: lowercase;
    }

    .resource-text {
        font-family: 'Inter', sans-serif;
        text-align: left;
        color: black !important;
        font-size: 1.333333rem; // 16pt
        padding-top: 16px;
        padding-bottom: 16px;
        line-height: 1.4em;
    }

    .assets {
        width: 100%;
        min-width: 500px;
        height: auto;
    }

    .v-card__title {
        word-break: keep-all;
    }

    .v-card__actions {
        padding: 16px;
    }

    /* xs devices (phones, 430px width and down) */
    @media only screen and (max-width: 560px) {

        .landing-text {
        font-family: 'Montserrat', sans-serif;
        font-weight: 800;
        letter-spacing: .1em;
        font-size: 2.5rem;
        }


        .resource-title {
        font-family: 'Montserrat', sans-serif;
        text-align: left;
        color: black;
        font-size: 4.1777rem; // 54pt
        font-weight: 900;
        line-height: 1em;
        }

        .resource-subtitle {
            font-family: 'Montserrat', sans-serif;
            text-align: left;
            color: black !important;
            font-size: 3rem; // 40pt
            font-weight: 700;
            line-height: 1.0em;
            padding-top: 32px !important;
        }

        .resource-text {
            font-size: 1.0rem;
        }

        .banner-text {
            font-family: 'Montserrat', sans-serif;
            color: white !important;    
            text-align: left;
            padding-right: 10%;
            font-weight: 700;
            font-size: 1.5em;
            line-height: 1.33em;
            padding-left: 0px !important;
        }
    }

    /* xxs devices (phones, 430px width and down) */
    @media only screen and (max-width: 370px) {

        .landing-text {
        font-family: 'Montserrat', sans-serif;
        font-weight: 800;
        letter-spacing: .1em;
        font-size: 2.35rem;
        }


        .resource-title {
        font-family: 'Montserrat', sans-serif;
        text-align: left;
        color: black;
        font-size: 3.6777rem; // 54pt
        font-weight: 900;
        line-height: 1em;
        }

        .resource-subtitle {
            font-family: 'Montserrat', sans-serif;
            text-align: left;
            color: black !important;
            font-size: 2.5rem; // 40pt
            font-weight: 700;
            line-height: 1.0em;
            padding-top: 32px !important;
        }
    }
</style>