import { WordSplitter } from "./word-splitter.js"

export class ConsonantSoundIdentifier {
  constructor() {
    this.hardVowels = ['a', 'o', 'u', 'å']
    this.softVowels = ['e', 'i', 'y', 'ä', 'ö'] // alters pronunciation of consonant
    this.wordSplitter = new WordSplitter()
  }

  // checks different cases depending on first letters
  identifyConsonantSound(word) {
    const identifiedLetters = this.wordSplitter.separateLetters(word)
    let consonantSound = identifiedLetters[0] // initially set first consonant sound to first letter

    switch (identifiedLetters[0]) { // check for initial letter
      case 'c':
        if (this.softVowels.includes(identifiedLetters[1])) { // check if it is a soft vowel
          consonantSound = 's'
        }
        break
      case 'g':
        if (this.softVowels.includes(identifiedLetters[1])) { // check if it is a soft vowel
          consonantSound = 'j'
        }
        break
      case 'k':
        if (this.softVowels.includes(identifiedLetters[1])) { // check if it is a soft vowel
          consonantSound = 'tj'
        }
        break
      case 's': {
        if (identifiedLetters[1] === 'k') {
          if (this.softVowels.includes(identifiedLetters[2])) {
            consonantSound = 'sj'
          } else if (identifiedLetters[2] === 'j') {
            consonantSound = 'sj'
          }
        }
        else if (identifiedLetters[1] === 't' && identifiedLetters[2] === 'j') {
          consonantSound = 'sj'
        }
      }
      break
    }
    return consonantSound
  }

}