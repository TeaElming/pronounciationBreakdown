/* eslint-disable jsdoc/require-jsdoc */
import { BaseVowel } from '../base-vowel.js'

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

  /* @Override */
  getEnglishExample () {
    return 'board'
  }
}
