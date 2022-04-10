<template>
    <v-container>

        <v-breadcrumbs :items="breadcrumbs">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <h1>
            {{ this.name }}
        </h1>
        <v-rating
            empty-icon="mdi-star-outline"
            full-icon="mdi-star"
            half-icon="mdi-star-half-full"
            disabled=""
            length="5"
            size="32"
            :value="3"
        ></v-rating>
        <v-chip v-for="tag in camp.tags" :key="tag">
            {{ tag }}
        </v-chip>

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
        <script src="https://utteranc.es/client.js"
                repo="hsuan1117/CampSearchNuxt"
                issue-term="title"
                theme="github-light"
                crossorigin="anonymous"
                async>
        </script>
    </v-container>
</template>

<script>
import originData from '../../assets/camp_data/111summer.json'

export default {
    asyncData({params}) {
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

        return {name, camp}
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
        return null
        return {
            '@context': 'https://schema.org',
            '@type': 'Review',
            "itemReviewed": {
                "@type": "Event",
                "name": this.name,
                "location": this.camp.location,
                "organizer": this.camp.school,
                "startDate": new Date(this.camp.start).toISOString(),
                "endDate": new Date(this.camp.end).toISOString(),
                "offers":{
                    "@type": "Offer",
                    "price": String(this.camp.price),
                    "priceCurrency": "TWD",
                }
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4"
            },
            "name": "A good seafood place.",
            "author": {
                "@type": "Person",
                "name": "Bob Smith"
            },
            "reviewBody": "The seafood is great.",
            "publisher": {
                "@type": "Organization",
                "name": "Washington Times"
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
        }
    }
}
</script>

<style scoped>

</style>
