# The Phonics Breakdown Module
This module aims to help users with the phonetic breakdown of Swedish words.

The module provides the initial consonant sounds for words dependant on their spelling.
The module can also break down the type of vowel sounds used in a word, if they are long or short.

The test app consists of 8 tests, all run at the same time. Preferred method of testing would be to use a framework such as Jest.

## How to run tests
1. run 'npm run test' in terminal
2. observe console


## Test-Plan
### What to test and how
The intention is to write and run individual tests for each use case in a test app. The tests should return a desired outcome in our console. The test app will run all tests at once, but they can be commented out if the desire is to only check one at a time. More test cases can be added to the test app if more functionality needs to be tested.

### Test cases
#### TC1 - returnAllWordsInString(input)
Use Case: Turn a string into an array of words

Input: 'Det är kul att köra bil.'
Expected output: ['Det', 'är', 'kul', 'att', 'köra', 'bil ']

##### Expected Outcome
The string should be represented as an array with each word represented as an individual element in the console.

#### TC2 - returnInitialConsonantSound(input)
Use Case: Return consonant sound corresponding to the spelling of the input.

Input: ['cool', 'citron', 'går', 'gör', 'kul', 'kär', 'skor', 'skör']
Expected output:
    The initial phonic sound for the word cool is: 'c'.
    The initial phonic sound for the word citron is: 's'.
    The initial phonic sound for the word går is: 'g'.
    The initial phonic sound for the word gör is: 'j'.
    The initial phonic sound for the word kul is: 'k'.
    The initial phonic sound for the word kär is: 'tj'.
    The initial phonic sound for the word skor is: 'sk'.
    The initial phonic sound for the word skör is: 'sk'.

##### Expected Outcome
The corresponding consonant sound of the word should be returned. The test 



## Test Report

| Test      | UC1 | UC2  |
| --------- |:----:| :---:|
| TC1.1     | 1/OK | 0    |
| COVERAGE & SUCCESS   |     | 0    |

### Comments
All base methods pass fine, but error handling for entering incorrect argument types needs to be addressed.