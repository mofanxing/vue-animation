import { createApp } from 'vue'
import App from './App.vue'
import { gsap } from 'gsap'
import './utils/SplitText'
import './assets/theme/scss/index.scss'
window.gsap = gsap

createApp(App).mount('#app')
