import test from 'ava'
import { LongÖ } from '../../../src/js/components/vowel-sounds/AllVowels/LongÖ.js'

test('getSound should return U/EA', (t) => {
  const longÖ = new LongÖ()

  const result = longÖ.getSound()
  t.is(result, 'U/EA')
})

test('getSwedishExample should return öl : uuhl ~ meaning: beer (noun)', (t) => {
  const longÖ = new LongÖ()

  const result = longÖ.getSwedishExample()
  t.is(result, 'öl : uuhl ~ meaning: beer (noun)')
})

test('getEnglishExample should return burn/earn', (t) => {
  const longÖ = new LongÖ()

  const result = longÖ.getEnglishExample()
  t.is(result, 'burn/earn')
})
