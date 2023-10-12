import test from 'ava'
import { SwedishPhonicsChecker } from '../src/js/swedish-phonics-module.js'

const swedishPhonicsChecker = new SwedishPhonicsChecker()

test('returnAllWordsInString should split a string into words', (t) => {
  const input = 'This is a test'
  const result = swedishPhonicsChecker.returnAllWordsInString(input)
  t.deepEqual(result, ['This', 'is', 'a', 'test'])
})
