/* eslint-disable jsdoc/require-jsdoc */
import { BaseVowel } from '../base-vowel.js'

export class ShortE extends BaseVowel {
  getSound () {
    return 'eh'
  }

  getSwedishExample () {
    const SwedishSpelling = 'eld'
    const phoneticSpelling = 'ehlld'
    const translatedMeaning = 'fire (noun)'
    return `${SwedishSpelling} : ${phoneticSpelling} ~ meaning: ${translatedMeaning}`
  }

  getEnglishExample () {
    return 'neck'
  }
}
