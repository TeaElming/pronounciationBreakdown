/* eslint-disable jsdoc/require-jsdoc */
import { BaseVowel } from '../Base-Vowel.js'

export class LongA extends BaseVowel {
  /* @Override */
  getSound () {
    return 'AA'
  }

  /* @Override */
  getSwedishExample () {
    const SwedishSpelling = 'apa'
    const phoneticSpelling = 'AA-pah'
    const translatedMeaning = 'monkey (noun)'
    return `${SwedishSpelling} : '${phoneticSpelling}' ~ meaning: ${translatedMeaning}`
  }

  /* @Override */
  getEnglishExample () {
    return 'art'
  }
}
