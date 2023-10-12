/* eslint-disable jsdoc/require-jsdoc */
import { SwedishPhonicsChecker } from '../src/js/swedish-phonics-module.js'

const swedishPhonicsChecker = new SwedishPhonicsChecker()

function testReturnAllWordsInString () {
  const sentenceToSplit = 'Det är kul att köra bil.'
  const seperatedWords = swedishPhonicsChecker.returnAllWordsInString(sentenceToSplit)
  console.log(`Initial sentence: ${sentenceToSplit} - Seperated sentence: ${seperatedWords}`)
}

function testReturnInitialConsonantSound () {
  const wordsToTry = ['cool', 'citron', 'går', 'gör', 'kul', 'kär', 'skor', 'skör']

  wordsToTry.forEach((word) => {
    const initialPhonicSound = swedishPhonicsChecker.returnInitialConsonantSound(word)
    console.log(`The initial phonic sound for the word '${word}' is: '${initialPhonicSound}'.`)
  })
}

function testPhoneticConsonantSpelling () {
  const wordToSpellPhonetically = 'skör'

  const phoneticallySpelledWord = swedishPhonicsChecker.phoneticConsonantSpelling(wordToSpellPhonetically)

  console.log(`The word ${wordToSpellPhonetically} is spelled ${phoneticallySpelledWord}.`)
}

function testReturnAllVowelSounds () {
  const wordToTry = 'blåkulla'

  const allVowelSounds = swedishPhonicsChecker.returnAllVowelSounds(wordToTry)
  console.log(`Vowelsounds in the word ${wordToTry}: ${allVowelSounds} `)
}

function testPhoneticVowelSpelling () {
  const wordToTry = 'blåkulla'

  const allVowelSounds = swedishPhonicsChecker.phoneticVowelSpelling(wordToTry)
  console.log(`Phonetic vowel spelling:  ${allVowelSounds}`)
}

function testReturnVowelSoundExplanation () {
  const vowelSoundExplained = swedishPhonicsChecker.returnVowelSoundExplanation('E')
  console.log(`The swedish long E sounds is pronounced:   ${vowelSoundExplained}`)
}

function testReturnVowelExample () {
  const vowelSoundExample = swedishPhonicsChecker.returnVowelExample('E')

  console.log(`An example of the swedish long E sounds is :  ${vowelSoundExample}`)
}

function testReturnVowelEnglishExample () {
  const vowelSoundEnglishExample = swedishPhonicsChecker.returnVowelEnglishExample(['E'])

  console.log(`An English example of the swedish long E sounds is :  ${vowelSoundEnglishExample}`)
}

testReturnAllWordsInString()
testReturnInitialConsonantSound()
testPhoneticConsonantSpelling()
testReturnAllVowelSounds()
testPhoneticVowelSpelling()
testReturnVowelSoundExplanation()
testReturnVowelExample()
testReturnVowelEnglishExample()
