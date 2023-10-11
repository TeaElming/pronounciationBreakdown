/* eslint-disable jsdoc/require-jsdoc */
import { BaseVowel } from './Base-Vowel.js'

export class LongÅ extends BaseVowel {
  getSound () {
    return 'oa (oar)'
  }

  getSwedishExample () {
    const SwedishSpelling = 'år'
    const phoneticSpelling = 'oar'
    const translatedMeaning = 'year (noun)'
    return `${SwedishSpelling} : '${phoneticSpelling}' ~ meaning: ${translatedMeaning}`
  }
}
