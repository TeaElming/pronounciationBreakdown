/* eslint-disable jsdoc/require-jsdoc */
import { BaseConsonant } from '../Base-Consonant.js'

export class ConsonantD extends BaseConsonant {
  followsDjRule () {
    return this.word[1] === 'j'
  }

  getSound () {
    if (this.followsDjRule()) {
      return 'j'
    }
    return 'd'
  }

  getPhoneticSpelling () {
    if (this.followsDjRule()) {
      return 'j' + this.word.slice(2)
    }
    return 'd' + this.word.slice(1)
  }
}
