import test from 'ava'
import { VowelMapper } from '../vowel-mapper.js'

// Test getVowelSound with vowel a
test('getVowelSound should return ah', (t) => {
  const vowelMapper = new VowelMapper()

  const result = vowelMapper.getVowelSound('a')
  t.is(result, 'ah')
})

// Test getVowelSound with consonant, should throw Error
test('getVowelSound should throw an error for consonant "b"', (t) => {
  const vowelMapper = new VowelMapper()
  t.throws(() => {
    vowelMapper.getVowelSound('b')
  }, { instanceOf: Error, message: 'No vowel class found for vowel b' })
})

// Test getVowelSwedishExample with vowel a
test('getVowelSwedishExample should return affär : ahff-AIR ~ meaning: shop (noun)', (t) => {
  const vowelMapper = new VowelMapper()

  const result = vowelMapper.getVowelSwedishExample('a')
  t.is(result, 'affär : ahff-AIR ~ meaning: shop (noun)')
})

// Test getVowelSwedishExample with consonant, should throw error
test('getVowelSwedishExample should throw an error for consonant "b"', (t) => {
  const vowelMapper = new VowelMapper()
  t.throws(() => {
    vowelMapper.getVowelSwedishExample('b')
  }, { instanceOf: Error, message: 'No vowel class found for vowel b' })
})

// Test getVowelEnglishExample with vowel a
test('getVowelEnglishExample should return cat', (t) => {
  const vowelMapper = new VowelMapper()

  const result = vowelMapper.getVowelEnglishExample('a')
  t.is(result, 'cat')
})

// Test getVowelEnglishExample with consonant, should throw error
test('getVowelEnglishExample should throw an error for consonant "b"', (t) => {
  const vowelMapper = new VowelMapper()
  t.throws(() => {
    vowelMapper.getVowelEnglishExample('b')
  }, { instanceOf: Error, message: 'No vowel class found for vowel b' })
})
