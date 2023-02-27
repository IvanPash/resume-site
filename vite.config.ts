import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['./stores/*.test.*'],
    testTimeout: 15000,
  },
})
