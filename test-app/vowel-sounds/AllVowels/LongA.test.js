import test from 'ava'
import { LongA } from '../../../src/js/components/vowel-sounds/AllVowels/LongA.js'

test('getSound should return AA', (t) => {
  const longA = new LongA()

  const result = longA.getSound()
  t.is(result, 'AA')
})

test('getSwedishExample should return apa : \'AA-pah\' ~ meaning: monkey (noun)', (t) => {
  const longA = new LongA()

  const result = longA.getSwedishExample()
  t.is(result, 'apa : \'AA-pah\' ~ meaning: monkey (noun)')
})

test('getEnglishExample should return art', (t) => {
  const longA = new LongA()

  const result = longA.getEnglishExample()
  t.is(result, 'art')
})
