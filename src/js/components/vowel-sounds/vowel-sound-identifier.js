import { WordSplitter } from "../word-splitter.js"

export class VowelSoundIdentifier {
  constructor() {
    this.allVowels = ['a', 'e', 'i', 'u', 'y', 'å', 'ä', 'ö']
    this.wordSplitter = new WordSplitter()
  }

  /**
   * Checks if the two consecutive letters following the given index are the same.
   *
   * @param {Array} wordSeparatedIntoLetters
   * @param {Number} indexNumberOfVowel this takes the index of the vowel.
   * @return {Boolean} returns true if the two letters are the same
   */
  checkDuplicateIndex(wordSeparatedIntoLetters, indexNumberOfVowel) {
    if (wordSeparatedIntoLetters[indexNumberOfVowel + 1] === wordSeparatedIntoLetters[indexNumberOfVowel + 2]) {
      return true
    }
  }
  /**
   * Checks if the two consecutive letters following the given index make the 'ck' combination.
   *
   * @param {Array} wordSeparatedIntoLetters
   * @param {Number} indexNumberOfVowel this takes the index of the vowel.
   * @return {Boolean} returns true if the two letters are the same
   */
  checkForCK(wordSeparatedIntoLetters, indexNumberOfVowel) {
    if (wordSeparatedIntoLetters[indexNumberOfVowel + 1] === 'c' && wordSeparatedIntoLetters[indexNumberOfVowel + 2] === 'k') {
      return true
    }
  }

  /**
 * Checks if the two consecutive letters following the given index make the 'ch' combination.
 *
 * @param {Array} wordSeparatedIntoLetters
 * @param {Number} indexNumberOfVowel this takes the index of the vowel.
 * @return {Boolean} returns true if the two letters are the same
 */
  checkForCH(wordSeparatedIntoLetters, indexNumberOfVowel) {
    if (wordSeparatedIntoLetters[indexNumberOfVowel + 1] === 'c' && wordSeparatedIntoLetters[indexNumberOfVowel + 2] === 'h') {
      return true
    }
  }

  /**
   * Checks if the identified letter is the last in the word.
   *
   * @param {Array} wordSeparatedIntoLetters
   * @param {Number} indexNumberOfVowel
   * @return {Boolean} returns true if the letter IS last in the word
   */
  checkLastIndex(wordSeparatedIntoLetters, indexNumberOfVowel) {
    if (!wordSeparatedIntoLetters[indexNumberOfVowel + 1]) {
      return true
    }
  }

  checkCombinedShortSoundRequirements(wordSeparatedIntoLetters, indexNumberOfVowel) {
    if (
      this.checkDuplicateIndex(wordSeparatedIntoLetters, indexNumberOfVowel) &&
      this.checkForCK(wordSeparatedIntoLetters, indexNumberOfVowel) &&
      this.checkForCH(wordSeparatedIntoLetters, indexNumberOfVowel) &&
      this.checkLastIndex(wordSeparatedIntoLetters, indexNumberOfVowel)
    ) {
      return true
    } else {
      return false
    }
  }


  /**
   * Identify each vowel sound in the word.
   * Store vowel sounds in an array.
   *
   * @param {*} word
   * @return {*}
   */
  identifyVowelSounds(word) {
    const identifiedLetters = this.wordSplitter.separateLetters(word.toLowerCase())

    let identifiedVowelSound = []

    for (let i = 0; i < identifiedLetters.length; i++) {
      if (this.allVowels.includes(identifiedLetters[i])) {
        if (!this.checkCombinedShortSoundRequirements(identifiedLetters, i)) {
          identifiedVowelSound.push(identifiedLetters[i].toUpperCase())
        } else {
          identifiedVowelSound.push(identifiedLetters[i])
        }
      }
    } return identifiedVowelSound
  }

  /**
   * Word rewritten using the identifyVowelSound method above.
   *
   * @param {String} word
   * @return {String} rewritten based on vowel sound identification.
   */
  rewriteWithIdentifiedVowelSound(word) {
    const identifiedVowelSounds = this.identifyVowelSounds(word)
    const wordSeparatedIntoLetters = this.wordSplitter.separateLetters(word.toLowerCase())

    let rewrittenWord = []

    let vowelIndex = 0 // to allow for easier loop through identifiedVowelSounds

    for (let i = 0; i < wordSeparatedIntoLetters.length; i++) {
      if (this.allVowels.includes(wordSeparatedIntoLetters[i])) {
        rewrittenWord.push(identifiedVowelSounds[vowelIndex])
        vowelIndex++ // moves us to the enxt vowel sound in the list
      } else {
        rewrittenWord.push(wordSeparatedIntoLetters[i])
      }
    }
    return rewrittenWord.join('')
  }

}