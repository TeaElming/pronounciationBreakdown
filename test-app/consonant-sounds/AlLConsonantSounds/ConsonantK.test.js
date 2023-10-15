import test from 'ava'
import { ConsonantK } from '../../../src/js/components/consonant-sounds/AlLConsonantSounds/ConsonantK.js'

// Test for the isSoftVowel method
test('consonantK - isSoftVowel with soft vowel', t => {
  const instance = new ConsonantK('känna')
  t.true(instance.isSoftVowel('ä')) // 'ä' is a soft vowel, expect true
})

test('consonantK - isSoftVowel with hard vowel', t => {
  const instance = new ConsonantK('kall')
  t.false(instance.isSoftVowel('a')) // 'a' is a hard vowel, expect false
})

// Test for the followsKjRule method
test('consonantK - followsKjRule with kj', t => {
  const instance = new ConsonantK('kjol')
  t.true(instance.followsKjRule()) // 'kj' follows the kj rule, expect true
})

// Test for the getSound method
test('consonantK - getSound with kj', t => {
  const instance = new ConsonantK('kjol')
  t.is(instance.getSound(), 'tj') // 'kj' follows the kj rule, expect 'tj'
})

test('consonantK - getSound with soft vowel', t => {
  const instance = new ConsonantK('känna')
  t.is(instance.getSound(), 'tj') // 'ä' is a soft vowel, expect 'tj'
})

test('consonantK - getSound with hard vowel', t => {
  const instance = new ConsonantK('kall')
  t.is(instance.getSound(), 'k') // 'a' is a hard vowel, expect 'k'
})

// Test for the getPhoneticSpelling method
test('consonantK - getPhoneticSpelling with kj', t => {
  const instance = new ConsonantK('kjol')
  t.is(instance.getPhoneticSpelling(), 'tjol') // 'kj' follows the kj rule, expect 'tj'
})

test('consonantK - getPhoneticSpelling with soft vowel', t => {
  const instance = new ConsonantK('känna')
  t.is(instance.getPhoneticSpelling(), 'tjänna') // 'ä' is a soft vowel, expect 'tj'
})

test('consonantK - getPhoneticSpelling with hard vowel', t => {
  const instance = new ConsonantK('kall')
  t.is(instance.getPhoneticSpelling(), 'kall') // 'a' is a hard vowel, expect 'k'
})
