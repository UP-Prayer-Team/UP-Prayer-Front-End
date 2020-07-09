<template>
    <div>
        <v-container class="updates">
            <v-row>
                <v-col cols="12">
                    <div class="logo">
                         <v-img style="margin: auto;" :contain="true" :src="require('../assets/logo.svg')" height="250" width="250" />
                        <div style="padding-top: 16px;"> There are currently no updates!</div>
                        <div style="padding-bottom: 16px;"> Check back soon for new blog posts!</div>
                    </div><br><br>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped>

.updates {
    margin-top: 82px;
}

</style>