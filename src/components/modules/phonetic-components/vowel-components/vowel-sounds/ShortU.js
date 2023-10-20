/* eslint-disable jsdoc/require-jsdoc */
import { BaseVowel } from '../base-vowel.js'

export class ShortU extends BaseVowel {
  getSound () {
    return 'uh'
  }

  getSwedishExample () {
    const SwedishSpelling = 'upp'
    const phoneticSpelling = 'uhpp'
    const translatedMeaning = 'up (adverb)'
    return `${SwedishSpelling} : ${phoneticSpelling} ~ meaning: ${translatedMeaning}`
  }

  getEnglishExample () {
    return 'put'
  }
}