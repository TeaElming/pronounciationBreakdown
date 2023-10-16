import test from 'ava'
import { LongO } from '../../../src/js/components/vowel-sounds/AllVowels/LongO.js'

test('getSound should return OH', (t) => {
  const longO = new LongO()

  const result = longO.getSound()
  t.is(result, 'ooh')
})

test('getSwedishExample should return olika : OO-lee-kah ~ meaning: different (adjective)', (t) => {
  const longO = new LongO()

  const result = longO.getSwedishExample()
  t.is(result, 'olika : OO-lee-kah ~ meaning: different (adjective)')
})

test('getEnglishExample should return ghoul', (t) => {
  const longO = new LongO()

  const result = longO.getEnglishExample()
  t.is(result, 'ghoul')
})
