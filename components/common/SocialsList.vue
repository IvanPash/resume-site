<template>
  <div class="flex justify-between gap-4 fill-black">
    <NuxtLink
      v-for="item in socials"
      :key="item.title"
      :to="item.url"
      target="_blank"
      class=""
    >
      <BaseIcon :name="item.icon" class="hover:fill-sky-400" />
    </NuxtLink>
  </div>
</template>

<script>
import { useMainStore } from '~~/stores/main'

export default {
  props: {},

  setup() {
    const mainStore = useMainStore()

    return {
      socials: mainStore.socials,
    }
  },
}
</script>
