<template>
    <v-container>
        <v-row>
            <v-col cols="12" style="min-height: calc(50vh);">
                <v-card>
                    <v-card-title>
                        111暑假營隊
                        <v-spacer></v-spacer>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="搜尋"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-card-title>

                    <v-autocomplete
                        v-model="tags"
                        :items="categories"
                        chips
                        small-chips
                        label="篩選標籤"
                        multiple
                        solo
                        hide-details
                        class="px-4 mb-3"
                    ></v-autocomplete>

                    <v-banner two-line>
                        <v-avatar
                            slot="icon"
                            color="deep-purple accent-4"
                            size="40"
                        >
                            <v-icon
                                icon="mdi-thumb-up"
                                color="white"
                            >
                                mdi-thumb-up
                            </v-icon>
                        </v-avatar>
                        Web開發挑戰營
                        學習如何架設網站建立你獨一無二的學習歷程！
                        <template v-slot:actions>
                            <v-btn
                                onclick="window.open('https://camp.aplusplus.education')"
                                text
                                color="deep-purple accent-4"
                            >
                                了解詳情
                            </v-btn>
                        </template>
                    </v-banner>
                    <v-data-table
                        :headers="headers"
                        :items="originData"
                        :items-per-page="perPage"
                        item-key="name"
                        class="elevation-1"
                        :search="search"
                        :expanded.sync="expanded"
                        show-expand
                    >
                        <template v-slot:expanded-item="{ headers, item }">
                            <td :colspan="headers.length">
                                {{ item.comment }}
                                <span class="font-weight-bold" v-if="!item.comment">目前沒有詳細資料</span>
                            </td>
                        </template>
                        <template v-slot:no-results>
                            <v-alert type="warning" class="my-2">目前沒有符合的資料</v-alert>
                        </template>
                        <template v-slot:item.tags="{ item }">
                            <v-item-group multiple>
                                <v-item v-for="tag in item.tags" :key="tag">
                                    <v-chip @click="tagClick(tag)">
                                        {{ tag }}
                                    </v-chip>
                                </v-item>
                            </v-item-group>
                        </template>
                        <template v-slot:item.website="{ item }">
                            <a :href="item.website" target="_blank" rel="nofollow" class="text-decoration-none">
                                <v-icon>mdi-open-in-new</v-icon>
                            </a>
                            <router-link :to="`/detail/${item.name}`" class="text-decoration-none">
                                <v-icon>mdi-eye</v-icon>
                            </router-link>
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
        <v-snackbar
            v-model="snackbar"
        >
            歡迎報名Web開發挑戰營<br/>
            學習如何架設網站建立你獨一無二的學習歷程
            <template v-slot:action="{ attrs }">
                <v-btn
                    v-bind="attrs"
                    @click="snackbar = false;window.open('https://camp.aplusplus.education')"
                    text
                    color="pink"
                >
                    了解詳情
                </v-btn>
            </template>
        </v-snackbar>
    </v-container>
</template>

<script>
import originData from '../assets/camp_data/111summer.json'

export default {
    name: 'IndexPage',
    data() {
        return {
            expanded: [],
            search: '',
            tags: [],
            categories: [...new Set(originData.flatMap(r => r.tags))],
            perPage: 500,
            snackbar: false
        }
    },
    computed: {
        originData(){
            return originData.sort(()=>Math.random()-0.5)
        },
        headers() {
            return [
                {
                    text: '名稱',
                    value: 'name'
                },
                {
                    text: '主辦單位',
                    value: 'school'
                },
                {
                    text: '地點',
                    value: 'location'
                },
                {
                    text: '報名截止時間',
                    value: 'apply'
                },
                {
                    text: '營隊開始時間',
                    value: 'start'
                },
                {
                    text: '營隊結束時間',
                    value: 'end'
                },
                {
                    text: '價格',
                    value: 'price'
                },
                {
                    text: '網站',
                    value: 'website'
                },
                {
                    text: '標籤',
                    value: 'tags',
                    filter: this.tagsFilter
                }
            ]
        }
    },
    methods: {
        tagClick(tag) {
            if (!this.tags.includes(tag)) {
                this.tags.push(tag)
            }
        },
        tagsFilter(value) {
            if (!(this.tags) || this.tags.length === 0) {
                return true;
            }
            return value.some(t => this.tags.includes(t)) || this.tags.length === 0
        }
    },
    mounted() {
        this.perPage = 5
        setTimeout(()=>{
            this.snackbar = true
        }, 30000)
    }
}
</script>
