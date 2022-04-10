<template>
    <v-container>
        <h1>
            {{ this.name }}
        </h1>
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
                            {{ camp.school }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-currency-usd</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            新台幣 <span class="font-weight-bold"> {{ camp.price }} </span>元
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-map-marker</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ camp.location }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    {{ camp.comment }}
                </v-list-item>
            </v-list-item-group>
        </v-list>
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
                    content: this.name + '營隊好嗎? 實際參與學生心得分享及家長評價'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
