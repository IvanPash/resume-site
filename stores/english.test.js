import { setActivePinia, createPinia } from 'pinia'
import { describe, test, expect, beforeAll, beforeEach } from 'vitest'
import { useEnglishStore } from './english'

beforeAll(() => {
  setActivePinia(createPinia())
})

describe('initializes', () => {
  let store

  beforeEach(() => {
    store = useEnglishStore()
  })

  test('works', () => {
    expect(store.getLevels()).toBe(true)
  })
})
