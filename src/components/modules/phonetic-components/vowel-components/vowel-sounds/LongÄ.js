/* eslint-disable jsdoc/require-jsdoc */
import { BaseVowel } from '../base-vowel.js'

export class LongÄ extends BaseVowel {
  getSound () {
    return 'AI'
  }

  getSwedishExample () {
    const SwedishSpelling = 'äta'
    const phoneticSpelling = 'AI-ta'
    const translatedMeaning = 'eat (verb)'
    return `${SwedishSpelling} : '${phoneticSpelling}' ~ meaning: ${translatedMeaning}`
  }

  getEnglishExample () {
    return 'fair'
  }
}
