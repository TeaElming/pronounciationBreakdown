/* eslint-disable jsdoc/require-jsdoc */
import { BaseVowel } from './Base-Vowel.js'

export class LongÖ extends BaseVowel {
  getSound () {
    return 'U/EA'
  }

  getSwedishExample () {
    const SwedishSpelling = 'öl'
    const phoneticSpelling = 'uuhl'
    const translatedMeaning = 'beer (noun)'
    return `${SwedishSpelling} : '${phoneticSpelling}' ~ meaning: ${translatedMeaning}`
  }

  getEnglishExample () {
    return 'burn/earn'
  }
}
