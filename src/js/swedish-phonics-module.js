import { ConsonantSoundIdentifier } from "./components/consonant-sounds/consonant-sound-identifier.js"
import { WordSplitter } from "./components/word-splitter.js"
import { VowelSoundIdentifier } from "./components/vowel-sounds/vowel-sound-identifier.js"

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
    this.vowelSoundIdentifier = new VowelSoundIdentifier()
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
  phoneticConsonantSpelling() {
    return this.consonantSoundIdentifier.rewritePhonetically(this.wordToCheck)
  }

  /**
   * Provides the vowel sounds included in a word.
   * Long vowel sounds will be capitalised, while short ones remain lower case.
   *
   * @return {Array} the identified vowelsounds are returned as an array.
   */
  returnAllVowelSounds() {
    return this.vowelSoundIdentifier.identifyVowelSounds(this.wordToCheck)
  }

  /**
   * Provides the word rewritten to capitalise vowels that have a long vowel sound.
   *
   * @return {String}
   */
  phoneticVowelSpelling() {
    return this.vowelSoundIdentifier.rewriteWithIdentifiedVowelSound(this.wordToCheck)
  }


}
