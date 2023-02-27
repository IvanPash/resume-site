/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia'

export const useSkillsStore = defineStore('skillsStore', () => {
  const fullExperience = '2 года 11 месяцев'

  function Skill(id, type, title, progress, experience, tools) {
    this.id = id
    this.type = type
    this.title = title
    this.progress = progress || 20
    this.experience = experience || 'Не указано'
    this.icon = `/img/skill-${id}.svg`
    this.tools = tools || []
  }

  const skills = {
    html: new Skill('html', 'head', 'HTML', 70, fullExperience, ['pug', 'bem']),
    pug: new Skill('pug', 'tool', 'Pug', 70, fullExperience),
    bem: new Skill('pug', 'tool', 'Методология БЭМ', 70, fullExperience),
    vue: new Skill('vue', 'head', 'Vue', 60, '2 года', [
      'nuxt-3',
      'vuex',
      'vue-router',
      'vuetify',
      'pinia',
    ]),
    'nuxt-3': new Skill('nuxt-3', 'tool', 'Nuxt 3', 70, fullExperience),
    vuex: new Skill('vuex', 'tool', 'Vuex', 70, fullExperience),
    'vue-router': new Skill(
      'vue-router',
      'tool',
      'Vue Router',
      70,
      fullExperience
    ),
    vuetify: new Skill('vuetify', 'tool', 'Vuetify', 50, '6 месяцев'),
    pinia: new Skill('pinia', 'tool', 'Pinia', 100, '2 года'),

    js: new Skill('js', 'head', 'JavaScript', 65, fullExperience, [
      'es5-es9',
      'jquery',
      'ts',
      'websocket',
      'rest-api',
      'ssr',
    ]),
    'es5-es9': new Skill('id', 'tool', 'ES5-ES9', 100, fullExperience),
    jquery: new Skill('jquery', 'tool', 'JQuery', 100, fullExperience),
    ts: new Skill('ts', 'tool', 'TypeScript', 100, fullExperience),
    websocket: new Skill('websocket', 'tool', 'WebSocket', 100, fullExperience),
    'rest-api': new Skill('rest-api', 'tool', 'REST API', 100, fullExperience),
    ssr: new Skill('ssr', 'tool', 'SSR', 100, fullExperience),

    css: new Skill('css', 'head', 'CSS', 85, fullExperience),
    scss: new Skill('scss', 'tool', 'SCSS', 85, fullExperience),
    less: new Skill('less', 'tool', 'Less', 85, fullExperience),
    tailwind: new Skill('tailwind', 'tool', 'Tailwind', 84, fullExperience),
    pixelperfect: new Skill(
      'pixelperfect',
      'tool',
      'PixelPerfect',
      95,
      fullExperience
    ),
  }

  function getHeadSkills() {
    const array = []
    Object.keys(skills).forEach((key) => {
      if (skills[key].type === 'head') {
        array.push(skills[key])
      }
    })
    return array
  }

  ;(function setTools() {
    Object.keys(skills).forEach((key) => {
      const { tools } = skills[key]
      if (tools.length) {
        tools.forEach((el, id) => {
          tools[id] = skills[el] ? skills[el] : el
        })
      }
    })
  })()

  return {
    skills,
    getHeadSkills,
  }
})
