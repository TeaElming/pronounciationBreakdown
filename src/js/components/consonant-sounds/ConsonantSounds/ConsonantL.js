/* eslint-disable jsdoc/require-jsdoc */
import { BaseConsonant } from '../Base-Consonant.js'

export class ConsonantL extends BaseConsonant {
  followsDjRule () {
    return this.word[1] === 'j'
  }

  getSound () {
    if (this.followsDjRule()) {
      return 'j'
    }
    return 'l'
  }

  getPhoneticSpelling () {
    if (this.followsDjRule()) {
      return 'j' + this.word.slice(2)
    }
    return 'l' + this.word.slice(1)
  }
}
