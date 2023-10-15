/* eslint-disable jsdoc/require-jsdoc */
import { BaseConsonant } from '../Base-Consonant.js'

export class ConsonantH extends BaseConsonant {
  followsHjRule () {
    return this.word[1] === 'j'
  }

  getSound () {
    if (this.followsHjRule()) {
      return 'j'
    }
    return 'h'
  }

  getPhoneticSpelling () {
    if (this.followsHjRule()) {
      return 'j' + this.word.slice(2)
    }
    return 'h' + this.word.slice(1)
  }
}
