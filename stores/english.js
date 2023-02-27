/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia'
import data from '@/mocks/english/data'

export const useEnglishStore = defineStore('englishStore', {
  state: () => {
    return {
      settings_default: {
        sentences_load: {
          // вывод предложений по мере прокрутки
          count: 50,
          page: 1,
        },
        type_output: 'levels',
        select_levels: [],
        select_lessons: [],

        select_sort: 'complexity',
        sorting: [
          { name: 'accidentally', title: 'Случайная' },
          { name: 'complexity', title: 'Увеличение сложности' },
        ],

        output_by_level: {
          min: 5,
          max: 50,
          current: 25,
          step: 1,
        },

        button_reset_show: false,
      },
      settings_current: {},

      sentences: {
        // исходный объект
        source: data,
        // все предложения в виде объектов в удобном формате
        formatted: {},
        // массив ключей formatted с которым происходит работа по сортировке и т.д.
        output_keys: [],
      },
    }
  },

  actions: {
    setShow(id) {
      const sentence = this.sentences.formatted[id]
      sentence.english.show = true
      sentence.transcript.show = true
    },

    shuffleSentences() {
      const keysArr = [...this.sentences.output_keys]

      keysArr.sort(() => Math.random() - 0.5)

      this.sentences.output_keys = [...keysArr]
    },

    // применение настроек к output_keys
    applySettings() {
      const result = Object.keys(this.sentences.formatted)

      // sort
      if (this.settings_current.select_sort === 'accidentally') {
        result.sort(() => Math.random() - 0.5)
      }

      // output_by_level
      this.settings_current.sentences_load = {
        ...this.settings_default.sentences_load,
      }

      const outputByLevel = this.settings_current.output_by_level.current
      const keysLength = result.length

      let counter = 0
      while (counter <= keysLength) {
        const key = result[counter]

        if (!!key && this.sentences.formatted[key].id_string > outputByLevel) {
          result.splice(counter, 1)
        } else counter += 1
      }

      this.sentences.output_keys = [...result]
    },

    setSetting(type, ...args) {
      switch (type) {
        case 'type':
          break
        case 'level':
          this.updateLevel(...args)
          break
        case 'output-by-level':
          this.updateOutputByLevel(...args)
          break
        case 'sort':
          this.updateSortSelected(...args)
          break
        default:
          break
      }
      this.applySettings()
      this.settings_current.button_reset_show = true
    },

    updateLevel(title) {
      const levels = this.settings_current.select_levels
      const indexOf = levels.indexOf(title)

      if (indexOf >= 0) levels.splice(indexOf, 1)
      else levels.push(title)
    },

    updateSortSelected(name) {
      const checkName = this.settings_current.sorting.find(
        (el) => el.name === name
      )
      if (checkName) this.settings_current.select_sort = name
    },

    updateOutputByLevel(value) {
      const output = this.settings_current.output_by_level
      const valueFormatter = Math.round(Number(value))
      const valueIsValid =
        valueFormatter >= output.min && valueFormatter <= output.max

      if (valueIsValid) output.current = valueFormatter
    },

    initSentences() {
      let result = {}

      Object.keys(this.sentences.source).forEach((nameLevel) => {
        const level = this.sentences.source[nameLevel]

        Object.keys(level).forEach((nameLesson) => {
          const sentencesLessonArr = this.getSentencesLesson(
            level[nameLesson],
            nameLevel,
            nameLesson
          )

          result = { ...result, ...sentencesLessonArr }
        })
      })

      this.sentences.formatted = JSON.parse(JSON.stringify(result))
      this.setDefaultSettings()
    },

    setDefaultSettings() {
      this.settings_current = JSON.parse(JSON.stringify(this.settings_default))
      this.sentences.output_keys = Object.keys(this.sentences.formatted)

      this.setPageSentences()
      this.applySettings()
    },

    setPageSentences(page = 1) {
      const sentencesLoad = this.settings_current.sentences_load
      const sentencesOutput = this.sentences.output_keys
      const maxPage = Math.ceil(sentencesOutput.length / sentencesLoad.count)

      if (page > maxPage) return

      sentencesLoad.page = page
    },
  },

  getters: {
    getSentences: (state) => {
      const sentencesLoad = state.settings_current.sentences_load
      const calcNumberSentences = sentencesLoad.page * sentencesLoad.count
      const result = state.sentences.output_keys.slice(0, calcNumberSentences)

      return result.map((key) => state.sentences.formatted[key])
    },

    getLevels: (state) => {
      const result = []
      const obj = { title: '', empty: false, selected: false }

      Object.keys(state.sentences.source).forEach((key) => {
        const empty = !Object.keys(state.sentences.source[key]).length
        const selected = state.settings_current.select_levels.includes(key)
        result.push({ ...obj, title: key, empty, selected })
      })
      return result
    },

    getSentencesLesson: () => {
      return (sentence, level, lesson) => {
        const result = {}
        const template = {
          id: null,
          id_string: null,
          level,
          lesson,
          russian: null,
          english: {
            text: null,
            show: false,
          },
          transcript: {
            text: null,
            show: false,
          },
        }

        // Split the string into an array of lines
        const lines = sentence.split('\n')

        // Loop over each line in the lines array
        lines.forEach((line) => {
          if (!line.trim().length) return

          const [idString, russian, english, transcript] = line
            .split(/\.|\//)
            .map((s) => s.trim())

          const id = Number(idString)
          const obj = JSON.parse(JSON.stringify(template))

          obj.id = obj.level + obj.lesson + id
          obj.id_string = idString
          obj.russian = russian
          obj.english.text = english
          obj.transcript.text = transcript

          result[obj.id] = JSON.parse(JSON.stringify(obj))
        })

        // Return the result array
        return result
      }
    },
  },
})
