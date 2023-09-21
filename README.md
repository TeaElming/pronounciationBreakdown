# pronounciationBreakdown
Breaks down the first sounds of a Swedish word to determine the correct pronunciation of it.

# Explanation of task
The Swedish language has 9 vowels (A, E, I, O, U, Y, Å, Ä, Ö) that are split into two groups, hard and soft.
These vowels have an impact on how a word is pronounced, as they may or may not alter the consonant which appears before them.
The goal of this module is to identify the initial sound of a word, determine if it is affected by the vowel which follows, and
provide the user with a response which tells us how to pronounce it.

## Consonant sounds affected by soft vowels
The following consonant sounds are affected by the soft vowels: C, G, K, SK

## Hard/Soft vowels
Hard vowels: A, O, U, Å
Soft vowels: E, I, Y, Ä, Ö

# USAGE
The user should be able to use the module by only interacting with the file called 'swedish-phonics-module.js'.


# TESTING
In the folder 'test-app' there is a file called 'test-app-index.js'. By running this file, it is possible to test the features of the module.

# ISSUES
- Illegal character in a word - blank space