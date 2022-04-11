<template>
    <v-container>
        <v-breadcrumbs :items="breadcrumbs">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1 class="d-inline-block">
            {{ this.name }}
        </h1>

        <v-chip v-for="tag in camp.tags" :key="tag">
            {{ tag }}
        </v-chip>

        <br/>
        <v-rating
            empty-icon="mdi-star-outline"
            full-icon="mdi-star"
            half-icon="mdi-star-half-full"
            disabled=""
            length="5"
            size="32"
            class="d-inline-block"
            :value="this.ratings.reduce((o,r)=>o+JSON.parse(r.body).rating, 0) / this.ratings.length"
        ></v-rating>
        ({{ this.ratings.length }})
        <v-list disabled>
            <v-subheader>營隊資訊</v-subheader>
            <v-list-item-group
                color="primary"
            >
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-school</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ this.camp.school }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-currency-usd</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            新台幣 <span class="font-weight-bold"> {{ this.camp.price }} </span>元
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-map-marker</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ this.camp.location }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    {{ this.camp.comment }}
                </v-list-item>
            </v-list-item-group>
        </v-list>
        <v-col cols="3">

            <v-card
                class="mx-auto"
                color="#26c6da"
                dark
                min-width="300"
                v-for="rating in this.ratings" :key="rating.id"
            >
                <v-rating
                    empty-icon="mdi-star-outline"
                    full-icon="mdi-star"
                    half-icon="mdi-star-half-full"
                    disabled=""
                    class="ml-2 pt-2 pb-0"
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    length="5"
                    size="32"
                    :value="JSON.parse(rating.body).rating"
                ></v-rating>
                <v-card-text class="text-h5 font-weight-bold pb-2"
                             style="color: black"
                             v-text="JSON.parse(rating.body).comment">
                </v-card-text>

                <v-card-actions>
                    <v-list-item class="grow">
                        <v-list-item-avatar color="grey darken-3">
                            <v-img
                                class="elevation-6"
                                alt=""
                                :src="rating.user.avatar_url"
                            ></v-img>
                        </v-list-item-avatar>

                        <a :href="rating.user.html_url" target="_blank"
                           class="text-decoration-none" style="color: white">{{
                                rating.user.login
                            }}</a>

                        <v-row
                            align="center"
                            justify="end"
                        >
                            <v-icon class="mr-1">
                                mdi-heart
                            </v-icon>
                            <span class="subheading mr-2">{{ rating.reactions.total_count }}</span>
                        </v-row>
                    </v-list-item>
                </v-card-actions>
            </v-card>
        </v-col>

        <v-card
            class="mx-auto mt-4"
            max-width="400"
        >
            <v-card-title>
                <v-icon
                    large
                    left
                >
                    mdi-comment
                </v-icon>
                <span class="text-h6 font-weight-bold">評論、評分</span>
            </v-card-title>

            <div class="text-md-body-1 px-4">
                有參加過 {{ this.name }}? 快來評論一下吧
            </div>

            <v-rating
                v-model="rating"
                color="yellow darken-3"
                class="px-4"
                background-color="grey darken-1"
                empty-icon="$ratingFull"
                half-increments
                hover
                large
            ></v-rating>

            <v-textarea
                outlined
                class="px-4"
                label="留下評論"
                v-model="comment"
            ></v-textarea>

            <v-card-actions class="justify-end pt-0">
                <v-btn
                    color="primary"
                    @click="submit"
                >
                    送出!
                </v-btn>
            </v-card-actions>
        </v-card>

        <v-dialog
            v-model="submitDialog"
            width="500"
        >
            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                    評價營隊
                </v-card-title>
                <v-alert type="warning">因為技術及開發時程緣故，目前只能以複製、貼上方式評價</v-alert>
                <v-card-text>
                    複製下面這段程式碼貼上至Github Issue
                    <br/>
                    <code>
                        {{ generatedPayload }}
                    </code>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="finalSubmit"
                    >
                        複製並開啟網頁
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
import originData from '../../assets/camp_data/111summer.json'
import axios from 'axios'

import copy from 'copy-to-clipboard';
export default {
    data() {
        return {
            rating: 4,
            comment: '',
            submitDialog: false
        }
    },
    methods: {
        submit() {
            this.submitDialog = true
        },
        finalSubmit() {
            this.submitDialog = false
            copy(this.generatedPayload);
            window.open(this.issue.html_url + '#new_comment_field')
        }
    },
    async asyncData({params}) {
        const name = params.name
        const camp = originData.filter(x => x.name === name)[0] ?? {
            name: '查無資料',
            school: '查無資料',
            location: '查無資料',
            price: '查無資料',
            start: '查無資料',
            end: '查無資料',
            apply: '查無資料',
            website: 'https://google.com/search?q=' + name,
            comment: '查無資料',
            tags: []
        }

        const issueRes = await axios.get(`https://api.github.com/search/issues?q=${encodeURIComponent(name + ' is:issue is:open repo:campsearch/website label:rating')}`);
        let issue = issueRes.data
        //console.log(issue)
        let ratings = [];

        if (issue.items.length === 0) {
            const createIssueRes = await axios.post(`https://api.github.com/repos/campsearch/website/issues`, JSON.stringify({
                title: name,
                labels: [
                    'rating'
                ],
                body: "https://camp.hsuan.app/detail/" + name
            }), {
                headers: {
                    Authorization: 'Bearer ' + process.env.GITHUB_ACCESS_TOKEN
                },
                timeout: 20000,
            });
            //console.log(createIssueRes.data)
        } else {
            issue = issue.items[0]
            const ratingsRes = await axios.get(issue.comments_url);
            ratings = ratingsRes.data;

            ratings = ratings.filter(r => {
                try {
                    JSON.parse(r.body)
                } catch (e) {
                    return false
                }
                return true
            })
        }
        return {name, camp, ratings, issue}
    },
    head() {
        return {
            title: this.name + ' 營隊評價、營隊內容',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: '要價' + this.camp.price + '元的' + this.name + '營隊好嗎? 實際參與學生心得分享及家長評價 ' + this.camp.comment
                },
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: this.name + ' 營隊評價、營隊內容'
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: '要價' + this.camp.price + '元的' + this.name + '營隊好嗎? 實際參與學生心得分享及家長評價 ' + this.camp.comment
                },
            ]
        }
    },

    jsonld() {
        return {
            '@context': 'https://schema.org',
            "@type": "Event",
            "name": this.name,
            "location": this.camp.location,
            "organizer": this.camp.school,
            "startDate": new Date(this.camp.start).toISOString(),
            "endDate": new Date(this.camp.end).toISOString(),
            "offers": {
                "@type": "Offer",
                "price": String(this.camp.price),
                "priceCurrency": "TWD",
            },
            "review": this.ratings.map(rating => ({
                "@type": "Review",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": JSON.parse(rating.body).rating
                },
                "author": {
                    "@type": "Person",
                    "name": rating.user.login
                },
                "reviewBody": JSON.parse(rating.body).comment
            })),
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": this.ratings.reduce((o,r)=>o+JSON.parse(r.body).rating, 0) / this.ratings.length,
                "ratingCount": this.ratings.length
            }
        };
    },

    computed: {
        breadcrumbs() {
            return [
                {
                    text: '營隊資訊',
                    disabled: false,
                    href: 'list',
                },
                {
                    text: this.name,
                    disabled: true,
                    href: 'detail/' + this.name,
                }
            ]
        },
        generatedPayload() {
            return JSON.stringify({
                rating: this.rating,
                comment: this.comment
            })
        }
    }
}
</script>

<style scoped>

</style>
