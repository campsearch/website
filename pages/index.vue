<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="logo py-4 d-flex justify-center">
          <NuxtLogo/>
          <VuetifyLogo/>
        </v-card>
        <v-card>
          <v-card-title class="headline">
            Welcome to the Vuetify + Nuxt.js template
          </v-card-title>
          <v-card-text>
            <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower
              developers to create amazing applications.</p>
            <p>
              For more information on Vuetify, check out the <a
              href="https://vuetifyjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation
            </a>.
            </p>
            <p>
              If you have questions, please join the official <a
              href="https://chat.vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="chat"
            >
              discord
            </a>.
            </p>
            <p>
              Find a bug? Report it on the github <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              issue board
            </a>.
            </p>
            <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the
              future.</p>
            <div class="text-xs-right">
              <em><small>&mdash; John Leider</small></em>
            </div>
            <hr class="my-3">
            <a
              href="https://nuxtjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nuxt Documentation
            </a>
            <br>
            <a
              href="https://github.com/nuxt/nuxt.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nuxt GitHub
            </a>
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn
              color="primary"
              nuxt
              to="/inspire"
            >
              Continue
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card class="px-4 pb-5">
          <v-card-title class="font-bold px-0">
            篩選條件
          </v-card-title>
          <v-text-field label="搜尋" prepend-inner-icon="mdi-magnify" v-model="searchContent" class="mb-2"
                        hide-details></v-text-field>
          <v-autocomplete
            v-model="tags"
            :items="categories"
            dense
            chips
            small-chips
            label="篩選標籤"
            multiple
            solo
            hide-details
            class="border-b-2"
          ></v-autocomplete>
          <v-select
            v-model="resultCountPerPage"
            :items="pageSelect"
            label="每頁顯示數量"
            required
            hide-details
          ></v-select>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" style="min-height: calc(50vh);">
        <v-alert type="warning" v-if="">查無資料，請檢查篩選條件</v-alert>

        <v-data-table
          :headers="headers"
          :items="originData"
          :items-per-page="5"
          class="elevation-1"
        >
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
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import originData from '../assets/camp_data/111summer.json'

const pageSelect = [
  5, 10, 20, 50, 100
]
export default {
  name: 'IndexPage',
  data() {
    return {
      originData,
      searchContent: '',
      tags: [],
      categories: [...new Set(originData.flatMap(r => r.tags))],
      dialog: {},
      headers: [
        /*{
          text: '#',
          value: ''
        },*/
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
          value: 'tags'
        }
      ]
    }
  },
  methods: {
    tagClick(tag) {
      if (!this.tags.includes(tag)) {
        this.tags.push(tag)
        this.page = 1
        this.resetPage()
      }
    }
  },
  watch: {
    searchContent() {
      this.page = 1
      this.resetPage()
    }
  },
  mounted() {

  }
}
</script>
