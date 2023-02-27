/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainStore', () => {
  const placesJob = [
    {
      company: {
        img: '/img/job-hawking-bros.svg',
        title: 'Hawking bros.',
        link: 'https://hawkingbros.com/',
      },
      period: {
        from: '10.10.2021',
        to: '',
      },
      title: 'Ведущий инженер программист',
      stack: ['HTML5', 'CSS3', 'JavaScript', 'JQuery', 'Vue'],
      description: `Vue: 2 проекта
          React: правка багов
          Верстка с нуля и доработки`,
    },
    {
      company: {
        img: '/img/job-elros.png',
        title: 'ЭлРос',
        link: 'https://elros.info/',
      },
      period: {
        from: '05.11.2020',
        to: '02.06.2021',
      },
      title: 'Верстальщик',
      stack: ['HTML5', 'CSS3', 'JavaScript', 'JQuery'],
      description: `Всего проектов было три: 1 на фрейморке, остальные - обычная верстка с битрой. Больше всего работал нал ЛК для операторов такси`,
    },
    {
      company: {
        img: '/img/job-hawking-bros.svg',
        title: 'Hawking bros.',
        link: 'https://hawkingbros.com/',
      },
      period: {
        from: '15.08.2019',
        to: '25.05.2020',
      },
      title: 'HTML-верстальщик',
      stack: ['HTML5', 'CSS3', 'JavaScript', 'JQuery', 'Gulp'],
      description: `Прошел стажировку в течении 3 месяцев. Прокачал навыки адаптивной, кроссбраузерной верстки и работу с JS/JQuery, Git, Gulp. 
    
        Разработка:
        - лендингов
        - многостраничных сайтов
        - интернет магазинов
        Исправление багов и разработка доп. функционала.`,
    },
  ]

  const projects = [
    {
      url: '/projects/english-training',
      title: 'English training (underway)',
      icon: 'english',
      description: {
        short:
          'Проект для изучения английского языка на основе уроков с YouTube канала "АНГЛИЙСКИЙ ПО ПЛЕЙЛИСТАМ".',
        expanded:
          'Проект для изучения английского языка на основе уроков с YouTube канала "АНГЛИЙСКИЙ ПО ПЛЕЙЛИСТАМ". Проблема курса в том, что в каждом уроке разбирается отдельная тема, а предыдущие упоминаются не так часто. Суть в том, что здесь будут собраны все предложения с целого курса ( в курсе 50 уроков 25 из которых - практика, которая состоит из +- 50 предложений ). Здесь будет возможность настраивать для себя вывод предложений с тех уроков которые нужны для повторения + настройки количества вывода предложений с одной темы и случайный порядок предложений. Будет возможность вписывать предложение на английском вручную для проверки и также именовать и сохранять указанные настройки в localStorage.',
      },
      colors: ['#9198e5', '#e66465'],
      target: null,
    },
    {
      url: 'https://palitra-system.ru/',
      title: 'Palitra System',
      icon: 'palitra-system',
      description: {
        short:
          'Создание с нуля сайта Palitra System. Особенность - объемные таблицы со сложной логикой.',
        expanded: null,
      },
      colors: ['#e66465', '#9198e5'],
      target: '_blank',
    },
  ]

  const socials = [
    {
      url: 'https://t.me/IvanUserr',
      title: 'telegram',
      icon: 'telegram',
    },
    {
      url: 'https://github.com/IvanPash',
      title: 'github',
      icon: 'github',
    },
  ]

  return {
    placesJob,
    projects,
    socials,
  }
})
