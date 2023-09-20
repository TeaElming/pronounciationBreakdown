import { ConsonantSoundIdentifier } from "./consonant-sound-identifier.js"
import { WordSplitter } from "./word-splitter.js"

/**
 * Swedish Phonics checker which allows the user to manipulate a string.
 * Swedish spelling rules are applied but exceptions are not taken into acocunt.
 *
 * @export
 * @class SwedishPhonicsChecker
 */
export class SwedishPhonicsChecker {
  /**
   * Creates an instance of SwedishPhonicsChecker.
   * @param {String} wordToCheck this can be either several words or a singular word
   */
  constructor(wordToCheck) {
    this.wordToCheck = wordToCheck
    this.consonantSoundIdentifier = new ConsonantSoundIdentifier()
    this.wordSplitter = new WordSplitter()
  }

  /**
   * Returns all words in a string as individual array elements.
   * If only one word, that individual word is returned in an array.
   *
   * @return {Array} allIdentifiedWords that were found
   * @memberof SwedishPhonicsChecker
   */
  returnAllWordsInString() {
    if (this.wordSplitter.checkIfMultipleWords(this.wordToCheck)) {
      const allIdentifiedWords = this.wordSplitter.separateWords(this.wordToCheck)
      return allIdentifiedWords
    }
    return [this.wordToCheck] // to avoid returning undefined and making sure to return same type
  }

  /**
   * Provides the initial phonetic sound of a word.
   *
   * @return {String}
   */
  returnInitialPhonicSound() {
    return this.consonantSoundIdentifier.identifyConsonantSound(this.wordToCheck)
  }

  /**
   * Provides the phonetic spelling of a word.
   *
   * @return {String}
   */
  phoneticSpelling () {
    return this.consonantSoundIdentifier.rewritePhonetically(this.wordToCheck)
  }


}
