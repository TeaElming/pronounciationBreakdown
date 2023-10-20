# Swedish Phonics Identifier
Has the ability to break down the phonics of Swedish words.
Currently supports the intial consonant sounds of:
- c
- g
- k
- sk

It also supprots the identification process of long or short vowel sounds in regular, non-compound words.

# Access
The 'swedish-phonics-module.js' can be found if pressing the link: [src/js/swedish-phonics-module.js](./src/js/swedish-phonics-module.js)

You can choose to clone it and help to improve it, or you can fork it and work on your own branch.

# Usage
The Swedish language has 9 vowels (A, E, I, O, U, Y, Å, Ä, Ö). This module can, by following standarad pronunciation rules, identify if the vowel sound in a word is long or short.

The vowels are split into two groups, hard and soft, which has an an impact on how a word is pronounced. Depending on if the vowel is hard or soft, the consonant sound which appears before the vowel may or may not be altered. This module therefore aims to identify the initial sound of a word, determine if it is affected by the vowel which follows, and provide the user with a response which tells us how to pronounce it.

Consonant sounds affected by soft vowels:
- C
- G
- K
- SK

**Hard vowels:** *A, O, U, Å*

**Soft vowels:** *E, I, Y, Ä, Ö*



## Example outputs using the methods above
![View Example](./reports/testImageConsole.png)

# Testing
In terminal: npm run test

In the folder named 'test-app', there is a file called 'test-each-method.js' which runs through all the current tests. Running 'npm run test' will run this file and print in the terminal.

# Open Issues
There are currently several limitations to the modules ability to correctly identify the phonics.

## Consonant sounds
- The module only identifies the intial consonant sound of a word. If the consonant is altered within a word, it is not detected.
- Several additional consonant sounds are yet to be added, such as 'dj', 'lj', and 'hj'.
- Known exceptions are not stored or dealt with, for example 'kö'.
- Homographs (words that are spelled the same but pronunced differently) are currenlty not addressed, e.g. 'kör' (choir) and 'kör' (driving)

## Vowel sounds
- Compound words are currently not dealt with, e.g. 'solljus' would be considered a short 'o'-sound, despite the word consisting of two parts sol-ljus.
- If it is a noun, it must be entered in singular, undetermined form (e.g. '***katt***', not '*katter*' or '*katten*')
- If it is a verb, it must be entered in its base (infinitive) form (e.g. ***'springa'***, not *'springer'*)
- Strong verbs, where emphasis is placed on the last vowel syllable, are not accounted for and would generate false results (e.g. ***'begå'***)

## Error handling
There is currently no proper error handling implemented. There is a method available called catchTypeError(input) in the SwedishPhonicsChecker that is ready to be implemented. However, due to the nature of this method, which throws a TypeError if an incorrect argument is entered but does not catch it, this is something which should be improved.
