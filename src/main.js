import { createApp } from 'vue'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faCaretDown)

import App from './App.vue'

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
