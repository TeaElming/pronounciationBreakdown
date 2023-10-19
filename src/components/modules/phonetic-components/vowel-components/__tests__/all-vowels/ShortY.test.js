import test from 'ava'
import { ShortY } from '../../vowel-sounds/ShortY.js'

test('getSound should return ih', (t) => {
  const shortY = new ShortY()

  const result = shortY.getSound()
  t.is(result, 'ih')
})

test('getSwedishExample should return yrke : ihrr-keh ~ meaning: profession (noun)', (t) => {
  const shortY = new ShortY()

  const result = shortY.getSwedishExample()
  t.is(result, 'yrke : ihrr-keh ~ meaning: profession (noun)')
})

test('getEnglishExample should return merry', (t) => {
  const shortY = new ShortY()

  const result = shortY.getEnglishExample()
  t.is(result, 'merry')
})
