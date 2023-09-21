import { WordSplitter } from "../word-splitter.js"
/**
 * Identifies the pronunciation of intial consonant sounds in Swedish.
 *
 * @export
 * @class ConsonantSoundIdentifier
 */
export class ConsonantSoundIdentifier {
  constructor() {
    this.hardVowels = ['a', 'o', 'u', 'å']
    this.softVowels = ['e', 'i', 'y', 'ä', 'ö'] // alters pronunciation of consonant
    this.wordSplitter = new WordSplitter()
  }


  /**
   * Runs through the initial consonant sounds of a word to identify potential phonetic differences.
   * Based of the standard rules. Exceptions occur and are not accounted for.
   *
   * @param {String} word
   * @return {String} consonantSound - gives the phonetic consonant sound of the word
   * @memberof ConsonantSoundIdentifier
   */
  identifyConsonantSound(word) {
    const identifiedLetters = this.wordSplitter.separateLetters(word.toLowerCase())
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
          if (this.softVowels.includes(identifiedLetters[2])) { // 'sk' combined with soft vowel
            consonantSound = 'sj'
          } else if (identifiedLetters[2] === 'j') { // 'sj' always 'sj' sound
            consonantSound = 'sj'
          }
          consonantSound = 'sk'
        }
        else if (identifiedLetters[1] === 't' && identifiedLetters[2] === 'j') { // 'stj' combination makes 'sj'
          consonantSound = 'sj'
        }
      }
      break
    }
    return consonantSound
  }

  /**
   * Rewrites a word with the phonetic consonant sound if required.
   *
   * @param {String} word
   * @return {String} phoneticallySpelledWord - the word which has been phonetically spelled.
   * @memberof ConsonantSoundIdentifier
   */
  rewritePhonetically (word) {
    const identifiedConsonantSound = this.identifyConsonantSound(word.toLowerCase())
    const identifiedLetters = this.wordSplitter.separateLetters(word.toLowerCase())

    let phoneticallySpelledWord = word // initial spelling

    if (identifiedLetters[0] === 's' && identifiedLetters[1] === 'k') {
      if (identifiedConsonantSound === 'sj') {
        phoneticallySpelledWord = 'sj' + word.slice(2)
      }
    } else if (identifiedLetters[0] !== identifiedConsonantSound) {
      phoneticallySpelledWord = identifiedConsonantSound + word.slice(1)
    }

    return phoneticallySpelledWord
  }
}