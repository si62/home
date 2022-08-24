import { createApp } from 'vue'
import App from './App.vue'
import router from './router.vue'
import './index.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'


import DashboardLayout from './components/DashboardLayout.vue'
import EmptyLayout from './components/EmptyLayout.vue'


library.add(faUserSecret)

createApp(App)
    .component('default-layout', DashboardLayout)
    .component('empty-layout', EmptyLayout)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
