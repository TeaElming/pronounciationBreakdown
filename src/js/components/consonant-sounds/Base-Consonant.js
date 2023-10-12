/* eslint-disable jsdoc/require-jsdoc */
export class BaseConsonant {
  constructor (word) {
    if (new.target === BaseConsonant) {
      throw new TypeError('Cannot construct BaseConsonant instances directly')
    }
    this.word = word.toLowerCase()
    this.softVowels = ['e', 'i', 'y', 'ä', 'ö']
  }

  getSound () {
    throw new TypeError('Must override method')
  }

  getPhoneticSpelling () {
    throw new TypeError('Must override method')
  }
}
