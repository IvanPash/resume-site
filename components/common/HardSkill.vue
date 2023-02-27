<template>
  <div
    class="bg-white shadow-md p-4 mb-3 grid grid-flow-row content-start gap-4 max-w-[230px]"
  >
    <div class="h-[5px] rounded-[5px] bg-slate-200 overflow-hidden">
      <div
        class="h-full bg-gradient-to-r from-indigo-500 to-green-400"
        :style="{ width: progress + '%' }"
      />
    </div>
    <div class="grid grid-flow-col gap-5">
      <img class="w-12 h-12 object-contain" :src="icon" :alt="title" />
      <div class="text-right">
        <span class="block font-light text-xs text-gray-500 mb-2 lowercase"
          >опыт работы</span
        >
        <span class="block font-semibold text-sm">{{ experience }}</span>
      </div>
    </div>
    <div v-if="tools.length">
      <span class="font-light text-xs text-gray-500 mb-2 lowercase"
        >инструменты</span
      >
      <div class="">
        <span
          v-for="(tool, index) in tools"
          :key="index + tool"
          class="text-xs font-semibold"
        >
          {{ tool.title }}
          <div
            v-if="tools.length - 1 !== index"
            class="inline-block rounded-full bg-slate-300 w-1 h-1 mx-1 align-middle"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    progress: {
      type: Number,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    tools: {
      type: Array,
      required: true,
    },
  },
}
</script>
