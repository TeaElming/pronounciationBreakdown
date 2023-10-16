import test from 'ava'
import { ShortA } from '../../../src/js/components/vowel-sounds/AllVowels/ShortA.js'

test('getSound should return ah', (t) => {
  const shortA = new ShortA()

  const result = shortA.getSound()
  t.is(result, 'ah')
})

test('getSwedishExample should return affär : ahff-AIR ~ meaning: shop (noun)', (t) => {
  const shortA = new ShortA()

  const result = shortA.getSwedishExample()
  t.is(result, 'affär : ahff-AIR ~ meaning: shop (noun)')
})

test('getEnglishExample should return cat', (t) => {
  const shortA = new ShortA()

  const result = shortA.getEnglishExample()
  t.is(result, 'cat')
})
