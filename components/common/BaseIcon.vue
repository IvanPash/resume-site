<template>
  <component :is="icon" :class="[getClasses]" :style="{ fill: fill }" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    fill: {
      type: String,
      required: false,
      default: '',
    },
    class: {
      type: String,
      default: '',
    },
  },

  setup(props) {
    const icon = defineAsyncComponent(() =>
      import(`../../assets/svg/${props.name}.svg?component`)
    )
    const getClasses = computed(
      () => `inline-block transition-all ${props.class}`
    )

    return {
      icon,
      getClasses,
    }
  },
}
</script>
