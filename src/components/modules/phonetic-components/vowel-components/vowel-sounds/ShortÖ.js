/* eslint-disable jsdoc/require-jsdoc */
import { BaseVowel } from '../base-vowel.js'

export class ShortÖ extends BaseVowel {
  getSound () {
    return 'u'
  }

  getSwedishExample () {
    const SwedishSpelling = 'öppna'
    const phoneticSpelling = 'UHPP-nah'
    const translatedMeaning = 'open (verb)'
    return `${SwedishSpelling} : ${phoneticSpelling} ~ meaning: ${translatedMeaning}`
  }

  getEnglishExample () {
    return 'ugly'
  }
}
