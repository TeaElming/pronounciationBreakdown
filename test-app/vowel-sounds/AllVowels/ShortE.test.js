import test from 'ava'
import { ShortE } from '../../../src/js/components/vowel-sounds/AllVowels/ShortE.js'

test('getSound should return eh', (t) => {
  const shortE = new ShortE()

  const result = shortE.getSound()
  t.is(result, 'eh')
})

test('getSwedishExample should return eld : ehlld ~ meaning: fire (noun)', (t) => {
  const shortE = new ShortE()

  const result = shortE.getSwedishExample()
  t.is(result, 'eld : ehlld ~ meaning: fire (noun)')
})

test('getEnglishExample should return neck', (t) => {
  const shortE = new ShortE()

  const result = shortE.getEnglishExample()
  t.is(result, 'neck')
})
