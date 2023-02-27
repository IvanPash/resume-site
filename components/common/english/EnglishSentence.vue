<template>
  <li class="grid grid-flow-col items-center gap-1 justify-start">
    <BaseIcon name="english-settings" />
    <span class="mx-1 font-additional text-xl font-semibold"
      >{{ sentence.id_string }} - {{ sentence.level }} -
      {{ sentence.lesson }}</span
    >
    <span class="mx-1 font-additional text-xl">{{ sentence.russian }}</span>
    <span v-show="sentence.english.show" class="mx-1 font-additional text-xl">{{
      sentence.english.text
    }}</span>
    <span
      v-show="sentence.transcript.show"
      class="mx-1 font-additional text-xl"
      >{{ sentence.transcript.text }}</span
    >
    <BaseIcon
      v-show="!sentence.transcript.show"
      name="english-eye"
      class="fill-gray-200 hover:fill-gray-300 transition-all cursor-pointer"
      @click="$emit('handle-show', sentence.id)"
    />
  </li>
</template>

<script>
export default {
  emits: ['handle-show'],
  props: {
    sentence: {
      type: Object,
      required: true,
    },
  },
  setup() {},
}
</script>
