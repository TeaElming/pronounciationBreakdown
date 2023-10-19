/* eslint-disable jsdoc/require-jsdoc */
import { BaseVowel } from '../base-vowel.js'

export class ShortA extends BaseVowel {
  /* Override */
  getSound () {
    return 'ah'
  }

  /* Override */
  getSwedishExample () {
    const SwedishSpelling = 'affär'
    const phoneticSpelling = 'ahff-AIR'
    const translatedMeaning = 'shop (noun)'
    return `${SwedishSpelling} : ${phoneticSpelling} ~ meaning: ${translatedMeaning}`
  }

  /* Override */
  getEnglishExample () {
    return 'cat'
  }
}
