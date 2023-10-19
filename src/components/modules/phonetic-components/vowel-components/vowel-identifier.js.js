/* eslint-disable jsdoc/require-jsdoc */
import { WordSplitter } from '../../word-splitter.js'

export class VowelSoundIdentifier {
  constructor () {
    this.allVowels = ['a', 'e', 'i', 'o', 'u', 'y', 'å', 'ä', 'ö']
    this.wordSplitter = new WordSplitter()
  }

  checkDuplicateIndex (wordSeparatedIntoLetters, indexNumberOfVowel) {
    if (wordSeparatedIntoLetters[indexNumberOfVowel + 1] === wordSeparatedIntoLetters[indexNumberOfVowel + 2]) {
      return true
    }
  }

  checkForCK (wordSeparatedIntoLetters, indexNumberOfVowel) {
    if (wordSeparatedIntoLetters[indexNumberOfVowel + 1] === 'c' && wordSeparatedIntoLetters[indexNumberOfVowel + 2] === 'k') {
      return true
    }
  }

  checkForCH (wordSeparatedIntoLetters, indexNumberOfVowel) {
    if (wordSeparatedIntoLetters[indexNumberOfVowel + 1] === 'c' && wordSeparatedIntoLetters[indexNumberOfVowel + 2] === 'h') {
      return true
    }
  }

  checkLastIndex (wordSeparatedIntoLetters, indexNumberOfVowel) {
    if (!wordSeparatedIntoLetters[indexNumberOfVowel + 1]) {
      return true
    }
  }

  checkCombinedShortSoundRequirements (wordSeparatedIntoLetters, indexNumberOfVowel) {
    if (
      this.checkDuplicateIndex(wordSeparatedIntoLetters, indexNumberOfVowel) ||
      this.checkForCK(wordSeparatedIntoLetters, indexNumberOfVowel) ||
      this.checkForCH(wordSeparatedIntoLetters, indexNumberOfVowel) ||
      this.checkLastIndex(wordSeparatedIntoLetters, indexNumberOfVowel)
    ) {
      return true
    } else {
      return false
    }
  }

  identifyVowelSounds (word) {
    const identifiedLetters = this.wordSplitter.separateLetters(word.toLowerCase())

    const identifiedVowelSound = []

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

  rewriteWithIdentifiedVowelSound (word) {
    const identifiedVowelSounds = this.identifyVowelSounds(word)
    const wordSeparatedIntoLetters = this.wordSplitter.separateLetters(word.toLowerCase())

    const rewrittenWord = []

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
