import test from 'ava'
import { LongE } from '../../../src/js/components/vowel-sounds/AllVowels/LongE.js'

test('getSound should return EAH', (t) => {
  const longE = new LongE()

  const result = longE.getSound()
  t.is(result, 'EAH')
})

test('getSwedishExample should return ek : ek-k ~ meaning: oak (noun)', (t) => {
  const longE = new LongE()

  const result = longE.getSwedishExample()
  t.is(result, 'ek : ek-k ~ meaning: oak (noun)')
})

test('getEnglishExample should return ear', (t) => {
  const longE = new LongE()

  const result = longE.getEnglishExample()
  t.is(result, 'ear')
})
