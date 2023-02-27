<template>
  <div class="pl-5 border-l-4 border-solid border-sky-500">
    <div class="grid grid-flow-col gap-6 items-center justify-start mb-4">
      <a
        class="shadow rounded-lg p-3 h-12 hover:shadow-md transition-all"
        :href="company.link"
        target="_blank"
      >
        <img
          class="w-full h-full object-contain"
          :src="company.img"
          :title="company.title"
        />
      </a>
      <span class="font-additional text-base font-light text-stone-400">
        {{ formattedPeriod }}
      </span>
    </div>
    <h4 class="font-additional text-xl font-semibold mb-4">
      {{ title }}
    </h4>
    <p class="text-description">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    company: {
      type: Object,
      default: () => {
        return {
          img: '',
          title: '',
          link: '',
        }
      },
    },
    period: {
      type: Object,
      default: () => {
        return { from: '', to: '' }
      },
    },
    title: {
      type: String,
      default: '',
    },
    stack: {
      type: Array,
      default: () => [],
    },
    description: {
      type: String,
      default: '',
    },
  },

  setup(props) {
    const formattedPeriod = computed(() => {
      const { from } = props.period
      const { to } = props.period

      if (!from && !to) return 'Период не указан'
      if (!!from && !to) return `${from} - по настоящее время`
      return `${from} - ${to}`
    })

    return {
      formattedPeriod,
    }
  },
}
</script>
