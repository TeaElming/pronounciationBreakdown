/* eslint-disable jsdoc/require-jsdoc */
import { BaseVowel } from '../base-vowel.js'

export class ShortÅ extends BaseVowel {
  getSound () {
    return 'oh'
  }

  getSwedishExample () {
    const SwedishSpelling = 'ålder'
    const phoneticSpelling = 'OLL-dehrr'
    const translatedMeaning = 'age (noun)'
    return `${SwedishSpelling} : ${phoneticSpelling} ~ meaning: ${translatedMeaning}`
  }

  getEnglishExample () {
    return 'not'
  }
}
