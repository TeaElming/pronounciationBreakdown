/* eslint-disable jsdoc/require-jsdoc */
import { ConsonantMapper } from './phonetic-components/consonant-components/consonant-mapper.js'
import { WordSplitter } from './word-splitter.js'
import { VowelSoundIdentifier } from './phonetic-components/vowel-components/vowel-identifier.js'
import { VowelMapper } from './phonetic-components/vowel-components/vowel-mapper.js'

export class SwedishPhonicsChecker {
  constructor () {
    this.consonantMapper = new ConsonantMapper()
    this.vowelSoundIdentifier = new VowelSoundIdentifier()
    this.vowelMapper = new VowelMapper()
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
    return this.consonantMapper.identifyConsonantSound(wordToCheck)
  }

  phoneticConsonantSpelling (wordToCheck) {
    return this.consonantMapper.rewritePhonetically(wordToCheck)
  }

  returnAllVowelSounds (wordToCheck) {
    return this.vowelSoundIdentifier.identifyVowelSounds(wordToCheck)
  }

  phoneticVowelSpelling (wordToCheck) {
    return this.vowelSoundIdentifier.rewriteWithIdentifiedVowelSound(wordToCheck)
  }

  returnVowelSoundExplanation (vowel) {
    return this.vowelMapper.getVowelSound(vowel)
  }

  returnVowelExample (vowel) {
    return this.vowelMapper.getVowelSwedishExample(vowel)
  }

  returnVowelEnglishExample (vowel) {
    return this.vowelMapper.getVowelEnglishExample(vowel)
  }

  catchTypeError (input) {
    if (typeof input !== 'string') {
      throw new TypeError('Expected argument to be of type string')
    }
  }
}
