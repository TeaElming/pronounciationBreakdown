import test from 'ava'
import { ConsonantC } from '../../../src/js/components/consonant-sounds/ConsonantSounds/ConsonantC.js'

// Test for the isSoftVowel method
test('ConsonantC - isSoftVowel with soft vowel', t => {
  const instance = new ConsonantC('citron')
  t.true(instance.isSoftVowel('i')) // 'i' is a soft vowel, expect true
})

test('ConsonantC - isSoftVowel with hard vowel', t => {
  const instance = new ConsonantC('cool')
  t.false(instance.isSoftVowel('o')) // 'a' is a hard vowel, expect false
})

// Test for the followsChRule method
test('ConsonantC - followsChRule with ch', t => {
  const instance = new ConsonantC('choklad')
  t.true(instance.followsChRule()) // 'ch' follows the ch rule, expect true
})

test('ConsonantC - followsChRule without ch', t => {
  const instance = new ConsonantC('citron')
  t.false(instance.followsChRule()) // 'citron' does not follow the ch rule, expect false
})

// Test for the getSound method
test('ConsonantC - getSound with ch', t => {
  const instance = new ConsonantC('choklad')
  t.is(instance.getSound(), 'sj') // 'ch' follows the ch rule, expect 'sj'
})

// Test for the getPhoneticSpelling method
test('ConsonantC - getPhoneticSpelling with ch', t => {
  const instance = new ConsonantC('choklad')
  t.is(instance.getPhoneticSpelling(), 'sjoklad') // 'ch' follows the ch rule, expect 'sj'
})

test('ConsonantC - getPhoneticSpelling without ch', t => {
  const instance = new ConsonantC('citron')
  t.is(instance.getPhoneticSpelling(), 'sitron') // 'citron' does not follow the ch rule, expect 's'
})
