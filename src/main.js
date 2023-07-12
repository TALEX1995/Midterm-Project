import { createApp } from 'vue'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCaretDown, faMagnifyingGlass, faUserPlus, faPlus, faEye, faPaperPlane, faCartShopping, faBookOpen, faLifeRing } from '@fortawesome/free-solid-svg-icons';

import { faCalendarDays, faUser, faMoneyBill1 } from '@fortawesome/free-regular-svg-icons';

import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


/* add icons to the library */
library.add(faCaretDown, 
    faMagnifyingGlass, 
    faUserPlus, 
    faCalendarDays, 
    faPlus, 
    faUser, 
    faMoneyBill1, 
    faEye, 
    faPaperPlane, 
    faFacebookF, 
    faTwitter, 
    faInstagram, 
    faCartShopping, 
    faBookOpen,
    faLifeRing)

import App from './App.vue'

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
