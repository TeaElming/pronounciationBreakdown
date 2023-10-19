/* eslint-disable jsdoc/require-jsdoc */
import { BaseVowel } from '../base-vowel.js'

export class ShortI extends BaseVowel {
  getSound () {
    return 'ih'
  }

  getSwedishExample () {
    const SwedishSpelling = 'inte'
    const phoneticSpelling = 'INN-teh'
    const translatedMeaning = 'not (adverb)'
    return `${SwedishSpelling} : ${phoneticSpelling} ~ meaning: ${translatedMeaning}`
  }

  getEnglishExample () {
    return 'did'
  }
}
