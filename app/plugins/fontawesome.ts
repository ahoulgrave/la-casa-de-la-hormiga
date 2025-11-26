import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Solid icons
import {
  faHouse,
  faWrench,
  faHourglass,
  faPaperPlane,
  faCircleCheck,
  faCircleExclamation,
  faLocationDot,
  faHeart,
  faVideo,
  faMusic,
  faUsers,
  faCirclePlay,
  faXmark,
  faCalendar,
  faCheck,
  faBriefcase,
  faGlobe,
  faBars,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'

// Brand icons
import {
  faYoutube,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

// Prevent Font Awesome from adding CSS automatically (we handle it)
config.autoAddCss = false

// Add icons to library
library.add(
  // Solid
  faHouse,
  faWrench,
  faHourglass,
  faPaperPlane,
  faCircleCheck,
  faCircleExclamation,
  faLocationDot,
  faHeart,
  faVideo,
  faMusic,
  faUsers,
  faCirclePlay,
  faXmark,
  faCalendar,
  faCheck,
  faBriefcase,
  faGlobe,
  faBars,
  faEnvelope,
  // Brands
  faYoutube,
  faInstagram
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
  nuxtApp.vueApp.component('FaIcon', FontAwesomeIcon)
})
