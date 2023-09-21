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
   * @memberof VowelSoundIdentifier
   */
  checkDuplicateIndex(wordSeparatedIntoLetters, indexNumberOfVowel) {
    if (wordSeparatedIntoLetters[indexNumberOfVowel + 1] === wordSeparatedIntoLetters[indexNumberOfVowel + 2]) {
      return true
    }
  }

  /**
   * Checks if the identified letter is the last in the word.
   *
   * @param {Array} wordSeparatedIntoLetters
   * @param {Number} indexNumberOfVowel
   * @return {Boolean} returns true if the letter IS last in the word
   * @memberof VowelSoundIdentifier
   */
  checkLastIndex(wordSeparatedIntoLetters, indexNumberOfVowel) {
    if (!wordSeparatedIntoLetters[indexNumberOfVowel + 1]) {
      return true
    }
  }

  /**
   * Identify each vowel sound in the word.
   * Store vowel sounds in an array.
   *
   * @param {*} word
   * @return {*}
   * @memberof VowelSoundIdentifier
   */
  identifyVowelSounds(word) {
    const identifiedLetters = this.wordSplitter.separateLetters(word.toLowerCase())

    let identifiedVowelSound = []

    for (let i = 0; i < identifiedLetters.length; i++) {
      if (this.allVowels.includes(identifiedLetters[i])) {
        if (!this.checkDuplicateIndex(identifiedLetters, i) && !this.checkLastIndex(identifiedLetters, i)) {
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
   * @return {String} rewritten based on vowel sound identification
   * @memberof VowelSoundIdentifier
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