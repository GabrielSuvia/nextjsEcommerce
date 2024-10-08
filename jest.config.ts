import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],  // Setup global
  moduleNameMapper: {
    // Mapea las rutas absolutas o los alias que tengas configurados
    '^@/components/(.*)$': '<rootDir>/components/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
};

export default createJestConfig(customJestConfig);
