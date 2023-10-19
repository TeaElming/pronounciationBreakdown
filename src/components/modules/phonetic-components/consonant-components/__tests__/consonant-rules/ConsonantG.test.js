import test from 'ava'
import { ConsonantG } from '../../consonant-sounds/ConsonantG.js'

// Test for the isSoftVowel method
test('consonantG - isSoftVowel with soft vowel', t => {
  const instance = new ConsonantG('get')
  t.true(instance.isSoftVowel('e')) // 'i' is a soft vowel, expect true
})

test('consonantG - isSoftVowel with hard vowel', t => {
  const instance = new ConsonantG('galen')
  t.false(instance.isSoftVowel('a')) // 'a' is a hard vowel, expect false
})

// test for the followsGjRule method
test('consonantG - followsGjRule with gj', t => {
  const instance = new ConsonantG('gjord')
  t.true(instance.followsGjRule()) // 'gj' follows the gj rule, expect true
})

test('consonantG - followsGjRule without gj', t => {
  const instance = new ConsonantG('galen')
  t.false(instance.followsGjRule()) // 'galen' does not follow the gj rule, expect false
}
)

// Test for the getSound method
test('consonantG - getSound with gj', t => {
  const instance = new ConsonantG('gjord')
  t.is(instance.getSound(), 'j') // 'gj' follows the gj rule, expect 'j'
})

test('consonantG - getSound with soft vowel', t => {
  const instance = new ConsonantG('get')
  t.is(instance.getSound(), 'j') // 'e' is a soft vowel, expect 'j'
})

test('consonantG - getSound with hard vowel', t => {
  const instance = new ConsonantG('galen')
  t.is(instance.getSound(), 'g') // 'a' is a hard vowel, expect 'g'
})

// Test for the getPhoneticSpelling method
test('consonantG - getPhoneticSpelling with gj', t => {
  const instance = new ConsonantG('gjord')
  t.is(instance.getPhoneticSpelling(), 'jord') // 'gj' follows the gj rule, expect 'j'
})
