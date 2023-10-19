import test from 'ava'
import { ConsonantH } from '../../consonant-sounds/ConsonantH.js'

// Test for the hjRule method
test('consonantH - hjRule with hj', t => {
  const instance = new ConsonantH('hjord')
  t.true(instance.followsHjRule()) // 'hj' follows the hj rule, expect true
})

test('consonantH - hjRule without hj', t => {
  const instance = new ConsonantH('hall')
  t.false(instance.followsHjRule()) // 'hall' does not follow the hj rule, expect false
})

// Test for the getSound method
test('consonantH - getSound with hj', t => {
  const instance = new ConsonantH('hjord')
  t.is(instance.getSound(), 'j') // 'hj' follows the hj rule, expect 'j'
})

test('consonantH - getSound without hj', t => {
  const instance = new ConsonantH('hall')
  t.is(instance.getSound(), 'h') // 'hall' does not follow the hj rule, expect 'h'
})

// Test for the getPhoneticSpelling method
test('consonantH - getPhoneticSpelling with hj', t => {
  const instance = new ConsonantH('hjord')
  t.is(instance.getPhoneticSpelling(), 'jord') // 'hj' follows the hj rule, expect 'j'
})
