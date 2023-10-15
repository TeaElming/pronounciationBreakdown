import test from 'ava'
import { ConsonantS } from '../../../src/js/components/consonant-sounds/AlLConsonantSounds/ConsonantS.js'

// Test for the isSoftVowel method
test('consonantS - isSoftVowel with soft vowel', t => {
  const instance = new ConsonantS('säga')
  t.true(instance.isSoftVowel('ä')) // 'ä' is a soft vowel, expect true
})

test('consonantS - isSoftVowel with hard vowel', t => {
  const instance = new ConsonantS('sak')
  t.false(instance.isSoftVowel('a')) // 'a' is a hard vowel, expect false
})

// Test for the followsSkRule method
test('consonantS - followsSkRule with sk', t => {
  const instance = new ConsonantS('sked')
  t.true(instance.followsSkRule()) // 'sk' follows the sk rule, expect true
})

// Test for the followsStjRule method
test('consonantS - followsStjRule with stj', t => {
  const instance = new ConsonantS('stjäla')
  t.true(instance.followsStjRule()) // 'stj' follows the stj rule, expect true
})

// Test for the getSound method
test('consonantS - getSound with sk', t => {
  const instance = new ConsonantS('sked')
  t.is(instance.getSound(), 'sj') // 'sk' follows the sk rule, expect 'sj'
})

test('consonantS - get sound with sk and hard vowel', t => {
  const instance = new ConsonantS('skola')
  t.is(instance.getSound(), 's') // 'o' is a hard vowel, expect 's'
})

test('consonantS - getSound with stj', t => {
  const instance = new ConsonantS('stjäla')
  t.is(instance.getSound(), 'sj') // 'stj' follows the stj rule, expect 'sj'
})

// Test for the getPhoneticSpelling method
test('consonantS - getPhoneticSpelling with sk', t => {
  const instance = new ConsonantS('sked')
  t.is(instance.getPhoneticSpelling(), 'sjed') // 'sk' follows the sk rule, expect 'sj'
})

test('consonantS - getPhoneticSpelling with sk and hard vowel', t => {
  const instance = new ConsonantS('skola')
  t.is(instance.getPhoneticSpelling(), 'skola') // 'o' is a hard vowel, expect 's'
})

test('consonantS - getPhoneticSpelling with stj', t => {
  const instance = new ConsonantS('stjäla')
  t.is(instance.getPhoneticSpelling(), 'själa') // 'stj' follows the stj rule, expect 'sj'
})
