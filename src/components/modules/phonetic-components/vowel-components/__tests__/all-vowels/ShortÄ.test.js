import test from 'ava'
import { ShortÄ } from '../../vowel-sounds/ShortÄ.js'

test('getSound should return eh', (t) => {
  const shortÄ = new ShortÄ()

  const result = shortÄ.getSound()
  t.is(result, 'eh')
})

test('getSwedishExample should return äpple : ehp-luh ~ meaning: apple (noun)', (t) => {
  const shortÄ = new ShortÄ()

  const result = shortÄ.getSwedishExample()
  t.is(result, 'äpple : ehp-luh ~ meaning: apple (noun)')
})

test('getEnglishExample should return bed', (t) => {
  const shortÄ = new ShortÄ()

  const result = shortÄ.getEnglishExample()
  t.is(result, 'bed')
})
