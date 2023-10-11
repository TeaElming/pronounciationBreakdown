/* eslint-disable jsdoc/require-jsdoc */
import { BaseVowel } from './Base-Vowel.js'

export class LongU extends BaseVowel {
  getSound () {
    return 'OO'
  }

  getSwedishExample () {
    const SwedishSpelling = 'hus'
    const phoneticSpelling = 'hoos'
    const translatedMeaning = 'house (noun)'
    return `${SwedishSpelling} : ''${phoneticSpelling}' ~ meaning: ${translatedMeaning}`
  }

  getEnglishExample () {
    return 'boot'
  }
}
