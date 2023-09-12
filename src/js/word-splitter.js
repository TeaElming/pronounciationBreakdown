/**
 * Class aiming to break down a word into it's components
 *
 * @export
 * @class WordBreakdown
 */
export class WordSplitter {
  constructor() {
  }

  // used to seperate the words based on spaces
  separateWords (stringOfWords) {
    let allWords = stringOfWords.split(' ') // splits for each space
    return allWords
  }

  // used to seperate letters in a word
  separateLetters (word) {
    let allLetters = word.split('')
    return allLetters
  }

}