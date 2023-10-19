import test from 'ava'
import { ShortU } from '../../vowel-sounds/ShortU.js'

test('getSound should return uh', (t) => {
  const shortU = new ShortU()

  const result = shortU.getSound()
  t.is(result, 'uh')
})

test('getSwedishExample should return upp : uhpp ~ meaning: up (adverb)', (t) => {
  const shortU = new ShortU()

  const result = shortU.getSwedishExample()
  t.is(result, 'upp : uhpp ~ meaning: up (adverb)')
})

test('getEnglishExample should return put', (t) => {
  const shortU = new ShortU()

  const result = shortU.getEnglishExample()
  t.is(result, 'put')
})
