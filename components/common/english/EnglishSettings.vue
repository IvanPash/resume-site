<template>
  <div class="border-b border-gray-200 pb-5">
    <h3 class="font-bold text-gray-900 text-xl">Вывести предложения по:</h3>

    <div class="mt-4 grid grid-flow-col justify-between gap-8 items-start">
      <div
        class="grid grid-flow-col justify-start gap-5 opacity-50 pointer-events-none"
      >
        <div class="grid gap-2 grid-flow-col justify-start items-start">
          <input class="mt-[2px]" type="radio" name="type" id="type-level" />
          <div class="grid gap-2 grid-flow-row">
            <label
              class="text-xs font-semibold font-additional"
              for="type-level"
              >Уровням</label
            >
            <div class="grid grid-flow-col gap-2 justify-start">
              <div v-for="(item, index) in levels" :key="item.title">
                <label
                  :for="item.title + index"
                  class="btn-primary"
                  :class="{
                    'btn-disabled': item.empty,
                    'btn-checked': item.selected,
                  }"
                >
                  <span class="font-semibold text-xs font-additional">{{
                    item.title
                  }}</span>
                </label>
                <input
                  type="checkbox"
                  :id="item.title + index"
                  :value="item.title"
                  name="level"
                  class=""
                  hidden
                  @click="handleLevel(item)"
                  :checked="item.selected"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="grid gap-2 grid-flow-col justify-start items-start">
          <input class="mt-[2px]" type="radio" name="type" id="type-lessons" />
          <div class="grid gap-2 grid-flow-row">
            <label
              class="text-xs font-semibold font-additional"
              for="type-lessons"
              >Урокам А.Бебриса</label
            >
            <div class="grid grid-flow-col gap-2 justify-start">
              <button
                class="btn-primary gap-1"
                :class="{ 'btn-disabled': false }"
              >
                <BaseIcon name="english-btn-lessons" class="fill-gray-300" />
                <span class="font-semibold text-xs font-additional"
                  >выбрать уроки</span
                >
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-flow-col justify-start gap-5">
        <div class="grid gap-2 items-start">
          <label
            class="text-xs font-semibold font-additional"
            for="output-value-level"
            >Сортировка предложений</label
          >
          <div class="grid grid-flow-col gap-2 justify-start">
            <select
              name="sort"
              id="sort"
              class="btn-primary gap-1 self-end text-xs cursor-pointer"
              @change="$emit('set-setting', 'sort', $event.target.value)"
            >
              <option
                v-for="item in settings.sorting"
                :key="item.name"
                :value="item.name"
                :selected="item.name === settings.select_sort"
                class="cursor-pointer"
              >
                {{ item.title }}
              </option>
            </select>
          </div>
        </div>

        <div class="grid gap-2 grid-flow-row items-start">
          <label
            class="text-xs font-semibold font-additional"
            for="output-value-level"
            >Предложений одного уровня сложности ({{
              settings.output_by_level.current
            }})</label
          >
          <div class="grid grid-flow-col gap-2 justify-start">
            <span>{{ settings.output_by_level.min }}</span>
            <input
              type="range"
              class="w-full cursor-pointer"
              id="output-value-level"
              name="output-value-level"
              :min="settings.output_by_level.min"
              :max="settings.output_by_level.max"
              :value="settings.output_by_level.current"
              :step="settings.output_by_level.step"
              @change="
                $emit('set-setting', 'output-by-level', $event.target.value)
              "
            />
            <span>{{ settings.output_by_level.max }}</span>
          </div>
        </div>
      </div>

      <div class="grid grid-flow-col gap-3 justify-start self-end">
        <button class="w-7 flex items-center">
          <transition name="fade">
            <BaseIcon
              v-show="settings.button_reset_show"
              name="english-reset"
              class="w-full fill-gray-300 hover:fill-gray-400 transition-all cursor-pointer"
              @click="$emit('handle-reset')"
            />
          </transition>
        </button>

        <button
          class="btn-primary gap-1 self-end"
          :class="{ 'btn-disabled': false }"
        >
          <span
            class="font-semibold text-xs font-additional"
            @click="$emit('handle-shuffle')"
            >Перемешать</span
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useEnglishStore } from '@/stores/english'

export default {
  emits: ['set-setting', 'handle-shuffle'],

  setup() {
    const englishStore = useEnglishStore()
    const levels = computed(() => englishStore.getLevels)
    const settings = computed(() => englishStore.settings_current)

    return {
      levels,
      settings,
    }
  },

  methods: {
    handleLevel(item) {
      if (item.empty) return

      this.$emit('set-setting', 'level', item.title)
    },
  },
}
</script>
