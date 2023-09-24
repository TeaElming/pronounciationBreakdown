import { SwedishPhonicsChecker } from "../src/js/swedish-phonics-module.js"

function testReturnAllWordsInString() {
  const sentenceToSplit = 'Det är kul att köra bil.'

  const swedishPhonicsChecker = new SwedishPhonicsChecker()
  const seperatedWords = swedishPhonicsChecker.returnAllWordsInString(sentenceToSplit)
  console.log(seperatedWords)
}

function testReturnInitialConsonantSound() {
  const wordsToTry = ['cool', 'citron', 'går', 'gör', 'kul', 'kär', 'skor', 'skör']

  wordsToTry.forEach((word) => {
    const swedishPhonicsChecker = new SwedishPhonicsChecker()
    const initialPhonicSound = swedishPhonicsChecker.returnInitialConsonantSound(word)
    console.log(`The initial phonic sound for the word ${word} is: '${initialPhonicSound}'.`)
  })
}

function testPhoneticConsonantSpelling() {
  const wordToSpellPhonetically = 'skör'
  const swedishPhonicsChecker = new SwedishPhonicsChecker()

  const phoneticallySpelledWord = swedishPhonicsChecker.phoneticConsonantSpelling(wordToSpellPhonetically)

  console.log(`The word ${wordToSpellPhonetically} is spelled ${phoneticallySpelledWord}.`)
}

function testReturnAllVowelSounds () {
  const wordToTry = 'blåkulla'
  const swedishPhonicsChecker = new SwedishPhonicsChecker()
  const allVowelSounds = swedishPhonicsChecker.returnAllVowelSounds(wordToTry)
  console.log('Vowelsounds: ' + allVowelSounds)
}

function testPhoneticVowelSpelling () {
  const wordToTry = 'blåkulla'
  const swedishPhonicsChecker = new SwedishPhonicsChecker()
  const allVowelSounds = swedishPhonicsChecker.phoneticVowelSpelling(wordToTry)
  console.log('Phonetic vowel spelling: ' + allVowelSounds)
}


function testReturnVowelSoundExplanation () {
  const swedishPhonicsChecker = new SwedishPhonicsChecker()
  const vowelSoundExplained = swedishPhonicsChecker.returnVowelSoundExplanation('E')
  console.log('The swedish long E sounds is pronounced: ' + vowelSoundExplained)
}

function testReturnVowelExample () {
  const swedishPhonicsChecker = new SwedishPhonicsChecker()
  const vowelSoundExample = swedishPhonicsChecker.returnVowelExample('E')
  console.log('An example of the swedish long E sounds is : ' + vowelSoundExample)
}

function testReturnVowelEnglishExample () {
  const swedishPhonicsChecker = new SwedishPhonicsChecker()
  const vowelSoundEnglishExample = swedishPhonicsChecker.returnVowelEnglishExample('E')
  console.log('An English example of the swedish long E sounds is : ' + vowelSoundEnglishExample)
}

testReturnAllWordsInString()
testReturnInitialConsonantSound()
testPhoneticConsonantSpelling()
testReturnAllVowelSounds()
testPhoneticVowelSpelling()
testReturnVowelSoundExplanation()
testReturnVowelExample()
testReturnVowelEnglishExample()