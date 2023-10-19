/* eslint-disable jsdoc/require-jsdoc */
import { BaseVowel } from '../base-vowel.js'

export class ShortY extends BaseVowel {
  getSound () {
    return 'ih'
  }

  getSwedishExample () {
    const SwedishSpelling = 'yrke'
    const phoneticSpelling = 'ihrr-keh'
    const translatedMeaning = 'profession (noun)'
    return `${SwedishSpelling} : ${phoneticSpelling} ~ meaning: ${translatedMeaning}`
  }

  getEnglishExample () {
    return 'merry'
  }
}
