/* eslint-disable jsdoc/require-jsdoc */
import { BaseConsonant } from '../Base-Consonant.js'

export class ConsonantG extends BaseConsonant {
  isSoftVowel (letter) {
    return this.softVowels.includes(letter)
  }

  followsGjRule () {
    return this.word[1] === 'j'
  }

  getSound () {
    if (this.followsGjRule() || this.isSoftVowel(this.word[1])) {
      return 'j'
    } return 'g'
  }

  getPhoneticSpelling () {
    if (this.followsGjRule()) {
      return 'j' + this.word.slice(2)
    } else if (this.isSoftVowel(this.word[1])) {
      return 'j' + this.word.slice(1)
    } return 'g' + this.word.slice(1)
  }
}
