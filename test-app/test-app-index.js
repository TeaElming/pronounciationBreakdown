import { SwedishPhonicsChecker } from "../src/js/swedish-phonics-module.js"


function testConsonantSoundIndividualWords() {
  const wordsToTry = ['cool', 'citron', 'går', 'gör', 'kul', 'kär', 'skor', 'skör']

  wordsToTry.forEach((word) => {
    const phonicsChecker = new SwedishPhonicsChecker(word)
    const initialPhonicSound = phonicsChecker.returnInitialPhonicSound(word)
    console.log(`The initial phonic sound for the word ${word} is: '${initialPhonicSound}'.`)
  })
}

function testConsonantSoundSentence() {
  const longerSentence = 'En katt med skor kör en en skön bil genom Skärholmen'

  const sentencePhonicsChecker = new SwedishPhonicsChecker(longerSentence)
  const allIdentifiedWords = sentencePhonicsChecker.returnAllWordsInString()

  if (allIdentifiedWords.length > 1) {
    allIdentifiedWords.forEach((word) => {
      const phonicsChecker = new SwedishPhonicsChecker(word)
      const initialPhonicSound = phonicsChecker.returnInitialPhonicSound()
      const phoneticSpelling = phonicsChecker.phoneticConsonantSpelling()
      console.log(`The initial phonic sound for the word ${word} is: '${initialPhonicSound}' and is pronounced ${phoneticSpelling}.`)
    })
  }
}
// DISCLAIMER FOR ERRORS - Verbs only allowed in infinitve/base form!
function testVowelSoundsWords() {
  const wordsToTry = ['hål', 'håll', 'trolla', 'blåkulla']

  wordsToTry.forEach((word) => {
    const phonicsChecker = new SwedishPhonicsChecker(word)
    const identifiedVowelSounds = phonicsChecker.returnAllVowelSounds(word)
    console.log(`Your word was: ${word} and the identified vowels are: '${identifiedVowelSounds}', where capital letters represent long vowel sounds.`)
  })
}

function testRewriteBasedOnVowelSound() {
  const wordsToTry = ['hål', 'håll', 'trolla', 'blåkulla']

  wordsToTry.forEach((word) => {
    const phonicsChecker = new SwedishPhonicsChecker(word)
    const rewrittenWord = phonicsChecker.phoneticVowelSpelling(word)
    console.log(`Your word was: ${word} but is pronounced: '${rewrittenWord}', where capital letters represent long vowel sounds.`)
  })
}


function testUnnecessarySpaces() {
  const testSentence = 'En                    kort         men        skön              promenad'
  console.log('Original sentence: ' + testSentence)

  const sentencePhonicsChecker = new SwedishPhonicsChecker(testSentence)
  const allIdentifiedWords = sentencePhonicsChecker.returnAllWordsInString()

  let reconstructedSentence = []

  if (allIdentifiedWords.length > 1) {
    allIdentifiedWords.forEach((word) => {
      const phonicsChecker = new SwedishPhonicsChecker(word)
      const phoneticSpelling = phonicsChecker.phoneticConsonantSpelling()
      reconstructedSentence.push(phoneticSpelling)
    })
  }
  console.log('The modified sentence: ' + reconstructedSentence.toString().replaceAll(',', ' '))
}

function testIllegalCharacters() {
  const testSentence = 'En !! ko?rt,,men skön ? promenad'
  const testWord = 'sk11l'
  console.log('Original sentence: ' + testSentence)

  const sentencePhonicsChecker = new SwedishPhonicsChecker(testSentence)
  const allIdentifiedWords = sentencePhonicsChecker.returnAllWordsInString()

  let reconstructedSentence = []

  if (allIdentifiedWords.length > 1) {
    allIdentifiedWords.forEach((word) => {
      const phonicsChecker = new SwedishPhonicsChecker(word)
      const phoneticSpelling = phonicsChecker.phoneticConsonantSpelling()
      reconstructedSentence.push(phoneticSpelling)
    })
  }
  console.log('The modified sentence: ' + reconstructedSentence.toString().replaceAll(',', ' '))
}

testConsonantSoundIndividualWords()
testConsonantSoundSentence()
testUnnecessarySpaces()
testIllegalCharacters()
testVowelSoundsWords()
testRewriteBasedOnVowelSound()