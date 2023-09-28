Tables

| Name and Explanation           | Reflection based on Clean Code      |
|--------------------------------|--------------------------------|
| 1. this.consonantSoundIdentifier  | Searchable                     |
|                                | A good name is one that is searchable, which this is. The name contains the most important aspects of what it is, it shows that it is related to the consonants, and it shows that it is the identifier, allowing us to assume that it could be used to find more information. |
|                              | -                        |
|                                | Avoid encodings                |
|  | The name avoids using encodings, it clearly states what it does. This name could have been shortened, e.g. consSoundId, or even worse ‘csi’, but that would have added an unnecessary need for decoding the name. It is worth adding some extra letters to make it more clear. |
| 2. returnAllWordsInString(wordToCheck)  | Avoid Disinformation + Verbs & Keywords                     |
|                                | This name follows the verb/noun pairing rule discussed in chapter three, but it does partly break the avoid disinformation rule. The name ‘returnAllWordsInString(wordToCheck)’ has several issues. Firstly, it is not clear from the name that the method transforms a string into an array of separated words. Secondly, it is very misleading to name the argument ‘wordToCheck’ as the purpose of the method is to deal with strings containing several words, and not just one. It would have made more sense to name it ‘stringToCheck’ for example, but when naming my argument, I was too focused on avoiding including types in my names. |
|                              | -                        |
|                                | Use pronounceable names                |
|  | Although this name isn’t ideal, it is indeed pronounceable. Looking at it, it is easy enough to read the name as it is, and people would be able to guess what it does. As mentioned above, the name isn’t great and the user would most likely not guess that it returns an array, but it would be able to guess that we get the words from a string.  |
| 3. returnInitialConsonantSound(wordToCheck)  | Don’t add gratuitous text                     |
|                                | This name does not read easily when looking at it, and although it can be argued that it contains valuable information, it is too long to allow for a quick read of it. |
|                              | -                        |
|                                | Method Names               |
|  | The methods and arguments should come in logical verb-noun pairs. The method is a verb, explaining what is being done, and the argument clearly shows that it is being acted upon by the verb, hence following the rule. |
| 4. phoneticConsonantSpelling(wordToCheck)  | Method Names      |
|                                | This is not a good method name as it is not a verb. Had it been renamed phoneticConsonantSpeller(), it would have been slightly better, but it is still a bit unclear what it does. A user would not be able to easily understand that this method returns the same word but spelled with the phonetic consonant sound. |
|                              | -                        |
|                                | Pick One Word per Concept            |
|  | Considering there is a method called returnInitialConsonantSound(wordToCheck), and several others starting with the word ‘return’, it is strange that this one does not use the key word return. However, it can also be argued that it is not ideal to use the word return in all of the methods, as it doesn’t make it easier to find the specific method we want.   |
| 5. returnVowelSoundExplanation(vowel) AND returnVowelExample(vowel)  | Make meaningful distinctions     |
|                                | Although the book provides examples that urge the programmer to not use words such as “var1” and “var2”, I am still going to say that the naming of these methods are breaking this rule due to how similar they are. As a user, it would be difficult to understand the difference between them without reading documentation or going to the ‘behind the scenes’ code. It would have been better to rename them along the lines of ‘vowelSoundPronunciation’ and ‘wordContainingVowelSound’, or something similar. |
|                              | -                        |
|                                | Mental Mapping     |
|  | Several improvements can be made to these names, but they do not require mental mapping of the sort where we have to guess what various things represent. The name clearly takes a vowel, rather than just putting (v) in there.  |
||