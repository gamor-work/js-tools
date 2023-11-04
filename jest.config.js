module.exports = {
  name: 'tree-tools',
  displayName: 'tree-tools',
  roots: ['<rootDir>/'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['(__tests__/.*.mock).(js?|ts?)$'],
  verbose: true,
  coverageDirectory: '<rootDir>/coverage/',
  testPathIgnorePatterns: [ "/node_modules/", "/lib/" ]
}