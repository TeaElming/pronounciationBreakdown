import test from 'ava'
import { ConsonantD } from '../../consonant-sounds/ConsonantD.js'

// Test for the followsDjRule method
test('ConsonantD - followsDjRule with dj', t => {
  const instance = new ConsonantD('djur')
  t.true(instance.followsDjRule()) // 'dj' follows the dj rule, expect true
})

test('ConsonantD - followsDjRule without dj', t => {
  const instance = new ConsonantD('dator')
  t.false(instance.followsDjRule()) // 'dator' does not follow the dj rule, expect false
})

// Test for the getSound method
test('ConsonantD - getSound with dj', t => {
  const instance = new ConsonantD('djur')
  t.is(instance.getSound(), 'j') // 'dj' follows the dj rule, expect 'j'
})

// Test for the getPhoneticSpelling method
test('ConsonantD - getPhoneticSpelling with dj', t => {
  const instance = new ConsonantD('djur')
  t.is(instance.getPhoneticSpelling(), 'jur') // 'dj' follows the dj rule, expect 'j'
})
