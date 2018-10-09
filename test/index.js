import path from 'path'
import fs from 'fs'
import assert from 'assert'
import {transformFileSync} from 'babel-core'

function trim(str) {
  return str.replace(/^\s+|\s+$/, '')
}

describe('This plugin makes sure that your custom elements always have a name property, even after minifying.', () => {
  const fixturesDir = path.join(__dirname, 'fixtures')
  fs.readdirSync(fixturesDir).map(caseName => {
    const isDir = fs.lstatSync(path.join(fixturesDir, caseName)).isDirectory()
    if (!isDir) return
    it(`should ${caseName.split('-').join(' ')}`, () => {
      const fixtureDir = path.join(fixturesDir, caseName)
      const actualPath = path.join(fixtureDir, 'actual.js')
      const actual = transformFileSync(actualPath).code

      const expected = fs.readFileSync(path.join(fixtureDir, 'expected.js')).toString()

      assert.equal(trim(actual), trim(expected))
    })
  })
})
