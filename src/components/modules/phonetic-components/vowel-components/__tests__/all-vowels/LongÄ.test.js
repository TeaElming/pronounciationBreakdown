import test from 'ava'
import { LongÄ } from '../../vowel-sounds/LongÄ.js'

test('getSound should return ÄÄ', (t) => {
  const longÄ = new LongÄ()

  const result = longÄ.getSound()
  t.is(result, 'AI')
})

test('getSwedishExample should return äta : \'AI-ta\' ~ meaning: eat (verb)', (t) => {
  const longÄ = new LongÄ()

  const result = longÄ.getSwedishExample()
  t.is(result, 'äta : \'AI-ta\' ~ meaning: eat (verb)')
})

test('getEnglishExample should return fair', (t) => {
  const longÄ = new LongÄ()

  const result = longÄ.getEnglishExample()
  t.is(result, 'fair')
})
