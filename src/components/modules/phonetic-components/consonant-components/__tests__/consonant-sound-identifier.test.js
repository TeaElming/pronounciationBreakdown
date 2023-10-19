import test from 'ava'
import { ConsonantSoundIdentifier } from '../consonant-sound-identifier.js'

// Test with a word that matches a known consonant class (using 'c')
test('identifyConsonantSound - valid consonant class', (t) => {
  const identifier = new ConsonantSoundIdentifier()

  const result = identifier.identifyConsonantSound('citron')
  t.is(result, 's')
})

// Test with a word that does not match a known consonant class (using 'f')
test('identifyConsonantSound - not valid consonant class', (t) => {
  const identifier = new ConsonantSoundIdentifier()

  const result = identifier.identifyConsonantSound('fjäril')
  t.is(result, 'f')
})

// Test with a word that matches a known consonant class (using 'c')
test('rewritePhonetically - valid consonant class', (t) => {
  const identifier = new ConsonantSoundIdentifier()

  const result = identifier.rewritePhonetically('citron')
  t.is(result, 'sitron')
})

// Test with a word that does not match a known consonant class (using 'f')
test('rewritePhonetically - not valid consonant class', (t) => {
  const identifier = new ConsonantSoundIdentifier()

  const result = identifier.rewritePhonetically('fjäril')
  t.is(result, 'fjäril')
})
