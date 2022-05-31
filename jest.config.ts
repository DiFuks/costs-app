import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'react-native',
  roots: ['<rootDir>/src'],
  testMatch: ['**/(*.)+(spec).+(ts|tsx)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
};

export default config;
