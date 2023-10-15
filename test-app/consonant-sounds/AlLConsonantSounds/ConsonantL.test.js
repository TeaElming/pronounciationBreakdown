import test from 'ava'
import { ConsonantL } from '../../../src/js/components/consonant-sounds/AlLConsonantSounds/ConsonantL.js'

// Test for the followsLjRule method
test('consonantL - followsLjRule with lj', t => {
  const instance = new ConsonantL('ljuga')
  t.true(instance.followsLjRule()) // 'lj' follows the lj rule, expect true
})

// Test for the getSound method
test('consonantL - getSound with lj', t => {
  const instance = new ConsonantL('ljuga')
  t.is(instance.getSound(), 'j') // 'lj' follows the lj rule, expect 'j'
})

test('consonantL - getSound with non-lj', t => {
  const instance = new ConsonantL('lång')
  t.is(instance.getSound(), 'l')
})

// Test for the getPhoneticSpelling method
test('consonantL - getPhoneticSpelling with lj', t => {
  const instance = new ConsonantL('ljuga')
  t.is(instance.getPhoneticSpelling(), 'juga') // 'lj' follows the lj rule, expect 'j'
})

test('consonantL - getPhoneticSpelling with non-lj', t => {
  const instance = new ConsonantL('lång')
  t.is(instance.getPhoneticSpelling(), 'lång')
})
