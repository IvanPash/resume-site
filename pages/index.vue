<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="mb-36">
    <div class="relative">
      <div class="w-100% bg-[url('/img/background.jpg')] bg-no-repeat bg-cover">
        <div class="header-gradient" />
        <div class="inner-container flex z-10 relative">
          <div class="min-h-[570px] flex flex-1 justify-center flex-col">
            <h1 class="font-bold text-white text-6xl">ABOUT ME</h1>
          </div>
          <div
            class="flex flex-col gap-5 p-10 max-w-[400px] bg-white text-description"
          >
            <p>
              Первые навыки получил в HTML Academy, выполняя все подряд, после
              чего сделал простой сайт для места отдыха в своем городе.
            </p>
            <p>
              Далее попал на стажировку в Hawking Bros. и, с того момента,
              появился опыт адаптивной, кроссбраузерной и семантической вёрстки.
            </p>
            <p>
              В ЭлРос впервые начал работать с Vue, Vuex, Vuetify и WebSocket.
            </p>
            <p>
              В перерывах между местами работы изучал новые технологии (React,
              TypeScript и др.) и пробовал себя в UX/UI дизайне зарабатывая на
              этом.
            </p>
            <p>
              На текущий момент мой стек - Vue и его экосистема. В будущем
              планирую углубиться в React и, возможно, в бекенд.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="my-36">
    <div class="inner-container">
      <h2 class="text-4xl font-bold mb-12">Проекты</h2>
      <div class="grid gap-7 grid-flow-col justify-start">
        <NuxtLink
          v-for="project in projects"
          :key="project.url"
          :to="project.url"
          :target="project.target"
          class="!grid p-5 grid-flow-row gap-6 bg-white shadow-md max-w-[320px] rounded-xl hover:shadow-lg transition-all"
        >
          <div class="grid grid-flow-col gap-5 items-center justify-start">
            <div
              class="p-5 rounded-md"
              :style="{
                background: `linear-gradient(to bottom left, ${project.colors.join(
                  ','
                )} )`,
              }"
            >
              <BaseIcon :name="project.icon" fill="white" />
            </div>
            <h3 class="text-lg font-bold text-slate-700">
              {{ project.title }}
            </h3>
          </div>
          <p class="text-description">
            {{ project.description.short }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </section>

  <section class="my-36">
    <div class="grid grid-cols-2 justify-between gap-10 inner-container">
      <div>
        <h2 class="text-4xl font-bold mb-12">Места работы и обучения</h2>
        <ul class="grid grid-flow-row gap-10">
          <PlaceJob
            v-for="place in placesJob"
            :key="place.title"
            v-bind:="place"
          />
        </ul>
      </div>
      <div>
        <h2 class="text-4xl font-bold mb-12 text-right">Навыки</h2>
        <div class="grid gap-5 grid-cols-[auto_auto] justify-end">
          <HardSkill
            v-for="skill in headSkills"
            :key="skill.title"
            v-bind:="skill"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useMainStore } from '~~/stores/main'
import { useSkillsStore } from '~~/stores/skills'

export default {
  setup() {
    const mainStore = useMainStore()
    const skillsStore = useSkillsStore()

    const headSkills = skillsStore.getHeadSkills()

    return {
      placesJob: mainStore.placesJob,
      projects: mainStore.projects,
      headSkills,
    }
  },
}
</script>
