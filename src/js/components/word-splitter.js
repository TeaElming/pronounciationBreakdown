/**
 * Class aiming to break down a word into it's components
 *
 * @export
 * @class WordBreakdown
 */
export class WordSplitter {
  constructor() {
  }

  /**
   * Checks if there are spaces in the string and returns a true if there are multiple words.
   *
   * @param {String} stringToCheck
   * @return {Boolean}
   */
  checkIfMultipleWords (stringToCheck) {
    let allWords = this.separateWords(stringToCheck)
    if (allWords.length > 1){
      return true // this could be rewritten
    }
  }

  /**
   * Separates words based on spaces, but removes words that are only blank spaces.
   *
   * @param {String} stringOfWords
   * @return {Array} allWords as an array
   */
  separateWords (stringOfWords) {
    let allWords = stringOfWords.split(' ') // splits for each space
    let cleanedWords = allWords.map(word => {
      return this.clearEverythingButLetters(word)
    })
    cleanedWords = cleanedWords.filter(word => word.trim() !== '')
    return cleanedWords
  }


  /**
   * Removes all characters except letters and replace them with a blank space.
   *
   * @param {Array} allWords array of all words
   * @return {Array} copy of allWords but without unwanted characters
   */
  clearEverythingButLetters(word) {
      return word.replace(/[^a-zA-ZåäöÅÄÖ]/g, " ")
  }

  /**
   * Separates each letter in a word.
   *
   * @param {String} word
   * @return {Array} allLetters separated into individual array-elements.
   */
  separateLetters (word) {
    this.clearEverythingButLetters(word)
    let allLetters = word.split('')
    return allLetters
  }

}
