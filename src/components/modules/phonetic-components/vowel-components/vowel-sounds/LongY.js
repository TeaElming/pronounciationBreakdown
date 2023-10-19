/* eslint-disable jsdoc/require-jsdoc */
import { BaseVowel } from '../base-vowel.js'

export class LongY extends BaseVowel {
  getSound () {
    return 'EE-> EEU'
  }

  getSwedishExample () {
    const SwedishSpelling = 'yta'
    const phoneticSpelling = 'EE-tah'
    const translatedMeaning = 'surface (noun)'
    return `${SwedishSpelling} : ${phoneticSpelling} ~ meaning: ${translatedMeaning}`
  }

  getEnglishExample () {
    return 'Start by saying the EE sounds, and then shape your lips into an O. No English equivalent sounds available.'
  }
}
