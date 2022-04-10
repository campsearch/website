<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="logo py-4 d-flex justify-center">
          <HsuanLogo/>
        </v-card>
        <v-card>
          <v-card-title class="headline">
            歡迎使用營隊查詢系統
          </v-card-title>
          <v-card-text>
            <p>
              你可以查看 <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              class="text-decoration-line-through"
            >
              文檔
            </a>來知道怎麼使用
            </p>
            <!--
            <p>
              推薦你立即加入 <a
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
            </a>-->
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn
              color="primary"
              nuxt
              to="/"
            >
              開始使用
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <!--
    <v-row>
      <v-col class="text-center">
        <img
          src="/v.png"
          alt="Vuetify.js"
          class="mb-5"
        >
        <blockquote class="blockquote">
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
      </v-col>
    </v-row>-->
  </v-container>
</template>

<script>
import HsuanLogo from "../components/HsuanLogo";
export default {
  name: 'AboutPage',
  components: {HsuanLogo}
}
</script>
