/* eslint-disable jsdoc/require-jsdoc */
import { ConsonantSoundIdentifier } from './phonetic-components/consonant-components/consonant-sound-identifier.js'
import { WordSplitter } from './word-splitter.js'
import { VowelSoundIdentifier } from './phonetic-components/vowel-components/vowel-identifier.js'
import { VowelMapper } from './phonetic-components/vowel-components/vowel-mapper.js'

export class SwedishPhonicsChecker {
  constructor () {
    this.consonantSoundIdentifier = new ConsonantSoundIdentifier()
    this.vowelSoundIdentifier = new VowelSoundIdentifier()
    this.vowelExplainer = new VowelMapper()
    this.wordSplitter = new WordSplitter()
  }

  returnAllWordsInString (wordToCheck) {
    if (this.wordSplitter.checkIfMultipleWords(wordToCheck)) {
      const allIdentifiedWords = this.wordSplitter.separateWords(wordToCheck)
      return allIdentifiedWords
    }
    return [wordToCheck] // to avoid returning undefined and making sure to return same type
  }

  returnInitialConsonantSound (wordToCheck) {
    return this.consonantSoundIdentifier.identifyConsonantSound(wordToCheck)
  }

  phoneticConsonantSpelling (wordToCheck) {
    return this.consonantSoundIdentifier.rewritePhonetically(wordToCheck)
  }

  returnAllVowelSounds (wordToCheck) {
    return this.vowelSoundIdentifier.identifyVowelSounds(wordToCheck)
  }

  phoneticVowelSpelling (wordToCheck) {
    return this.vowelSoundIdentifier.rewriteWithIdentifiedVowelSound(wordToCheck)
  }

  returnVowelSoundExplanation (vowel) {
    // Error handling for ensuring only one vowel is entered
    return this.vowelExplainer.getVowelSound(vowel)
  }

  returnVowelExample (vowel) {
    // Error handling for ensuring only one vowel is entered
    return this.vowelExplainer.getVowelSwedishExample(vowel)
  }

  returnVowelEnglishExample (vowel) {
    // Error handling for ensuring only one vowel is entered
    return this.vowelExplainer.getVowelEnglishExample(vowel)
  }

  catchTypeError (input) {
    if (typeof input !== 'string') {
      throw new TypeError('Expected argument to be of type string')
    }
  }
}
