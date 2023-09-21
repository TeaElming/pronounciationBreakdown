/* import { WordSplitter } from "../word-splitter.js"
export class ConsonantSoundIdentifier {
  constructor() {
    this.hardVowels = ['a', 'o', 'u', 'å']
    this.softVowels = ['e', 'i', 'y', 'ä', 'ö'] // alters pronunciation of consonant
    this.wordSplitter = new WordSplitter()
  }
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
  rewritePhonetically(word) {
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
import { WordSplitter } from "../word-splitter.js"
export class VowelSoundIdentifier {
  constructor() {
    this.allVowels = ['a', 'e', 'i', 'u', 'y', 'å', 'ä', 'ö']
    this.wordSplitter = new WordSplitter()
  }
  checkDuplicateIndex(wordSeparatedIntoLetters, indexNumberOfVowel) {
    if (wordSeparatedIntoLetters[indexNumberOfVowel + 1] === wordSeparatedIntoLetters[indexNumberOfVowel + 2]) {
      return true
    }
  }
  checkLastIndex(wordSeparatedIntoLetters, indexNumberOfVowel) {
    if (!wordSeparatedIntoLetters[indexNumberOfVowel + 1]) {
      return true
    }
  }
  identifyVowelSounds(word) {
    const identifiedLetters = this.wordSplitter.separateLetters(word.toLowerCase())

    let identifiedVowelSound = []

    for (let i = 0; i < identifiedLetters.length; i++) {
      if (this.allVowels.includes(identifiedLetters[i])) {
        if (!this.checkDuplicateIndex(identifiedLetters, i) && !this.checkLastIndex(identifiedLetters, i)) {
          identifiedVowelSound.push(identifiedLetters[i].toUpperCase())
        } else {
          identifiedVowelSound.push(identifiedLetters[i])
        }
      }
    } return identifiedVowelSound
  }
  rewriteWithIdentifiedVowelSound(word) {
    const identifiedVowelSounds = this.identifyVowelSounds(word)
    const wordSeparatedIntoLetters = this.wordSplitter.separateLetters(word.toLowerCase())

    let rewrittenWord = []

    let vowelIndex = 0 // to allow for easier loop through identifiedVowelSounds

    for (let i = 0; i < wordSeparatedIntoLetters.length; i++) {
      if (this.allVowels.includes(wordSeparatedIntoLetters[i])) {
        rewrittenWord.push(identifiedVowelSounds[vowelIndex])
        vowelIndex++ // moves us to the enxt vowel sound in the list
      } else {
        rewrittenWord.push(wordSeparatedIntoLetters[i])
      }
    }
    return rewrittenWord.join('')
  }
}

export class WordSplitter {
  constructor() {
  }
  checkIfMultipleWords(stringToCheck) {
    let allWords = this.separateWords(stringToCheck)
    if (allWords.length > 1) {
      return true // this could be rewritten
    }
  }
  separateWords(stringOfWords) {
    let allWords = stringOfWords.split(' ') // splits for each space
    let cleanedWords = allWords.map(word => {
      return this.clearEverythingButLetters(word)
    })
    cleanedWords = cleanedWords.filter(word => word.trim() !== '')
    return cleanedWords
  }

  clearEverythingButLetters(word) {
    return word.replace(/[^a-zA-ZåäöÅÄÖ]/g, " ")
  }

  separateLetters(word) {
    this.clearEverythingButLetters(word)
    let allLetters = word.split('')
    return allLetters
  }

}

import { ConsonantSoundIdentifier } from "./components/consonant-sounds/consonant-sound-identifier.js"
import { WordSplitter } from "./components/word-splitter.js"
import { VowelSoundIdentifier } from "./components/vowel-sounds/vowel-sound-identifier.js"

export class SwedishPhonicsChecker {

  constructor(wordToCheck) {
    this.wordToCheck = wordToCheck
    this.consonantSoundIdentifier = new ConsonantSoundIdentifier()
    this.vowelSoundIdentifier = new VowelSoundIdentifier()
    this.wordSplitter = new WordSplitter()
  }

  returnAllWordsInString() {
    if (this.wordSplitter.checkIfMultipleWords(this.wordToCheck)) {
      const allIdentifiedWords = this.wordSplitter.separateWords(this.wordToCheck)
      return allIdentifiedWords
    }
    return [this.wordToCheck] // to avoid returning undefined and making sure to return same type
  }

  returnInitialPhonicSound() {
    return this.consonantSoundIdentifier.identifyConsonantSound(this.wordToCheck)
  }

  phoneticConsonantSpelling() {
    return this.consonantSoundIdentifier.rewritePhonetically(this.wordToCheck)
  }

  returnAllVowelSounds() {
    return this.vowelSoundIdentifier.identifyVowelSounds(this.wordToCheck)
  }

  phoneticVowelSpelling() {
    return this.vowelSoundIdentifier.rewriteWithIdentifiedVowelSound(this.wordToCheck)
  }

}
*/