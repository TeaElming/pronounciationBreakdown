/* eslint-disable jsdoc/require-jsdoc */
import { WordSplitter } from '../../word-splitter.js'
import { ConsonantC } from './consonant-sounds/ConsonantC.js'
import { ConsonantD } from './consonant-sounds/ConsonantD.js'
import { ConsonantG } from './consonant-sounds/ConsonantG.js'
import { ConsonantH } from './consonant-sounds/ConsonantH.js'
import { ConsonantK } from './consonant-sounds/ConsonantK.js'
import { ConsonantL } from './consonant-sounds/ConsonantL.js'
import { ConsonantS } from './consonant-sounds/ConsonantS.js'

export class ConsonantSoundIdentifier {
  constructor () {
    this.wordSplitter = new WordSplitter()
    this.consonantClasses = {
      c: ConsonantC,
      d: ConsonantD,
      g: ConsonantG,
      h: ConsonantH,
      k: ConsonantK,
      l: ConsonantL,
      s: ConsonantS
    }
  }

  identifyConsonantSound (word) {
    const identifiedLetters = this.wordSplitter.separateLetters(word.toLowerCase())
    const ConsonantClass = this.consonantClasses[identifiedLetters[0]]

    if (ConsonantClass) {
      const instance = new ConsonantClass(word) // Instantiate the class with the word
      return instance.getSound()
    }

    return identifiedLetters[0] // Default to the letter itself if it's not mapped
  }

  rewritePhonetically (word) {
    const identifiedLetters = this.wordSplitter.separateLetters(word.toLowerCase())
    const ConsonantClass = this.consonantClasses[identifiedLetters[0]]

    if (ConsonantClass) {
      const instance = new ConsonantClass(word) // Instantiate the class with the word
      return instance.getPhoneticSpelling()
    }

    return word // Default to the word itself if it's not mapped
  }
}
