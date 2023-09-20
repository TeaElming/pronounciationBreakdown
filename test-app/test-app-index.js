import { SwedishPhonicsChecker } from "../src/js/swedish-phonics-module.js"

const wordsToTry = ['cool', 'citron', 'går', 'gör', 'kul', 'kär', 'skor', 'skör']

/* wordsToTry.forEach((word) => {
  const phonicsChecker = new SwedishPhonicsChecker(word)
  const initialPhonicSound = phonicsChecker.returnInitialPhonicSound(word)
  console.log(`The initial phonic sound for the word ${word} is: '${initialPhonicSound}'.`)
})*/

const longerSentence = 'En   katt med skor kör en en skön bil !! genom Skärholmen'

const sentencePhonicsChecker = new SwedishPhonicsChecker(longerSentence)
const allIdentifiedWords = sentencePhonicsChecker.returnAllWordsInString()

if (allIdentifiedWords.length > 1) {
  allIdentifiedWords.forEach((word) => {
    const phonicsChecker = new SwedishPhonicsChecker(word)
  const initialPhonicSound = phonicsChecker.returnInitialPhonicSound()
  const phoneticSpelling = phonicsChecker.phoneticSpelling()
  console.log(`The initial phonic sound for the word ${word} is: '${initialPhonicSound}' and is pronounced ${phoneticSpelling}.`)
  })
}


