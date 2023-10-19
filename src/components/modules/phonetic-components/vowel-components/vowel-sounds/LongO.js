/* eslint-disable jsdoc/require-jsdoc */
import { BaseVowel } from '../base-vowel.js'

export class LongO extends BaseVowel {
  getSound () {
    return 'ooh'
  }

  getSwedishExample () {
    const SwedishSpelling = 'olika'
    const phoneticSpelling = 'OO-lee-kah'
    const translatedMeaning = 'different (adjective)'
    return `${SwedishSpelling} : ${phoneticSpelling} ~ meaning: ${translatedMeaning}`
  }

  getEnglishExample () {
    return 'ghoul'
  }
}
