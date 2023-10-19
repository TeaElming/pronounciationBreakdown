/* eslint-disable jsdoc/require-jsdoc */
import { BaseVowel } from '../base-vowel.js'

export class ShortÄ extends BaseVowel {
  getSound () {
    return 'eh'
  }

  getSwedishExample () {
    const SwedishSpelling = 'äpple'
    const phoneticSpelling = 'ehp-luh'
    const translatedMeaning = 'apple (noun)'
    return `${SwedishSpelling} : ${phoneticSpelling} ~ meaning: ${translatedMeaning}`
  }

  getEnglishExample () {
    return 'bed'
  }
}
