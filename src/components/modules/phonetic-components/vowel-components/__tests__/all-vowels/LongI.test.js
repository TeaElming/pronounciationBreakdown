import test from 'ava'
import { LongI } from '../../vowel-sounds/LongI.js'

test('getSound should return EE', (t) => {
  const longI = new LongI()

  const result = longI.getSound()
  t.is(result, 'EE')
})

test('getSwedishExample should return is : ees ~ meaning: ice (noun)', (t) => {
  const longI = new LongI()

  const result = longI.getSwedishExample()
  t.is(result, 'is : ees ~ meaning: ice (noun)')
})

test('getEnglishExample should return bee', (t) => {
  const longI = new LongI()

  const result = longI.getEnglishExample()
  t.is(result, 'bee')
})
