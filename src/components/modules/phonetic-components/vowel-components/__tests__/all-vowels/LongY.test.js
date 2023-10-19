import test from 'ava'
import { LongY } from '../../vowel-sounds/LongY.js'

test('getSound should return EE-> EEU', (t) => {
  const longY = new LongY()

  const result = longY.getSound()
  t.is(result, 'EE-> EEU')
})

test('getSwedishExample should return yta : EE-tah ~ meaning: surface (noun)', (t) => {
  const longY = new LongY()

  const result = longY.getSwedishExample()
  t.is(result, 'yta : EE-tah ~ meaning: surface (noun)')
})

test('getEnglishExample should return Start by saying the EE sounds, and then shape your lips into an O. No English equivalent sounds available.', (t) => {
  const longY = new LongY()

  const result = longY.getEnglishExample()
  t.is(result, 'Start by saying the EE sounds, and then shape your lips into an O. No English equivalent sounds available.')
})
