/* eslint-disable jsdoc/require-jsdoc */
export class BaseVowel {
  constructor (vowel) {
    if (new.target === BaseVowel) {
      throw new TypeError('Cannot construct BaseVowel instances directly')
    }
  }

  getSound () {
    throw new TypeError('Must override method')
  }

  getSwedishExample () {
    throw new TypeError('Must override method')
  }

  getEnglishExample () {
    throw new TypeError('Must override method')
  }
}
