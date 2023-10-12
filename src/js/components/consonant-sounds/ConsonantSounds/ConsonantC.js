/* eslint-disable jsdoc/require-jsdoc */
import { BaseConsonant } from '../Base-Consonant.js'

export class ConsonantC extends BaseConsonant {
  isSoftVowel (letter) {
    return this.softVowels.includes(letter)
  }

  followsChRule () {
    return this.word[1] === 'h'
  }

  getSound () {
    if (this.followsChRule()) {
      return 'sj'
    } else if (this.isSoftVowel(this.word[1])) {
      return 's'
    }
    return 'k'
  }

  getPhoneticSpelling () {
    if (this.followsChRule()) {
      return 'sj' + this.word.slice(2)
    } else if (this.isSoftVowel(this.word[1])) {
      return 's' + this.word.slice(1)
    }
    return 'k' + this.word.slice(1)
  }
}
