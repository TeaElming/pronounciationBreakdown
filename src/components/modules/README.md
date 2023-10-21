# Swedish Phonics Checker - Module
The SwedishPhonicsChecker-module aims to help non-native Swedish speakers pronounce Swedish words. Currently, the module supports vowel sound pronunciation, as well as consonant sounds appearing at the start of a word.

The Swedish language has 9 vowels (A, E, I, O, U, Y, Å, Ä, Ö). This module can, by following standarad pronunciation rules, identify if the vowel sound in a word is long or short.

There are certain consonants that are not pronunced as one might expect: the 'g' in 'gel' is not pronounced the same way as the 'g' in 'gul', and the words 'skar' and 'sker' have vastly different consonant sounds.

## Table of Contents
- [Swedish Phonics Checker - Module](#swedish-phonics-checker---module)
  - [Table of Contents](#table-of-contents)
  - [Access](#access)
- [How to interact with the module](#how-to-interact-with-the-module)
  - [Example outputs based on available methods](#example-outputs-based-on-available-methods)
- [Testing](#testing)
- [Open Issues](#open-issues)
  - [Consonant sounds](#consonant-sounds)
  - [Vowel sounds](#vowel-sounds)
  - [Error handling](#error-handling)


## Access
To find the file for the SwedishPhonicsChecker-module, press the link: [swedish-phonics-module.js](./swedish-phonics-module.js) . Please fork it to work on your own project.

To find all files required for the SwedishPhonicsChecker-module, please click here: [modules-folder](../modules) .

# How to interact with the module
Create a new instance of the class SwedishPhonicsIdentifier() and work with the following methods:
1. returnAllWordsInString(input) - Splits a string into separate words
2. returnInitialConsonantSound(input) - Provides the initial phonetic sound of a word.
3. phoneticConsonantSpelling(input) - Provides the phonetic consonant spelling of a word.
4. returnAllVowelSounds(input) - Provides the vowel sounds included in a word. (Long vowel sounds will be capitalised, while short ones remain lower case)
5. phoneticVowelSpelling(input) - Provides the word rewritten to capitalise vowels that have a long vowel sound.
6. returnVowelSoundExplanation(input) - Returns an explanation of the sound, e.g. 'e' is pronunced 'eh'
7. returnVowelExample(input) - Returns an example word using the sound
8. returnVowelEnglishExample(input) - Returns an example of an English word using the sound

## Example outputs based on available methods
![View Example](./reports/testImageConsole.png)
For examples of how to interact with the module, please see [test app](../../../test-app/test-each-method.js) .

# Testing
In terminal: **npm run test**

Unit tests have been written for each method in the module.
![View passed tests](./reports/138.png)

For detailed views of tests, see:
- [Swedish Phonics Module](./phonetic-components/__tests__/swedish-phonics-module.test.js)
- [Consonant Sound Identifier](./phonetic-components/consonant-components/__tests__/consonant-sound-identifier.test.js)
- [All individiual consonant test](./phonetic-components/consonant-components/__tests__/consonant-rules/)
- [Vowel Identifier](./phonetic-components/vowel-components/__tests__/vowel-identifier.test.js)
- [Vowel Mapper](./phonetic-components/vowel-components/__tests__/vowel-mapper.test.js)
- [All individual vowels](./phonetic-components/vowel-components/__tests__/all-vowels/)

# Open Issues
There are currently several limitations to the modules ability to correctly identify the phonics.

## Consonant sounds
- The module only identifies the intial consonant sound of a word. If the consonant is altered within a word, it is not detected.
- Known exceptions are not stored or dealt with, for example 'kö'.
- Homographs (words that are spelled the same but pronunced differently) are currenlty not addressed, e.g. 'kör' (choir) and 'kör' (driving)

## Vowel sounds
- Compound words are currently not dealt with, e.g. 'solljus' would be considered a short 'o'-sound, despite the word consisting of two parts sol-ljus.
- If it is a noun, it must be entered in singular, undetermined form (e.g. '***katt***', not '*katter*' or '*katten*')
- If it is a verb, it must be entered in its base (infinitive) form (e.g. ***'springa'***, not *'springer'*)
- Strong verbs, where emphasis is placed on the last vowel syllable, are not accounted for and would generate false results (e.g. ***'begå'***)

## Error handling
There is currently no proper error handling implemented. There is a method available called catchTypeError(input) in the SwedishPhonicsChecker that is ready to be implemented. However, due to the nature of this method, which throws a TypeError if an incorrect argument is entered but does not catch it, this is something which should be improved.
