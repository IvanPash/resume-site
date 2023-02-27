<template>
  <!-- Header Alternative -->
  <section>
    <div
      class="relative py-5 bg-[url('/img/background.jpg')] bg-no-repeat bg-cover"
    >
      <div class="header-gradient" />
      <div class="inner-container relative">
        <h1 class="text-3xl font-bold text-white">
          English training (underway)
        </h1>
      </div>
    </div>
    <p class="mt-12 text-base text-slate-500 inner-container">
      Проект для изучения английского языка на основе уроков с YouTube канала
      "АНГЛИЙСКИЙ ПО ПЛЕЙЛИСТАМ". Проблема курса в том, что в каждом уроке
      разбирается отдельная тема, а предыдущие упоминаются не так часто. Суть в
      том, что здесь будут собраны все предложения с целого курса ( в курсе 50
      уроков 25 из которых - практика, которая состоит из +- 50 предложений ).
      Здесь будет возможность настраивать для себя вывод предложений с тех
      уроков которые нужны для повторения + настройки количества вывода
      предложений с одной темы и случайный порядок предложений. Будет
      возможность вписывать предложение на английском вручную для проверки и
      также именовать и сохранять указанные настройки в localStorage.
    </p>
  </section>
  <!-- !Header Alternative -->

  <div class="inner-container mt-16 mb-20">
    <EnglishSettings
      @handle-shuffle="shuffleSentences"
      @handle-reset="resetSettings"
      @set-setting="setSetting"
    />

    <ul class="english-words mt-12">
      <EnglishSentence
        v-for="item of sentences"
        :key="item.id"
        :sentence="item"
        @handle-show="setShow"
      />
    </ul>
  </div>
</template>

<script>
import { useEnglishStore } from '@/stores/english'
import EnglishSettings from '~~/components/common/english/EnglishSettings.vue'

export default {
  components: { EnglishSettings },
  setup() {
    const timerThrottle = null
    const englishStore = useEnglishStore()
    englishStore.initSentences()

    const sentences = computed(() => englishStore.getSentences)

    return {
      timerThrottle,
      englishStore,
      sentences,
    }
  },
  mounted() {
    this.updateEventScroll('add')
  },
  unmounted() {
    this.updateEventScroll('remove')
  },
  methods: {
    updateEventScroll(type) {
      const callback = this.positionEventHandler
      if (type === 'add') {
        window.addEventListener('scroll', callback)
        window.addEventListener('resize', callback)
      } else {
        window.removeEventListener('scroll', callback)
        window.removeEventListener('resize', callback)
      }
    },

    resetSettings() {
      this.englishStore.setDefaultSettings()
    },

    setSetting(type, ...args) {
      this.englishStore.setSetting(type, ...args)
    },

    positionEventHandler() {
      return this.throttle(this.checkPosition, 200)
    },
    setShow(id) {
      this.englishStore.setShow(id)
    },

    shuffleSentences() {
      this.englishStore.shuffleSentences()
    },

    updateLevel(title) {
      this.englishStore.updateLevel(title)
    },

    checkPosition() {
      const documentHeight = document.body.offsetHeight
      const screenHeight = window.innerHeight
      const scrolled = window.scrollY
      const threshold = documentHeight - screenHeight / 1.5
      const bottomScreenPosition = scrolled + screenHeight

      if (bottomScreenPosition >= threshold) {
        this.englishStore.setPageSentences(
          this.englishStore.settings_current.sentences_load.page + 1
        )
      }
    },

    throttle(callback, timeout) {
      if (this.timerThrottle) return

      this.timerThrottle = setTimeout(() => {
        callback()
        clearTimeout(this.timerThrottle)
        this.timerThrottle = null
      }, timeout)
    },
  },
}
</script>
