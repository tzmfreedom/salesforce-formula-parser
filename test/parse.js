const assert = require('power-assert')
const parse = require('../lib/index')
const fs = require('fs')
const yaml = require('js-yaml')
const path = require('path')
const testCases = yaml.safeLoad(fs.readFileSync(path.join(__dirname, './test-case.yml'), 'utf8'))

describe('parse', () => {
  testCases.forEach((testCase) => {
    it (testCase.name, () => {
      const actual = parse(testCase.input)
      assert.deepStrictEqual(testCase.expected, actual)
    })
  })
})
