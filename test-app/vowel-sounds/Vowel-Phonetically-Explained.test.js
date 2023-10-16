import test from 'ava'
import { VowelPhoneticallyExplained } from '../../src/js/components/vowel-sounds/Vowel-Phonetically-Explained.js'

// Test getVowelSound with vowel a
test('getVowelSound should return ah', (t) => {
  const vowelPhoneticallyExplained = new VowelPhoneticallyExplained()

  const result = vowelPhoneticallyExplained.getVowelSound('a')
  t.is(result, 'ah')
})

// Test getVowelSound with consonant, should throw Error
test('getVowelSound should throw an error for consonant "b"', (t) => {
  const vowelPhoneticallyExplained = new VowelPhoneticallyExplained()
  t.throws(() => {
    vowelPhoneticallyExplained.getVowelSound('b')
  }, { instanceOf: Error, message: 'No vowel class found for vowel b' })
})

// Test getVowelSwedishExample with vowel a
test('getVowelSwedishExample should return affär : ahff-AIR ~ meaning: shop (noun)', (t) => {
  const vowelPhoneticallyExplained = new VowelPhoneticallyExplained()

  const result = vowelPhoneticallyExplained.getVowelSwedishExample('a')
  t.is(result, 'affär : ahff-AIR ~ meaning: shop (noun)')
})

// Test getVowelSwedishExample with consonant, should throw error
test('getVowelSwedishExample should throw an error for consonant "b"', (t) => {
  const vowelPhoneticallyExplained = new VowelPhoneticallyExplained()
  t.throws(() => {
    vowelPhoneticallyExplained.getVowelSwedishExample('b')
  }, { instanceOf: Error, message: 'No vowel class found for vowel b' })
})

// Test getVowelEnglishExample with vowel a
test('getVowelEnglishExample should return cat', (t) => {
  const vowelPhoneticallyExplained = new VowelPhoneticallyExplained()

  const result = vowelPhoneticallyExplained.getVowelEnglishExample('a')
  t.is(result, 'cat')
})

// Test getVowelEnglishExample with consonant, should throw error
test('getVowelEnglishExample should throw an error for consonant "b"', (t) => {
  const vowelPhoneticallyExplained = new VowelPhoneticallyExplained()
  t.throws(() => {
    vowelPhoneticallyExplained.getVowelEnglishExample('b')
  }, { instanceOf: Error, message: 'No vowel class found for vowel b' })
})
