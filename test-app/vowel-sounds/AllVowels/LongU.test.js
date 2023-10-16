import test from 'ava'
import { LongU } from '../../../src/js/components/vowel-sounds/AllVowels/LongU.js'

test('getSound should return OO', (t) => {
  const longU = new LongU()

  const result = longU.getSound()
  t.is(result, 'OO')
})

test('getSwedishExample should return hus : hoos ~ meaning: house (noun)', (t) => {
  const longU = new LongU()

  const result = longU.getSwedishExample()
  t.is(result, 'hus : hoos ~ meaning: house (noun)')
})

test('getEnglishExample should return boot', (t) => {
  const longU = new LongU()

  const result = longU.getEnglishExample()
  t.is(result, 'boot')
})
