import test from 'ava'
import { ShortÖ } from '../../vowel-sounds/ShortÖ.js'

test('getSound should return u', (t) => {
  const shortÖ = new ShortÖ()

  const result = shortÖ.getSound()
  t.is(result, 'u')
})

test('getSwedishExample should return öppna : UHPP-nah ~ meaning: open (verb)', (t) => {
  const shortÖ = new ShortÖ()

  const result = shortÖ.getSwedishExample()
  t.is(result, 'öppna : UHPP-nah ~ meaning: open (verb)')
})

test('getEnglishExample should return ugly', (t) => {
  const shortÖ = new ShortÖ()

  const result = shortÖ.getEnglishExample()
  t.is(result, 'ugly')
})
