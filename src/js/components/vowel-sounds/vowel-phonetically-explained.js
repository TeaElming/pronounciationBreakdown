/* eslint-disable jsdoc/require-jsdoc */
import { ShortA } from './AllVowels/ShortA.js'
import { ShortE } from './AllVowels/ShortE.js'
import { ShortI } from './AllVowels/ShortI.js'
import { ShortO } from './AllVowels/ShortO.js'
import { ShortU } from './AllVowels/ShortU.js'
import { ShortY } from './AllVowels/ShortY.js'
import { ShortÅ } from './AllVowels/ShortÅ.js'
import { ShortÄ } from './AllVowels/ShortÄ.js'
import { ShortÖ } from './AllVowels/ShortÖ.js'

import { LongA } from './AllVowels/LongA.js'
import { LongE } from './AllVowels/LongE.js'
import { LongI } from './AllVowels/LongI.js'
import { LongO } from './AllVowels/LongO.js'
import { LongU } from './AllVowels/LongU.js'
import { LongY } from './AllVowels/LongY.js'
import { LongÅ } from './AllVowels/LongÅ.js'
import { LongÄ } from './AllVowels/LongÄ.js'
import { LongÖ } from './AllVowels/LongÖ.js'

export class VowelPhoneticallyExplained {
  constructor () {
    this.vowelMapping = {
      a: ShortA,
      e: ShortE,
      i: ShortI,
      o: ShortO,
      u: ShortU,
      y: ShortY,
      å: ShortÅ,
      ä: ShortÄ,
      ö: ShortÖ,
      A: LongA,
      E: LongE,
      I: LongI,
      O: LongO,
      U: LongU,
      Y: LongY,
      Å: LongÅ,
      Ä: LongÄ,
      Ö: LongÖ
    }
  }

  getVowelSound (vowel) {
    const RequiredVowelClass = this.vowelMapping[vowel]
    if (!RequiredVowelClass) {
      throw new Error(`No vowel class found for vowel ${vowel}`)
    }
    const vowelInstance = new RequiredVowelClass()
    return vowelInstance.getSound()
  }

  getVowelSwedishExample (vowel) {
    const RequiredVowelClass = this.vowelMapping[vowel]
    if (!RequiredVowelClass) {
      throw new Error(`No vowel class found for vowel ${vowel}`)
    }
    const vowelInstance = new RequiredVowelClass()
    return vowelInstance.getSwedishExample()
  }

  getVowelEnglishExample (vowel) {
    const RequiredVowelClass = this.vowelMapping[vowel]
    if (!RequiredVowelClass) {
      throw new Error(`No vowel class found for vowel ${vowel}`)
    }
    const vowelInstance = new RequiredVowelClass()
    return vowelInstance.getEnglishExample()
  }
}
