# The Phonics Breakdown Module

This module aims to help users with the phonetic breakdown of Swedish words.

## Vision
The module provides the initial consonant sounds for words dependant on their spelling.
The module can also break down the type of vowel sounds used in a word, if they are long or short.

## Use-cases
There are currently 8 different use cases for this module. These use cases can at a later stage be combined in an application to break down several aspects of the phonics.

### UC1 - Turn a string into an array of words
Pre-condition: a string of words
Postcondition: an array with each word represented as an element

#### Main Scenario
1. A string is entered as an argument
2. The string is returned as an array with each word represented as an element.


## Test-Plan
### What to test and how
The intention is to write and run individual tests for each use case in a test app. The tests should return a desired outcome in our console. The test app will run all tests at once, but they can be commented out if the desire is to only check one at a time. More test cases can be added to the test app if more functionality needs to be tested.

### Test cases
#### TC1
Use Case 1: Turn a string into an array of words

Preconditions: An argument must be entered to the method.

##### Expected Outcome
The string should be represented as an array with each word represented as an individual element in the console.

## Test Report

| Test      | UC1 | UC2  |
| --------- |:----:| :---:|
| TC1.1     | 1/OK | 0    |
| COVERAGE & SUCCESS   |     | 0    |

### Comments
All base methods pass fine, but error handling for entering incorrect argument types needs to be addressed.