/* eslint-disable jsdoc/require-jsdoc */
import { BaseVowel } from './Base-Vowel.js'

export class ShortÄ extends BaseVowel {
  getSound () {
    return 'eh'
  }

  getSwedsihExample () {
    const SwedishSpelling = 'äpple'
    const phoneticSpelling = 'ehp-luh'
    const translatedMeaning = 'apple (noun)'
    return `${SwedishSpelling} : '${phoneticSpelling}' ~ meaning: ${translatedMeaning}`
  }

  getEnglishExample () {
    return 'bed'
  }
}
