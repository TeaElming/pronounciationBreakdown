/* eslint-disable jsdoc/require-jsdoc */
export class WordSplitter {
  checkIfMultipleWords (stringToCheck) {
    const allWords = this.separateWords(stringToCheck)
    if (allWords.length > 1) {
      return true // this could be rewritten
    }
  }

  separateWords (stringOfWords) {
    const allWords = stringOfWords.split(' ') // splits for each space
    let cleanedWords = allWords.map(word => {
      return this.clearEverythingButLetters(word)
    })
    cleanedWords = cleanedWords.filter(word => word.trim() !== '')
    return cleanedWords
  }

  clearEverythingButLetters (word) {
    return word.replace(/[^a-zA-ZåäöÅÄÖ]/g, ' ')
  }

  separateLetters (word) {
    this.clearEverythingButLetters(word)
    const allLetters = word.split('')
    return allLetters
  }
}
