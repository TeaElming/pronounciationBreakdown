import test from 'ava'
import { VowelSoundIdentifier } from '../vowel-identifier.js'

// Test identifyVowelSounds with word 'båt'
test('identifyVowelSounds should return Å for word båt', (t) => {
  const vowelIdentifier = new VowelSoundIdentifier()

  const result = vowelIdentifier.identifyVowelSounds('båt')
  t.deepEqual(result, ['Å'])
})

// Test rewrite with identified vowel sound with word 'båt'
test('rewriteWithIdentifiedVowelSound should return båt with Å', (t) => {
  const vowelIdentifier = new VowelSoundIdentifier()

  const result = vowelIdentifier.rewriteWithIdentifiedVowelSound('båt')
  t.deepEqual(result, 'bÅt')
})

// Check that checkCombinedShortSoundRequirements returns true for duplicate index using ['h', 'a', 'l', 'l'] and index 1
test('checkCombinedShortSoundRequirements returns true for duplicate index', t => {
  const vowelIdentifier = new VowelSoundIdentifier()
  const result = vowelIdentifier.checkCombinedShortSoundRequirements(['h', 'a', 'l', 'l'], 1)
  t.deepEqual(result, true)
})

// Check that checkCombinedShortSoundRequirements returns true for CK rule using ['s', 'u', 'c', 'k'] and index 1
test('checkCombinedShortSoundRequirements returns true for CK rule', t => {
  const vowelIdentifier = new VowelSoundIdentifier()
  const result = vowelIdentifier.checkCombinedShortSoundRequirements(['s', 'u', 'c', 'k'], 1)
  t.deepEqual(result, true)
})

// Check that checkCombinedShortSoundRequirements returns true for CH rule using ['o', 'c', 'h'] and index 0
test('checkCombinedShortSoundRequirements returns true for CH rule', t => {
  const vowelIdentifier = new VowelSoundIdentifier()
  const result = vowelIdentifier.checkCombinedShortSoundRequirements(['o', 'c', 'h'], 0)
  t.deepEqual(result, true)
})

// Check that checkCombinedShortSoundRequirements returns true for last index using ['a', 'l', 'l', 'a'] and index 3
test('checkCombinedShortSoundRequirements returns true for last index', t => {
  const vowelIdentifier = new VowelSoundIdentifier()
  const result = vowelIdentifier.checkCombinedShortSoundRequirements(['a', 'l', 'l', 'a'], 3)
  t.deepEqual(result, true)
})

// Check that checkCombinedShortSoundRequirements returns false for no rule using ['k', 'o', 'r'] and index 1
test('checkCombinedShortSoundRequirements returns false for no rule', t => {
  const vowelIdentifier = new VowelSoundIdentifier()
  const result = vowelIdentifier.checkCombinedShortSoundRequirements(['k', 'o', 'r'], 1)
  t.deepEqual(result, false)
})

// Check that checkDuplicateIndex returns true for duplicate index using ['h', 'a', 'l', 'l'] and index 1
test('checkDuplicateIndex returns true for duplicate index', t => {
  const vowelIdentifier = new VowelSoundIdentifier()
  const result = vowelIdentifier.checkDuplicateIndex(['h', 'a', 'l', 'l'], 1)
  t.deepEqual(result, true)
})

// Check that checkDuplicateIndex returns false for no duplicate index using ['h', 'a', 'l'] and index 1
test('checkDuplicateIndex returns false for no duplicate index', t => {
  const vowelIdentifier = new VowelSoundIdentifier()
  const result = vowelIdentifier.checkDuplicateIndex(['h', 'a', 'l'], 1)
  t.deepEqual(result, false)
})

// Check that checkForCK returns true for CK rule using ['s', 'u', 'c', 'k'] and index 1
test('checkForCK returns true for CK rule', t => {
  const vowelIdentifier = new VowelSoundIdentifier()
  const result = vowelIdentifier.checkForCK(['s', 'u', 'c', 'k'], 1)
  t.deepEqual(result, true)
})

// Check that checkForCK returns false for no CK rule using ['s', 'u', 'c'] and index 1
test('checkForCK returns false for no CK rule', t => {
  const vowelIdentifier = new VowelSoundIdentifier()
  const result = vowelIdentifier.checkForCK(['s', 'u', 'c'], 1)
  t.deepEqual(result, false)
})

// Check that checkForCH returns true for CH rule using ['o', 'c', 'h'] and index 0
test('checkForCH returns true for CH rule', t => {
  const vowelIdentifier = new VowelSoundIdentifier()
  const result = vowelIdentifier.checkForCH(['o', 'c', 'h'], 0)
  t.deepEqual(result, true)
})

// Check that checkForCH returns false for no CH rule using ['o', 'c', 's'] and index 0
test('checkForCH returns false for no CH rule', t => {
  const vowelIdentifier = new VowelSoundIdentifier()
  const result = vowelIdentifier.checkForCH(['o', 'c', 's'], 0)
  t.deepEqual(result, false)
})

// Check that checkLastIndex returns true for last index using ['a', 'l', 'l', 'a'] and index 3
test('checkLastIndex returns true for last index', t => {
  const vowelIdentifier = new VowelSoundIdentifier()
  const result = vowelIdentifier.checkLastIndex(['a', 'l', 'l', 'a'], 3)
  t.deepEqual(result, true)
})

// Check that checkLastIndex returns false for not last index using ['a', 'l', 'l'] and index 0
test('checkLastIndex returns false for not last index', t => {
  const vowelIdentifier = new VowelSoundIdentifier()
  const result = vowelIdentifier.checkLastIndex(['a', 'l', 'l'], 0)
  t.is(result, false)
})
