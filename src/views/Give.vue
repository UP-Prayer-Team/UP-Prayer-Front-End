<template>

    <v-container class="thanks">
        <v-row>
            <v-col
            cols="12">

                <div class="logo">
                    <v-img style="margin: auto;" :contain="true" :src="require('../assets/logo.svg')" height="250" width="250" />
                    <div style="padding: 16px;"> The Unstoppable Prayer Movement (UP) operates as a non-profit. If you wish to give directly toward UP activity costs, please do so here. </div>
                </div>

            </v-col>
        </v-row>
        <v-row>
                <v-col
                cols="12">
                    <v-sheet :max-height="430" class="donate">
  

                    <div> <donate></donate> </div>
                    
                    </v-sheet>
                </v-col>
            </v-row>
    </v-container>
  
</template>

<script>
export default {
    mounted () {
        window.scrollTo(0, 0);
}
}
</script>

<style>

.thanks {
    margin-top: 82px;
}

.logo {
    font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 200%;
        line-height: 1.33em;
}

</style>