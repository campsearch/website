import colors from 'vuetify/es5/util/colors'
import zhHant from './lang/zh-Hant'

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s | 暑假營隊搜尋系統',
        title: '暑假營隊搜尋系統',
        meta: [
            {charset: 'utf-8'},

            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {name: 'format-detection', content: 'telephone=no'},

            {hid: 'description', name: 'description', content: '快速搜尋、了解營隊價格、評價的系統'},
            {hid: 'og:title', name: 'og:title', content: '暑假營隊搜尋系統'},
            {hid: 'og:description', name: 'og:description', content: '快速搜尋、了解營隊價格、評價的系統'},
            {hid: 'og:site_name', name: 'og:site_name', content: '營隊搜尋系統'},
            {hid: 'og:locale', name: 'og:locale', content: 'zh_TW'},
            {hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: '營隊搜尋'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/jsonld.js', '~/plugins/api.js'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',

        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',

        '@/modules/sitemapGenerator',

        '@nuxtjs/sitemap',

        '@fengsi/nuxt-axios-cache'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/'
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'zh-TW'
        }
    },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: false,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        },
        lang: {
            locales: {
                zhHant
            },
            current: 'zhHant'
        }
    },

    sitemap: {
        hostname: 'https://camp.hsuan.app',
        gzip: true,
        defaults: {
            changefreq: 'daily',
            priority: 1,
            lastmod: new Date()
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}
