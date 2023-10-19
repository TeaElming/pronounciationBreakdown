import test from 'ava'
import { ShortO } from '../../vowel-sounds/ShortO.js'

test('getSound should return oh', (t) => {
  const shortO = new ShortO()

  const result = shortO.getSound()
  t.is(result, 'oh')
})

test('getSwedishExample should return om : ohm ~ meaning: if (conjunction)', (t) => {
  const shortO = new ShortO()

  const result = shortO.getSwedishExample()
  t.is(result, 'om : ohm ~ meaning: if (conjunction)')
})

test('getEnglishExample should return not', (t) => {
  const shortO = new ShortO()

  const result = shortO.getEnglishExample()
  t.is(result, 'not')
})
