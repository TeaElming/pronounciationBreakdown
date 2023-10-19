/* eslint-disable jsdoc/require-jsdoc */
import { BaseVowel } from '../base-vowel.js'

export class ShortO extends BaseVowel {
  getSound () {
    return 'oh'
  }

  getSwedishExample () {
    const SwedishSpelling = 'om'
    const phoneticSpelling = 'ohm'
    const translatedMeaning = 'if (conjunction)'
    return `${SwedishSpelling} : ${phoneticSpelling} ~ meaning: ${translatedMeaning}`
  }

  getEnglishExample () {
    return 'not'
  }
}
