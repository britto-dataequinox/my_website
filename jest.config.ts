import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  setupFiles: ['<rootDir>/.jest/jest.testenv.js'],
}

export default createJestConfig(config)