/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia'

export const useEnglishStore = defineStore('englishStore', {
  state: () => {
    return {
      settings_default: {
        sentences_load: {
          // вывод предложений по мере прокрутки
          count: 30,
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
        source: {
          A0: {
            '1-2': `
              1.	У меня есть зонт / I have an umbrella / [aɪ hæv ən ʌmˈbrelə]
        
              2.	Мне нравится / I like English / [aɪ laɪk ˈɪŋglɪʃ]
              
              3.	Ты делаешь это очень хорошо / You do it very well / [ju: du: ɪt ˈveri wel]
              
              4.	Они хотят большего / They want more / [ðeɪ wɒnt mɔ:]
              
              5.	У нас есть работа / We have a job / [wi: hæv ə ʤɒb]
              
              6.	У меня есть мечта / I have a dream / [aɪ hæv ə dri:m]
              
              7.	Я вижу супермаркет / I see a supermarket / [aɪ si: ə ˈsu:pəmɑ:kɪt]
              
              8.	Я вижу отель / I see a hotel / [aɪ si: ə həʊˈtel]
              
              9.	Мне очень нравится это / I really like it / [aɪ ˈrɪəli laɪk ɪt]
              
              10.	Мы видим университет / We see a university / [wi: si: ə ˌjuːnɪˈvɜ:sɪti]
              
              11.	Мы видим эту проблему / We see this problem / [wi: si: ðɪs ˈprɒbləm]
              
              12.	Мы видим сообщение / We see a message / [wi: si: ə ˈmesɪʤ]
              
              13.	Я работаю в этой компании / I work in this company / [aɪ wɜ:k ɪn ðɪs ˈkʌmpəni]
              
              14.	Я согласен с тобой / I agree with you / [aɪ əˈgri: wɪð ju:]
              
              15.	Я работаю в компании / I work in a company / [aɪ wɜ:k ɪn ə ˈkʌmpəni]
              
              16.	Мне нравится эта еда / I like this food / [aɪ laɪk ðɪs fu:d]
              
              17.	Мне очень нравится английский / I really like English / [aɪ ˈrɪəli laɪk ˈɪŋglɪʃ]
              
              18.	Мы видим аэропорт / We see an airport / [wi: si: ən ˈeəpɔ:t]
               
              19.	Мне очень нравится эта страна / I really like this country / [aɪ ˈrɪəli laɪk ðɪs ˈkʌntri]
              
              20.	У меня есть результат / I have a result / [aɪ hæv ə rɪˈzʌlt]
              
              21.	У меня есть работа / I have a job / [aɪ hæv ə ʤɒb]
              
              22.	У меня есть друг / I have a friend / [aɪ hæv ə frend]
              
              23.	Я очень хочу это / I really want it / [aɪ ˈrɪəli wɒnt ɪt]
              
              24.	Мне нравится это место / I like this place / [aɪ laɪk ðɪs pleɪs]
              
              25.	Я вижу автобус / I see a bus / [aɪ si: ə bʌs]
              
              26.	У них есть работа / They have a job / [ðeɪ hæv ə ʤɒb]
              
              27.	У меня есть семья / I have a family / [aɪ hæv ə ˈfæmɪli]
              
              28.	Я поддерживаю тебя / I support you / [aɪ səˈpɔ:t ju:]
              
              29.	Мы поддерживаем тебя / We support you / [wi: səˈpɔ:t ju:]
              
              30.	Я согласен / I agree / [aɪ əˈgri:]
              
              31.	У меня есть цель / I have an aim / [aɪ hæv ən eɪm]
              
              32.	У меня проблема / I have a problem / [aɪ hæv ə ˈprɒbləm]
              
              33.	У меня вопрос / I have a question / [aɪ hæv ə ˈkwesʧən]
              
              34.	У нас есть цель / We have an aim / [wi: hæv ən eɪm]
              
              35.	У них есть мечта / They have a dream / [ðeɪ hæv ə dri:m]
              
              36.	Мне очень нравится этот город / I really like this city / [aɪ ˈrɪəli laɪk ðɪs ˈsɪti]
              
              37.	Я знаю / I know / [aɪ nəʊ]
              
              38.	Я вижу поезд / I see a train / [aɪ si: ə treɪn]
              
              39.	У меня есть идея / I have an idea / [aɪ hæv ən aɪˈdɪə]
              
              40.	Они работают в компании / They work in a company / [ðeɪ wɜ:k ɪn əˈkʌmpəni]
              
              41.	У нас есть мечта / We have a dream / [w: hæv ə dri:m]
              
              42.	У вас есть талант / You have a talent / [ju: hæv ə ˈtælənt]
              
              43.	У них есть идея / They have an idea / [ðeɪ hæv ən aɪˈdɪə]
              
              44.	Мне очень нравится этот курс / I really like this course / [aɪ ˈrɪəli laɪk ðɪs kɔ:s]
              
              45.	Я вижу аэропорт / I see an airport / [aɪ si: ən ˈeəpɔ:t]
              
              46.	Они работают в этом месте / They work in this place / [ðeɪ wɜ:k ɪn ðɪs pleɪs]
              
              47.	Я вижу университет / I see a university / [aɪ si: ə ˌju:nɪˈvɜ:sɪti]
              
              48.	Я вижу сообщение / I see a message / [aɪ si: ə ˈmesɪʤ]
              
              49.	У меня есть билет / I have a ticket / [aɪ hæv ə ˈtɪkɪt]
              
              50.	Я понимаю / I understand / [aɪ ˌʌndəˈstænd]`,

            '3-4': `
              1.	Я хочу сказать тебе одну вещь / I want to tell you one thing / [aɪ wɒnt tu: tel ju: wʌn θɪŋ]
              
              2.	Я хочу сказать одну вещь / I want to say one thing / [aɪ wɒnt tu: seɪ wʌn θɪŋ]
              
              3.	Я часто хожу гулять / I often go for a walk / [paɪ ˈɒfn gəʊ fɔ: ə wɔ:k]
              
              4.	Мы ходим в университет / We go to university / [wi: gəʊ tu: ˌju:nɪˈve:sɪti]
              
              5.	Я бы хотел посетить эту страну / I'd like to visit this country / [aɪd laɪk tu: ˈvɪzɪt ðɪs ˈkʌntri]
              
              6.	Я хочу посетить новые страны и города / I want to visit new countries and cities / [aɪ wɒnt tu: ˈvɪzɪt nju: ˈkʌntrɪz ænd ˈsɪtiz]
              
              7.	Я бы хотел посетить Соединенные Штаты / I'd like to visit the United States / [aɪd laɪk tu: ˈvɪzɪt ði jʊˈnaɪtɪd steɪts]
              
              8.	Я бы хотел примерить эти джинсы / I'd like to try on these jeans / [aɪd laɪk tu: traɪ ɒn ði:z ʤi:nz]
              
              9.	Я бы хотел пойти погулять сейчас / I'd like to go for a walk now / [aɪd laɪk tu: gəʊ fɔ: ə wɔ:k naʊ]
              
              10.	Я хочу сказать одну очень важную вещь / I want to say one very important thing / [aɪ wɒnt tu: seɪ wʌn ˈveri ɪmˈpɔ:tənt θɪŋ]
              
              11.	Я хочу заказать эти билеты онлайн / I want to order these tickets online / [aɪ wɒnt tu: ˈɔ:də ði:z ˈtɪkɪts ˈɒnˌlaɪn]
              
              12.	Я бы хотел примерить эту обувь / I'd like to try on these shoes / [aɪd laɪk tu: traɪ ɒn ði:z ʃu:z]
              
              13.	Я хочу заказать эту еду онлайн / I want to order this food online / [aɪ wɒnt tu: ˈɔ:də ðɪs fu:d ˈɒnˌlaɪn]
              
              14.	Я хочу позвонить тебе сейчас / I want to call you now / [aɪ wɒnt tu: kɔ:l ju: naʊ]
              
              15.	Мне нужно сделать это сейчас / I need to do it now / [aɪ ni:d tu: du: ɪt naʊ]
              
              16.	Я хочу купить этот билет / I want to buy this ticket / [aɪ wɒnt tu: baɪ ðɪs ˈtɪkɪt]
              
              17.	Я хочу заказать это онлайн / I want to order it online / [aɪ wɒnt tu: ˈɔ:dər ɪt ˈɒnˌlaɪn]
              
              18.	Я хотел бы попить чаю / I'd like to drink tea / [aɪd laɪk tu: drɪŋk ti:]
              
              19.	Я хочу пойти в этот ресторан / I want to go to this restaurant / [aɪ wɒnt tu: gəʊ tu: ðɪs ˈrestrɒnt]
              
              20.	Я бы хотел поехать в Америку / I'd like to go to America / [aɪd laɪk tu: gəʊ tu: əˈmerɪkə]
              
              21.	Я хочу сказать тебе об одной проблеме / I want to tell you about one problem / [aɪ wɒnt tu: tel ju: əˈbaʊt wʌn ˈprɒbləm]
              
              22.	Я бы хотела примерить это платье / I’d like to try on this dress / [aɪd laɪk tu: traɪ ɒn ðɪs dres]
              
              23.	Я хотел бы выпить кофе / I'd like to drink coffee / [aɪd laɪk tu: drɪŋk ˈkɒfi]
              
              24.	Я хочу пойти погулять / I want to go for a walk / [aɪ wɒnt tu: gəʊ fɔ: ə wɔ:k]
              
              25.	Я бы хотел поехать в Соединенные Штаты в следующем году / I'd like to go to the United States next year / [aɪd laɪk tu: gəʊ tu: ði jʊˈnaɪtɪd steɪts nekst jɪə]
              
              26.	Я хочу пойти туда с тобой / I want to go there with you / [aɪ wɒnt tu: gəʊ ðeə wɪð ju:]
              
              27.	Я хочу пойти в этот магазин / I want to go to this shop / [aɪ wɒnt tu: gəʊ tu: ðɪs ʃɒp]
              
              28.	Я бы хотел посетить этот город / I'd like to visit this city / [aɪd laɪk tu: ˈvɪzɪt ðɪs ˈsɪti]
              
              29.	Я хочу купить эти билеты / I want to buy these tickets / [aɪ wɒnt tu: baɪ ði:z ˈtɪkɪts]
              
              30.	Я бы хотел примерить этот свитер / I'd like to try on this sweater / [aɪd laɪk tu: traɪ ɒn ðɪs ˈswetə]
              
              31.	Я хочу купить это / I want to buy it / [aɪ wɒnt tu: baɪ ɪt]
              
              32.	Я часто хожу туда / I often go there / [aɪ ˈɒfn gəʊ ðeə]
              
              33.	Я хочу поехать в Англию / I want to go to England / [aɪ wɒnt tu: gəʊ tu: ˈɪŋglənd]
              
              34.	Мне нужно идти домой / I need to go home / [aɪ ni:d tu: gəʊ həʊm]
              
              35.	Я хочу посетить Англию / I want to visit England / [aɪ wɒnt tu: ˈvɪzɪt ˈɪŋglənd]
              
              36.	Мне нужно идти на работу / I need to go to work / [aɪ ni:d tu: gəʊ tu: wɜ:k]
              
              37.	Я бы хотел пойти в это место / I'd like to go to that place / [aɪd laɪk tu: gəʊ tu: ðæt pleɪs]
              
              38.	Я хочу посетить Испанию / I want to visit Spain / [aɪ wɒnt tu: ˈvɪzɪt speɪn]
              
              39.	Я хочу посетить новые страны и города / I'd like to visit new countries and cities / [aɪd laɪk tu: ˈvɪzɪt nju: ˈkʌntriz ænd ˈsɪtiz]
              
              40.	Мне нужно сделать это / I need to do it / [aɪ ni:d tu: du: ɪt]
              
              41.	Я хожу на работу / I go to work / [aɪ gəʊ tu: wɜ:k]
              
              42.	Они ходят в школу / They go to school / [ðeɪ gəʊ tu: sku:l]
              
              43.	Мне нужно быть там скоро / I need to be there soon / [aɪ ni:d tu: bi: ðeə su:n]
              
              44.	Я бы хотел поговорить об этом сейчас / I'd like to talk about it now / [aɪd laɪk tu: tɔ:k əˈbaʊt ɪt naʊ]
              
              45.	Я хочу выучить английский / I want to learn English / [aɪ wɒnt tu: lɜ:n ˈɪŋglɪʃ]
              
              46.	Я бы хотел пойти в парк с тобой / I'd like to go to the park with you / [aɪd laɪk tu: gəʊ tu: ðə pɑ:k wɪð ju:]
              
              47.	Я бы хотел пойти домой / I'd like to go home / [aɪd laɪk tu: gəʊ həʊm]
              
              48.	Я хочу поехать в Соединенные Штаты / I want to go to the United States / [aɪ wɒnt tu: gəʊ tu: ði jʊˈnaɪtɪd steɪts]
              
              49.	I'd like to try on these trousers / Я бы хотел примерить эти брюки / [aɪd laɪk tu: traɪ ɒn ði:z ˈtraʊzəz]
              
              50.	I want to talk about it / Я хочу поговорить об этом / [aɪ wɒnt tu: tɔ:k əˈbaʊt ɪt]`,

            '5-6': `
              1.	Она путешествует каждое лето / She travels every summer / [ʃi: ˈtrævlz ˈevri ˈsʌmə]
        
              2.	Ей нравится эта еда / She likes this food / [ʃi: laɪks ðɪs fu:d]
        
              3.	Она живет в Соединенных Штатах / She lives in the United States / [ʃi: lɪvz ɪn ðə jʊˈnaɪtɪd steɪts]
        
              4.	У нее есть брат / She has a brother / [ʃi: hæz ə ˈbrʌðə]
        
              5.	Ему нужна твоя помощь / He needs your help / [hi: ni:dz jɔ: help]
        
              6.	Он иногда говорит мне об этом / He sometimes tells me about it / [hi: ˈsʌmtaɪmz telz mi: əˈbaʊt ɪt]
        
              7.	Она работает в компании / She works in a company / [ʃi: wɜ:ks ɪn ə ˈkʌmpəni]
        
              8.	У него есть машина / He has a car /[hi: hæz ə kɑ:]
        
              9.	У нее так много вопросов / She has so many questions / [ʃi: hæz səʊ ˈmeni ˈkwesʧən]
        
              10.	Это стоит так много денег / It costs so much money / [ɪt kɒsts səʊ mʌʧ ˈmʌni]
        
              11.	У него есть собака / He has a dog / [hi: hæz ə dɒg]
        
              12.	Он выглядит очень молодым / He looks very young / [hi: lʊks ˈveri jʌŋ]
        
              13.	Это помогает мне так сильно / It helps me so much / [ɪt helps mi: səʊ mʌʧ]
        
              14.	Ей нравится этот стиль / She likes this style / [ʃi: laɪks ðɪs staɪl]
        
              15.	Ему нужно больше денег / He needs more money / [hi: ni:dz mɔ: ˈmʌni]
        
              16.	Она иногда говорит это / She sometimes says it / [ʃi: ˈsʌmtaɪmz sez ɪt]
        
              17.	Ей нравится эта песня / She likes this song / [ʃi: laɪks ðɪs sɒŋ]
        
              18.	Ей нужен ваш совет / She needs your advice / [ʃi: ni:dz jɔ: ədˈvaɪs]
        
              19.	Она живет в этом районе / She lives in this area / [ʃi: lɪvz ɪn ðɪs ˈeərɪə]
        
              20.	Он часто путешествует / He often travels / [hi: ˈɒfn ˈtrævlz]
                  
              21.	Это стоит двадцать долларов / It costs twenty dollars / [ɪt kɒsts ˈtwenti ˈdɒləz]
        
              22.	У него есть вопрос / He has a question / [hi: hæz ə ˈkwesʧən]
        
              23.	Он делает это намного лучше / He does it much better / [hi: dʌz ɪt mʌʧ ˈbetə]
        
              24.	Это стоит двести долларов / It costs two hundred dollars / [ɪt kɒsts tu: ˈhʌndrəd ˈdɒləz]
        
              25.	Он водит машину / He drives a car / [hi: draɪvz ə kɑ:]
        
              26.	Это кажется странным / It seems strange / [ɪt si:mz streɪnʤ]
        
              27.	Она делает это очень хорошо / She does it very well / [ʃi: dʌz ɪt ˈveri wel]
        
              28.	У него слишком мало свободного времени / He has too little free time / [hi: hæz tu: ˈlɪtl fri: taɪm]
        
              29.	У нее проблема / She has a problem / [ʃi: hæz ə ˈprɒbləm]
        
              30.	Она часто говорит мне об этом / She often tells me about it / [ʃi: ˈɒfn telz mi: əˈbaʊt ɪt]
        
              31.	Выглядит очень красиво / It looks very beautiful / [ɪt lʊks ˈveri ˈbju:təfʊl]
        
              32.	Эта сумка стоит тридцать долларов / This bag costs thirty dollars / [ðɪs bæg kɒsts ˈθɜ:ti ˈdɒləz]
        
              33.	Он живет в этом районе / He lives in this area / [hi: lɪvz ɪn ðɪs ˈeərɪə]
        
              34.	Этот билет стоит сорок долларов / This ticket costs forty dollars / [ðɪs ˈtɪkɪt kɒsts ˈfɔ:ti ˈdɒləz]
        
              35.	У нее есть кошка / She has a cat / [ʃi: hæz ə kæt]
        
              36.	Он часто говорит это / He often says it / [hi: ˈɒfn sez ɪt]
        
              37. Ему нравится этот дизайн / He likes this design / [hi: laɪks ðɪs dɪˈzaɪn]
        
              38.	Ему нравится эта музыка / He likes this music / [hi: laɪks ðɪs ˈmju:zɪk]
        
              39.	Это кажется действительно странным / It seems really strange / [ɪt si:mz ˈrɪəli streɪnʤ]
        
              40.	Он живет в Лондоне / He lives in London / [hi: lɪvz ɪn ˈlʌndən]
        
              41.	Это действительно помогает мне / It really helps me / [ɪt ˈrɪəli helps mi:]
        
              42.	Ей нужно больше времени / She needs more time / [ʃi: ni:dz mɔ: taɪm]
                
              43.	Этот билет стоит триста долларов / This ticket costs three hundred dollars / [ðɪs ˈtɪkɪt kɒsts θri: ˈhʌndrəd ˈdɒləz]
        
              44.	У него есть сестра / He has a sister / [hi: hæz ə ˈsɪstə]
        
              45.	Он работает в банке / He works in a bank / [hi: wɜ:ks ɪn ə bæŋk]
        
              46.	Это стоит десять евро / It costs ten euros / [ɪt kɒsts ten ˈjʊərəʊz]
        
              47.	Этот компьютер стоит две тысячи долларов / This computer costs two thousand dollars / [ðɪs kəmˈpju:tə kɒsts tu: ˈθaʊzənd ˈdɒləz]
        
              48.	Эта модель стоит три тысячи долларов / This model costs three thousand dollars / [ðɪs ˈmɒdl kɒsts θri: ˈθaʊzənd ˈdɒləz]
        
              49.	Это стоит пятьдесят фунтов / It costs fifty pounds / [ɪt kɒsts ˈfɪfti paʊndz]
        
              50.	Ему нравится эта программа / He likes this program / [hi: laɪks ðɪs ˈprəʊgræm]`,

            '7-8': '',

            '9-10': '',

            '11-12': '',

            '13-14': '',

            '15-16': '',
          },
          A1: {},
          A2: {},
          B1: {},
          B2: {},
          C1: {},
          C2: {},
        },
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
