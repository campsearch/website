import axios from 'axios'
import cacheAdapterEnhancer from '@fengsi/nuxt-axios-cache/dist/cacheAdapterEnhancer'

export default ({ ssrContext }) => {
    let adapter = null

    if (process.server) {
        adapter = cacheAdapterEnhancer(axios.defaults.adapter, {
            defaultCache: ssrContext.$axCache,
        })
    } else {
        adapter = cacheAdapterEnhancer(axios.defaults.adapter, {
            cacheBrowserEnable: true
        })
    }

    if (adapter && process.env.NODE_ENV !== 'development') {
        axios.create({ adapter })
    }
}
