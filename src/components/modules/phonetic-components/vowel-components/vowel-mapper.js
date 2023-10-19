/* eslint-disable jsdoc/require-jsdoc */
import { ShortA } from './vowel-sounds/ShortA.js'
import { ShortE } from './vowel-sounds/ShortE.js'
import { ShortI } from './vowel-sounds/ShortI.js'
import { ShortO } from './vowel-sounds/ShortO.js'
import { ShortU } from './vowel-sounds/ShortU.js'
import { ShortY } from './vowel-sounds/ShortY.js'
import { ShortÅ } from './vowel-sounds/ShortÅ.js'
import { ShortÄ } from './vowel-sounds/ShortÄ.js'
import { ShortÖ } from './vowel-sounds/ShortÖ.js'

import { LongA } from './vowel-sounds/LongA.js'
import { LongE } from './vowel-sounds/LongE.js'
import { LongI } from './vowel-sounds/LongI.js'
import { LongO } from './vowel-sounds/LongO.js'
import { LongU } from './vowel-sounds/LongU.js'
import { LongY } from './vowel-sounds/LongY.js'
import { LongÅ } from './vowel-sounds/LongÅ.js'
import { LongÄ } from './vowel-sounds/LongÄ.js'
import { LongÖ } from './vowel-sounds/LongÖ.js'

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
