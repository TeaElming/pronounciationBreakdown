/* eslint-disable jsdoc/require-jsdoc */
import { BaseConsonant } from '../Base-Consonant.js'

export class ConsonantK extends BaseConsonant {
  isSoftVowel (letter) {
    return this.softVowels.includes(letter)
  }

  followsKjRule () {
    return this.word[1] === 'j'
  }

  getSound () {
    if (this.followsKjRule() || this.isSoftVowel(this.word[1])) {
      return 'tj'
    } return 'k'
  }

  getPhoneticSpelling () {
    if (this.followsKjRule()) {
      return 'tj' + this.word.slice(2)
    } else if (this.isSoftVowel(this.word[1])) {
      return 'tj' + this.word.slice(1)
    } return 'k' + this.word.slice(1)
  }
}
