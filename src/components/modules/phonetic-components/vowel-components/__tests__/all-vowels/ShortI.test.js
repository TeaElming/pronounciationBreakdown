import test from 'ava'
import { ShortI } from '../../vowel-sounds/ShortI.js'

test('getSound should return ih', (t) => {
  const shortI = new ShortI()

  const result = shortI.getSound()
  t.is(result, 'ih')
})

test('getSwedishExample should return inte : INN-teh ~ meaning: not (adverb)', (t) => {
  const shortI = new ShortI()

  const result = shortI.getSwedishExample()
  t.is(result, 'inte : INN-teh ~ meaning: not (adverb)')
})

test('getEnglishExample should return did', (t) => {
  const shortI = new ShortI()

  const result = shortI.getEnglishExample()
  t.is(result, 'did')
})
