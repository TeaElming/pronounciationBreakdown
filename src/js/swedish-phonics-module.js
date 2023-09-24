import { ConsonantSoundIdentifier } from "./components/consonant-sounds/consonant-sound-identifier.js"
import { WordSplitter } from "./components/word-splitter.js"
import { VowelSoundIdentifier } from "./components/vowel-sounds/vowel-sound-identifier.js"
import { VowelPhoneticallyExplained } from "./components/vowel-sounds/vowel-phonetically-explained.js"

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
  constructor() {
    this.consonantSoundIdentifier = new ConsonantSoundIdentifier()
    this.vowelSoundIdentifier = new VowelSoundIdentifier()
    this.vowelExplainer = new VowelPhoneticallyExplained()
    this.wordSplitter = new WordSplitter()
  }

  /**
   * Returns all words in a string as individual array elements.
   * If only one word, that individual word is returned in an array.
   *
   * @return {Array} allIdentifiedWords that were found
   * @memberof SwedishPhonicsChecker
   */
  returnAllWordsInString(wordToCheck) {
    if (this.wordSplitter.checkIfMultipleWords(wordToCheck)) {
      const allIdentifiedWords = this.wordSplitter.separateWords(wordToCheck)
      return allIdentifiedWords
    }
    return [wordToCheck] // to avoid returning undefined and making sure to return same type
  }

  /**
   * Provides the initial phonetic sound of a word.
   *
   * @return {String}
   */
  returnInitialConsonantSound(wordToCheck) {
    return this.consonantSoundIdentifier.identifyConsonantSound(wordToCheck)
  }

  /**
   * Provides the phonetic spelling of a word.
   *
   * @return {String}
   */
  phoneticConsonantSpelling(wordToCheck) {
    return this.consonantSoundIdentifier.rewritePhonetically(wordToCheck)
  }

  /**
   * Provides the vowel sounds included in a word.
   * Long vowel sounds will be capitalised, while short ones remain lower case.
   *
   * @return {Array} the identified vowelsounds are returned as an array.
   */
  returnAllVowelSounds(wordToCheck) {
    return this.vowelSoundIdentifier.identifyVowelSounds(wordToCheck)
  }

  /**
   * Provides the word rewritten to capitalise vowels that have a long vowel sound.
   *
   * @return {String}
   */
  phoneticVowelSpelling(wordToCheck) {
    return this.vowelSoundIdentifier.rewriteWithIdentifiedVowelSound(wordToCheck)
  }

  returnVowelSoundExplanation(vowel) {
    // Error handling for ensuring only one vowel is entered
    return this.vowelExplainer.returnVowelSound(vowel)

  }

  returnVowelExample(vowel) {
    // Error handling for ensuring only one vowel is entered
    return this.vowelExplainer.returnVowelExample(vowel)
  }

  returnVowelEnglishExample(vowel) {
    // Error handling for ensuring only one vowel is entered
    return this.vowelExplainer.returnVowelEnglishExample(vowel)
  }


}
