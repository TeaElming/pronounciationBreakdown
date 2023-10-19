/* eslint-disable jsdoc/require-jsdoc */
import { BaseVowel } from '../base-vowel.js'

export class LongE extends BaseVowel {
  getSound () {
    return 'EAH'
  }

  getSwedishExample () {
    const SwedishSpelling = 'ek'
    const phoneticSpelling = 'ek-k'
    const translatedMeaning = 'oak (noun)'
    return `${SwedishSpelling} : ${phoneticSpelling} ~ meaning: ${translatedMeaning}`
  }

  getEnglishExample () {
    return 'ear'
  }
}
