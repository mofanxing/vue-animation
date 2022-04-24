import { createApp } from 'vue'
import App from './App.vue'
import { gsap } from 'gsap'
import './utils/SplitText'
import './utils/MorphSVGPlugin.min.js'

import './assets/theme/scss/index.scss'
gsap.registerPlugin(MorphSVGPlugin)
window.gsap = gsap

createApp(App).mount('#app')
