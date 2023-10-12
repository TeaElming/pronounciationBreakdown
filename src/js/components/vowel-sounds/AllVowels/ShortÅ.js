/* eslint-disable jsdoc/require-jsdoc */
import { BaseVowel } from '../Base-Vowel.js'

export class ShortÅ extends BaseVowel {
  getSound () {
    return 'oh'
  }

  getSwedishExample () {
    const SwedishSpelling = 'ålder'
    const phoneticSpelling = 'OLL-lder'
    const translatedMeaning = 'age (noun)'
    return `${SwedishSpelling} : '${phoneticSpelling}' ~ meaning: ${translatedMeaning}`
  }

  getEnglishExample () {
    return 'not'
  }
}
