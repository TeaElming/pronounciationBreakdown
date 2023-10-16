import test from 'ava'
import { SwedishPhonicsChecker } from '../src/js/Module/swedish-phonics-module.js'

// Test for returnAllWordsInString
test('returnAllWordsInString should return an array of words', (t) => {
  const swedishPhonicsChecker = new SwedishPhonicsChecker()
  const string = 'hello world'
  const result = swedishPhonicsChecker.returnAllWordsInString(string)
  t.deepEqual(result, ['hello', 'world'])
})

// Test returnInitialConsonantSound for consonants
test('returnInitialConsonantSound should return the initial consonant sound', (t) => {
  const swedishPhonicsChecker = new SwedishPhonicsChecker()
  const string = 'hello world'
  const result = swedishPhonicsChecker.returnInitialConsonantSound(string)
  t.is(result, 'h')
})

// Test returnInitialConsonantSound for sk combination
test('returnInitialConsonantSound should return the initial consonant sound sk-combination', (t) => {
  const swedishPhonicsChecker = new SwedishPhonicsChecker()
  const string = 'skära'
  const result = swedishPhonicsChecker.returnInitialConsonantSound(string)
  t.is(result, 'sj')
})

// Test phoneticConsonantSpelling for consonants
test('phoneticConsonantSpelling should return the phonetic consonant spelling', (t) => {
  const swedishPhonicsChecker = new SwedishPhonicsChecker()
  const instance = 'känna'
  const result = swedishPhonicsChecker.phoneticConsonantSpelling(instance)
  t.is(result, 'tjänna')
})

// Test returnAllVowelSounds for vowels
test('returnAllVowelSounds should return all vowel sounds', (t) => {
  const swedishPhonicsChecker = new SwedishPhonicsChecker()
  const string = 'leka'
  const result = swedishPhonicsChecker.returnAllVowelSounds(string)
  t.deepEqual(result, ['E', 'a'])
})

// Test phoneticVowelSpelling for vowels
test('phoneticVowelSpelling should return the phonetic vowel spelling', (t) => {
  const swedishPhonicsChecker = new SwedishPhonicsChecker()
  const instance = 'leka'
  const result = swedishPhonicsChecker.phoneticVowelSpelling(instance)
  t.is(result, 'lEka')
})

// Test returnVowelSoundExplanation for 'E
test('returnVowelSoundExplanation should return the vowel sound explanation', (t) => {
  const swedishPhonicsChecker = new SwedishPhonicsChecker()
  const instance = 'E'
  const result = swedishPhonicsChecker.returnVowelSoundExplanation(instance)
  t.is(result, 'EAH')
})

// Test returnVowelExample for 'E'
test('returnVowelExample should return the vowel example', (t) => {
  const swedishPhonicsChecker = new SwedishPhonicsChecker()
  const instance = 'E'
  const result = swedishPhonicsChecker.returnVowelExample(instance)
  t.is(result, 'ek : ek-k ~ meaning: oak (noun)')
})

// Test returnVowelEnglishExample for 'E'
test('returnVowelEnglishExample should return the vowel english example', (t) => {
  const swedishPhonicsChecker = new SwedishPhonicsChecker()
  const instance = 'E'
  const result = swedishPhonicsChecker.returnVowelEnglishExample(instance)
  t.is(result, 'ear')
})

// Test catchTypeError for number
test('catchTypeError should throw TypeError for number', (t) => {
  const swedishPhonicsChecker = new SwedishPhonicsChecker()
  const instance = 1
  t.throws(() => {
    swedishPhonicsChecker.catchTypeError(instance)
  }, { instanceOf: TypeError, message: 'Expected argument to be of type string' })
})

// Test catchTypeError for array
test('catchTypeError should throw TypeError for array', (t) => {
  const swedishPhonicsChecker = new SwedishPhonicsChecker()
  const instance = []
  t.throws(() => {
    swedishPhonicsChecker.catchTypeError(instance)
  }, { instanceOf: TypeError, message: 'Expected argument to be of type string' })
})
