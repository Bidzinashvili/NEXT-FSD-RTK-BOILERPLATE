import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^app/(.*)$': '<rootDir>/src/app/$1',
    '^shared/(.*)$': '<rootDir>/src/shared/$1',
    '^entities/(.*)$': '<rootDir>/src/entities/$1',
    '^features/(.*)$': '<rootDir>/src/features/$1',
    '^widgets/(.*)$': '<rootDir>/src/widgets/$1',
    '^processes/(.*)$': '<rootDir>/src/processes/$1',
  },
  testMatch: [
    '**/*.test.[jt]s?(x)',
    '**/*.spec.[jt]s?(x)',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/**/*.test.{js,jsx,ts,tsx}',
    '!src/**/*.spec.{js,jsx,ts,tsx}',
  ],
};

export default createJestConfig(config);
