/* eslint-disable jsdoc/require-jsdoc */
import { BaseVowel } from '../Base-Vowel.js'

export class LongI extends BaseVowel {
  getSound () {
    return 'EE'
  }

  getSwedishExample () {
    const SwedishSpelling = 'is'
    const phoneticSpelling = 'ees'
    const translatedMeaning = 'ice (noun)'
    return `${SwedishSpelling} : ''${phoneticSpelling}' ~ meaning: ${translatedMeaning}`
  }

  getEnglishExample () {
    return 'bee'
  }
}
