<template>
  <footer class="bg-gray-800 py-12">
    <div class="inner-container grid grid-flow-col gap-10 justify-between">
      <NuxtLink to="/">
        <BaseIcon name="logo" fill="white" />
      </NuxtLink>

      <div class="grid grid-flow-col gap-6">
        <div class="bg-gray-600 p-4 rounded-md text-white min-w-[350px]">
          <h4 class="text-xl mb-5 font-semibold">Проекты</h4>
          <ul>
            <li v-for="project in projects" :key="project.title" class="mb-2">
              <NuxtLink :to="project.url">
                {{ project.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="bg-gray-600 p-4 rounded-md text-white min-w-[350px]">
          <h4 class="text-xl mb-5 font-semibold">Контакты</h4>
          <ul>
            <li class="mb-2">8 (960) 721 29 49</li>
            <li class="mb-2">iv.pashkov.2012@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { useMainStore } from '~~/stores/main'

export default {
  setup() {
    const mainStore = useMainStore()

    return {
      projects: mainStore.projects,
    }
  },
}
</script>
