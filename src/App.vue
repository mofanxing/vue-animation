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
    if (bottom <= 0 || top >= wh) return
    const y = document.documentElement.scrollTop * 0.28
    imgEl.value.style.transform = `translate3d(0, -${y}px, 0) scale(1.3)`
  })
})

// const wh = window.innerHeight
//     const sectionBlock = Array.from(document.querySelectorAll('.section-item__block'))
//     window.addEventListener('scroll', function () {
//     sectionBlock.forEach(el => {
//         const { bottom, top, height } = el.getBoundingClientRect()
//         if (bottom <= 0 || top >= wh) return
//         const y = document.documentElement.scrollTop * 0.28
//         el.style.backgroundPosition = `center -${y}px`
//     })
//     })
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
</template>

<style lang="scss" scoped>
.imgbox {
  height: 450px;
  overflow: hidden;
  margin-top: 800px;
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
</style>
