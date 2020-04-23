<template>
    <div>
        <v-container>
            <v-row>
                <v-col>
                    <v-toolbar flat color="transparent">
                            <v-btn @click="toNextPost" v-if="nextPost" outlined>
                                <v-icon class="mr-2">mdi-chevron-left</v-icon>
                                {{ nextPost.title }}
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn @click="toPrevPost" v-if="prevPost" outlined>
                                {{ prevPost.title }}
                                <v-icon class="ml-2">mdi-chevron-right</v-icon>
                            </v-btn>
                    </v-toolbar>
                    <v-card class="text-left">
                        <v-card-title v-if="post">
                            {{ post.title }}
                        </v-card-title>
                        <v-card-subtitle v-if="post">
                            By {{ post.author }} on {{ post.date }}
                        </v-card-subtitle>
                        <v-card-text v-if="post">
                            <div v-html="post.content">

                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import UPClient from "../services/UPClient";

export default {
    data() {
        return {
            post: null,
            nextPost: null,
            prevPost: null
        }
    },
    mounted() {
        this.refreshData();
    },
    methods: {
        refreshData() {
            UPClient.getPost(this.$route.params.id, post => {
                this.post = post;
            }, message => {
                console.log("Error fetching post: " + message);
            });
            UPClient.listPosts(posts => {
                if (posts.length > 0) {
                    for (let i = 0; i < posts.length; i++) {
                        if (posts[i].id == this.$route.params.id) {
                            this.nextPost = i > 0 ? posts[i - 1] : null;
                            this.prevPost = i < posts.length - 1 ? posts[i + 1] : null;
                        }
                    }
                }
                else {
                    this.nextPost = null;
                    this.prevPost = null;
                }
            }, message => {
                console.log("Error fetching posts: " + message);
            });
        },
        toNextPost() {
            this.$router.push({ name: "blog", params: { id: this.nextPost.id } });
        },
        toPrevPost() {
            this.$router.push({ name: "blog", params: { id: this.prevPost.id } });
        }
    },
    watch: {
        $route(_, __) {
            this.refreshData();
        }
    }
}
</script>

<style>
/* Blog Content Styles
   (Please keep in sync with UP-Prayer-Admin's BlogPosts.vue) */
/* Hack because something (Vuetify?) is killing all margins on heading elements for some reason. */
h1, h2, h3, h4, h5, p, blockquote {
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
}
blockquote {
    margin-left: 5em;
    margin-right: 5em;
    padding: 0.25em 1em;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 7px;
}
pre > code {
    margin: 1em;
    padding: 0.10em 0.25em;
    display: block;
}
</style>