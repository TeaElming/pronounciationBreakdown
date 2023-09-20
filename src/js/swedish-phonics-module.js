import { ConsonantSoundIdentifier } from "./consonant-sound-identifier.js"
import { WordSplitter } from "./word-splitter.js"

export class SwedishPhonicsChecker {
  constructor(wordToCheck) {
    this.wordToCheck = wordToCheck
    this.consonantSoundIdentifier = new ConsonantSoundIdentifier()
    this.wordSplitter = new WordSplitter()
  }
  // If number of words in a string > 1, seperate and add to array
  // Allows user to easily run through the string first in test app
  checkNumberOfWordsInString() {
    if (this.wordSplitter.checkIfMultipleWords(this.wordToCheck)) {
      const allIdentifiedWords = this.wordSplitter.separateWords(this.wordToCheck)
      return allIdentifiedWords
    }
    return [this.wordToCheck] // to avoid returning undefined and returning same type
  }

  returnInitialPhonicSound() {
    return this.consonantSoundIdentifier.identifyConsonantSound(this.wordToCheck)
  }

  phoneticSpelling () {
    return this.consonantSoundIdentifier.rewritePhonetically(this.wordToCheck)
  }


}
