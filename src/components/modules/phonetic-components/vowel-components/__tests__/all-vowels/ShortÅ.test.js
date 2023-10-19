import test from 'ava'
import { ShortÅ } from '../../vowel-sounds/ShortÅ.js'

test('getSound should return oh', (t) => {
  const shortÅ = new ShortÅ()

  const result = shortÅ.getSound()
  t.is(result, 'oh')
})

test('getSwedishExample should return ålder : OLL-dehrr ~ meaning: age (noun)', (t) => {
  const shortÅ = new ShortÅ()

  const result = shortÅ.getSwedishExample()
  t.is(result, 'ålder : OLL-dehrr ~ meaning: age (noun)')
})

test('getEnglishExample should return not', (t) => {
  const shortÅ = new ShortÅ()

  const result = shortÅ.getEnglishExample()
  t.is(result, 'not')
})
