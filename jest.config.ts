import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testTimeout: 10_000,
  moduleNameMapper: {
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '\\.(jpeg)$': '<rootDir>/__mocks__/staticAssetMock.ts',
  },
};

export default config;
