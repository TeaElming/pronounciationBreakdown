import test from 'ava'
import { LongÅ } from '../../../src/js/components/vowel-sounds/AllVowels/LongÅ.js'

test('getSound should return oa (oar) ', (t) => {
  const longÅ = new LongÅ()

  const result = longÅ.getSound()
  t.is(result, 'oa (oar)')
})

test('getSwedishExample should return år : \'oar\' ~ meaning: year (noun)', (t) => {
  const longÅ = new LongÅ()

  const result = longÅ.getSwedishExample()
  t.is(result, 'år : \'oar\' ~ meaning: year (noun)')
})

test('getEnglishExample should return board', (t) => {
  const longÅ = new LongÅ()

  const result = longÅ.getEnglishExample()
  t.is(result, 'board')
})
