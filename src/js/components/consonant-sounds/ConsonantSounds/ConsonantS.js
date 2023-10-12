/* eslint-disable jsdoc/require-jsdoc */
import { BaseConsonant } from '../Base-Consonant.js'

export class ConsonantS extends BaseConsonant {
  isSoftVowel (letter) {
    return this.softVowels.includes(letter)
  }

  followsSkRule () {
    return this.word[1] === 'k' && (this.isSoftVowel(this.word[2]))
  }

  followsStjRule () {
    return this.word[1] === 't' && this.word[2] === 'j'
  }

  getSound () {
    if (this.followsSkRule() || this.followsStjRule()) {
      return 'sj'
    } return 's'
  }

  getPhoneticSpelling () {
    if (this.followsSkRule()) {
      return 'sj' + this.word.slice(2)
    } else if (this.followsStjRule()) {
      return 'sj' + this.word.slice(3)
    }
    return 's' + this.word.slice(1)
  }
}
