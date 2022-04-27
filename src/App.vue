<script setup lang="ts">
import { ref, onMounted } from 'vue'

const num = ref({ numText: 0 })
const text = ref()

const numChange = () => {
  gsap.to(num.value, {
    duration: 20,
    numText: num.value.numText + 10,
    onUpdate: () => {
      num.value.numText = parseFloat(num.value.numText.toFixed(2))
    },
    ease: 'sine',
  })
}

const imgEl = ref()

onMounted(() => {
  const str = new SplitText(text.value, { type: 'words,chars' })
  console.log(str)
  const chars = str.chars
  const tl = gsap.timeline()
  gsap.set('.text', { perspective: 400 })
  tl.from(chars, {
    duration: 0.3,
    opacity: 0,
    rotation: 90,
    scale: 0,
    x: 20,
    y: 60,
    ease: 'easeOut',
    stagger: 0.05,
  })

  const wh = window.innerHeight
  document.addEventListener('scroll', function () {
    const { bottom, top, height } = imgEl.value.getBoundingClientRect()
    console.log(bottom, top, height)
    if (bottom <= 0 || top >= wh) return
    const y = document.documentElement.scrollTop * 0.15
    imgEl.value.style.transform = `translate3d(0, -${y}px, 0) scale(1.3)`
  })
})

let svgButton = {
  svg: null,
  rect: null,
  play: false,
  front: null,
  back: null,
  path: null,
  viewBox: null,
  points: [],
  sort: [],
  sort_by_x: [],
  step: 8,
  delay: 0.0015,
  radius: 12,
  tweens: [],
}
</script>

<template>
  <div class="mt-6 flex justify-center items-center flex-col">
    <span>{{ num.numText }}</span>
    <div class="btn">
      <button @click="numChange">点击+10</button>
    </div>

    <div class="max-w-sm" ref="text">
      SplitText makes it easy to break apart the text in an HTML element so that
      each character, word, and/or line is wrapped in its own div tag
    </div>
  </div>

  <div class="imgbox">
    <img
      ref="imgEl"
      src="http://www.themustafacelik.com/wp-content/uploads/2018/03/bandsome.jpg"
      alt=""
    />
  </div>

  <div id="mutebtn" class="site-bnr site-bnr-item enable">
    <button onMouseEnter="onEnter(event)" class="button-body" data-hover="Play">
      <div>Mute</div>
      <svg viewBox="80 10 120 120">
        <path d="" class="b fill-dgreen"></path>
        <path d="" class="f fill-cookie-f"></path>
      </svg>
    </button>
  </div>

  <div class="site-resource">
    <svg viewBox="0 0 280 140" class="button-svg-s">
      <path
        d="M245,70h0a35.1,35.1,0,0,1-35,35H70A35.1,35.1,0,0,1,35,70h0A35.1,35.1,0,0,1,70,35H210a35.1,35.1,0,0,1,35,35"
        class="get-buttton-path"
      ></path>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.imgbox {
  height: 450px;
  overflow: hidden;
  margin-top: 800px;
  background-color: pink;
  img {
    width: 100%;
    object-fit: cover;
    transform: translate3d(0, 0, 0) scale(1.3);
  }
}
</style>
<style>
body {
  height: 4000px;
}

.activeClass {
  background-color: yellow;
}
</style>
