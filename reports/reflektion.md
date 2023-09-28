# Table of Contents
- [Table of Contents](#table-of-contents)
- [Chapter 2 - Reflection](#chapter-2---reflection)
  - [Chapter 2 - Table of Names](#chapter-2---table-of-names)
- [Chapter 3 - Reflection](#chapter-3---reflection)
  - [Chapter 3 - Table of Methods](#chapter-3---table-of-methods)
    - [1. returnVowelExample(vowel)](#1-returnvowelexamplevowel)
    - [2. identifyConsonantSound (word)](#2-identifyconsonantsound-word)
    - [3. rewriteWithIdentifiedVowelSound (word)](#3-rewritewithidentifiedvowelsound-word)
    - [4. rewritePhonetically (word)](#4-rewritephonetically-word)
    - [5. identifyVowelSounds (word)](#5-identifyvowelsounds-word)


# Chapter 2 - Reflection

## Chapter 2 - Table of Names

| Name and Explanation           | Reflection based on Clean Code      |
|--------------------------------|--------------------------------|
| 1. this.consonantSoundIdentifier  | **Searchable**                     |
|                                | A good name is one that is searchable, which this is. The name contains the most important aspects of what it is, it shows that it is related to the consonants, and it shows that it is the identifier, allowing us to assume that it could be used to find more information. |
|                                | **Avoid encodings**                |
|  | The name avoids using encodings, it clearly states what it does. This name could have been shortened, e.g. consSoundId, or even worse ‘csi’, but that would have added an unnecessary need for decoding the name. It is worth adding some extra letters to make it more clear. |
| 2. returnAllWordsInString(wordToCheck)  | **Avoid Disinformation + Verbs & Keywords                   **  |
|                                | This name follows the verb/noun pairing rule discussed in chapter three, but it does partly break the avoid disinformation rule. The name ‘returnAllWordsInString(wordToCheck)’ has several issues. Firstly, it is not clear from the name that the method transforms a string into an array of separated words. Secondly, it is very misleading to name the argument ‘wordToCheck’ as the purpose of the method is to deal with strings containing several words, and not just one. It would have made more sense to name it ‘stringToCheck’ for example, but when naming my argument, I was too focused on avoiding including types in my names. |
|                                | **Use pronounceable names**               |
|  | Although this name isn’t ideal, it is indeed pronounceable. Looking at it, it is easy enough to read the name as it is, and people would be able to guess what it does. As mentioned above, the name isn’t great and the user would most likely not guess that it returns an array, but it would be able to guess that we get the words from a string.  |
| 3. returnInitialConsonantSound(wordToCheck)  | **Don’t add gratuitous text**                     |
|                                | This name does not read easily when looking at it, and although it can be argued that it contains valuable information, it is too long to allow for a quick read of it. |
|                                | **Method Names**               |
|  | The methods and arguments should come in logical verb-noun pairs. The method is a verb, explaining what is being done, and the argument clearly shows that it is being acted upon by the verb, hence following the rule. |
| 4. phoneticConsonantSpelling(wordToCheck)  | **Method Names**      |
|                                | This is not a good method name as it is not a verb. Had it been renamed phoneticConsonantSpeller(), it would have been slightly better, but it is still a bit unclear what it does. A user would not be able to easily understand that this method returns the same word but spelled with the phonetic consonant sound. |
|                                | **Pick One Word per Concept**            |
|  | Considering there is a method called returnInitialConsonantSound(wordToCheck), and several others starting with the word ‘return’, it is strange that this one does not use the key word return. However, it can also be argued that it is not ideal to use the word return in all of the methods, as it doesn’t make it easier to find the specific method we want.   |
| 5. returnVowelSoundExplanation(vowel) *and* returnVowelExample(vowel)  | **Make meaningful distinctions**     |
|                                | Although the book provides examples that urge the programmer to not use words such as “var1” and “var2”, I am still going to say that the naming of these methods are breaking this rule due to how similar they are. As a user, it would be difficult to understand the difference between them without reading documentation or going to the ‘behind the scenes’ code. It would have been better to rename them along the lines of ‘vowelSoundPronunciation’ and ‘wordContainingVowelSound’, or something similar. |
|                                | **Mental Mapping**     |
|  | Several improvements can be made to these names, but they do not require mental mapping of the sort where we have to guess what various things represent. The name clearly takes a vowel, rather than just putting (v) in there.  |
||

# Chapter 3 - Reflection

## Chapter 3 - Table of Methods

| Name and Code           | Number of Rows |  Reflection based on Clean Code      |
|--------------------------------|----------------|--------------------------------------|
|  **[returnVowelExample(vowel)](#1-returnvowelexamplevowel)**  | **57** | **Small! Then make it smaller!** |
| | | This method clearly violates the ‘small’ rule, but when writing the code I found it difficult to achieve the desired results without having several switch cases. The book is not overly keen on using switch statements, as it is easy to break the Open-Closed Principle (OCP), stating that software should be open to extensions but closed for modification. The book says that switch-statements can be accepted if they are hidden behind an inheritance, which this method is not. Therefore, we are also breaking the rules related to switch statements. An improved way of doing this would be to create to create polymorphic objects of the short and long vowel sound examples, as suggested by the book. |
| | | **Use descriptive names** |
| | | The code snippet looks like it has a very self-explanatory name when singled out from the other methods in the same class. However, there are also methods called ‘returnVowelSound(vowel)’ and ‘returnVowelEnglishExample(vowel)’. If we see these three names next to each other, it would not be completely intuitive to identify what would be returned from each one of these. We can assume that there is a difference between the one which states ‘English’ in its name, and the one that doesn’t, but it is not obvious what the difference between vowelSound and vowelExample is. Therefore, it is not a great name.  |
|  **[identifyConsonantSound(word)](#2-identifyconsonantsound-word)**  | **36** | **One level of abstraction per function** |
| | | This method does not adhere strictly to the one level of abstraction-rule. Initially, the method extracts the first letter of the word and sets it as a consonant sound. It then progresses to have a switch statement, which is not a great design for the same reasons as discussed above, and within each switch-block, a low level abstraction and manipulation occurs. Since there are set letter combinations that have an affect on the pronunciation, these could be stored and searched for separately. This would also allow for easier expansions, such as the ‘dj’, ‘hj’, ‘lj’, etc. sounds to be added.|
| | |**Function Arguments**|
||| A positive of this method is that it is monadic, it only takes one argument, which is the word it is wanting to check the pronunciation of. The method name identifyConsonantSound(word) clearly shows what it is aiming to do, so it easy to understand how to use it. |
||| **Command Queary Separation** |
||| As the book states, a method should either do something or answer something, but it should not do both. This method does something – it identifies the initial consonant sound. |
| **[rewriteWithIdentifiedVowelSound (word)](#3-rewritewithidentifiedvowelsound-word)** | **17** |**No side effects** |
| || This method does not affect anything outside its scope, it purely operates on the input ‘word’ and local variables. The local variables have been named in a logical manner to allow for an easy read. Even though the book states that it is acceptable to use single letter variables in loops, vowelIndex has been used in the loop to allow for an easier distinction of what is being looped through. The main focus for the purpose of this reflection is that the method adheres to the no side effects-rule. |
| | | **Structured programming** |
| | | Following the rules of structured programming, the method does have one entry point and one exit point (the return statement). There are no ‘break’ or ‘continue’ statements present, which follows the rule as well. The loop is purely used to modify the local variable, and is therefore acceptable in relation to the structured programming rule. However, in relation to the ‘only do one thing’ rule, this method could be broken down into smaller segments. As it stands, we are using two previously created methods within this method. We could have altered it so that the rewrite-method took the word and the vowel sounds as two arguments, and worked with it from there. However, that would require a dyadic method rather than monadic, which is not quite as good. |
| **[rewritePhonetically (word)](#4-rewritephonetically-word)** | **15** | **Use descriptive names** |
| | | The name of this method was very descriptive when it was written, as there was only logic supporting consonant phonics at that stage. However, now that the module has been expanded to also include vowel phonics, this name needs to be updated to clarify that it is being rewritten based on the consonant phonics. The vowel equivalent is called rewriteUsingIdentifiedVowels(), which is not the greatest name, but at least better than the consonant one. Both of them could potentially be renamed ‘rewriteWithConsonantSound()’ and ‘rewriteWithVowelSound(), or something along those lines.  However, it can also be argued that as this method is stored in a class called ‘ConsonantSoundIdentifier’ and the other method is stored in a class called ‘VowelSoundIdentifier’, it would make more sense to name both of them rewritePhonetically(word), as they would do the same thing but for either consonants or vowels, and be accessed throw vowelIdentifier.rewritePhoentically() and consonantIdentifier.rewritePhonetically() for example. |
| | | **DRY** |
| | | The method utilises other methods within itself to avoid repeating processes that have been solved previously, and it only uses them once. It is possible that the if-statements could have been written in a more concise manner, as they resemble a chunk of the identifyConsonantSound, but apart from that there is no repetition within the method. |
| **[identifyVowelSounds (word)](#5-identifyvowelsounds-word)** | **14** | **Small** |
| | | Although this method only contains 14 lines, it could be broken down into smaller segments.  A rule of thumb is that if there are nested if-statements, the method can usually be broken down into smaller chanks. Ane xample of how it could have been broken down here would be to writethe methods isVowel(letter) (returning true of the letter is a vowel), processVowel(letters, index) (returning the letter to either lower or upper case depending on the spelling, and then these two could have been used in identfyVowelSound(word).  |
| | | **Use descriptive names** |
| | | It is clear from the verb/noun pair of method name and argument name what the method does. The naming of the variables within the method also help to explain what is happening and the roles of the different variables. It does what it claims to do, and nothing else, which means it also follows the no side effects-rule. | 



### 1. returnVowelExample(vowel)
```
  returnVowelExample(vowel) {
    switch (vowel) { // user will have to insert  vowel
      case 'a':
        return this.shortA_example()
        break
      case 'A':
        return this.longA_example()
        break
      case 'e':
        return this.shortE_example()
        break
      case 'E':
        return this.longE_example()
        break
      case 'i':
        return this.shortI_example()
        break
      case 'I':
        return this.longI_example()
        break
      case 'o':
        return this.shortO_example()
        break
      case 'O':
        return this.longO_example()
        break
      case 'u':
        return this.shortU_example()
        break
      case 'U':
        return this.longU_example()
        break
      case 'y':
        return this.shortY_example()
        break
      case 'Y':
        return this.longY_example()
        break
      case 'å':
        return this.shortÅ_example()
        break
      case 'Å':
        return this.longÅ_example()
        break
      case 'ä':
        return this.shortÄ_example()
        break
      case 'Ä':
        return this.longÄ_example()
        break
      case 'ö':
        return this.shortÖ_example()
        break
      case 'Ö':
        return this.longÖ_example()
        break
    }
  }

```

### 2. identifyConsonantSound (word)
```
identifyConsonantSound (word) {
    const identifiedLetters = this.wordSplitter.separateLetters(word.toLowerCase())
    let consonantSound = identifiedLetters[0] // initially set first consonant sound to first letter

    switch (identifiedLetters[0]) { // check for initial letter
      case 'c':
        if (this.softVowels.includes(identifiedLetters[1])) { // check if it is a soft vowel
          consonantSound = 's'
        }
        break
      case 'g':
        if (this.softVowels.includes(identifiedLetters[1])) { // check if it is a soft vowel
          consonantSound = 'j'
        }
        break
      case 'k':
        if (this.softVowels.includes(identifiedLetters[1])) { // check if it is a soft vowel
          consonantSound = 'tj'
        }
        break
      case 's': {
        if (identifiedLetters[1] === 'k') {
          if (this.softVowels.includes(identifiedLetters[2])) { // 'sk' combined with soft vowel
            consonantSound = 'sj'
          } else if (identifiedLetters[2] === 'j') { // 'sj' always 'sj' sound
            consonantSound = 'sj'
          }
          consonantSound = 'sk'
        }
        else if (identifiedLetters[1] === 't' && identifiedLetters[2] === 'j') { // 'stj' combination makes 'sj'
          consonantSound = 'sj'
        }
      }
      break
    }
    return consonantSound
  }
```

### 3. rewriteWithIdentifiedVowelSound (word)
```
  rewriteWithIdentifiedVowelSound (word) {
    const identifiedVowelSounds = this.identifyVowelSounds(word)
    const wordSeparatedIntoLetters = this.wordSplitter.separateLetters(word.toLowerCase())

    let rewrittenWord = []

    let vowelIndex = 0 // to allow for easier loop through identifiedVowelSounds

    for (let i = 0; i < wordSeparatedIntoLetters.length; i++) {
      if (this.allVowels.includes(wordSeparatedIntoLetters[i])) {
        rewrittenWord.push(identifiedVowelSounds[vowelIndex])
        vowelIndex++ // moves us to the enxt vowel sound in the list
      } else {
        rewrittenWord.push(wordSeparatedIntoLetters[i])
      }
    }
    return rewrittenWord.join('')
  }
```

### 4. rewritePhonetically (word)

```
  rewritePhonetically (word) {
    const identifiedConsonantSound = this.identifyConsonantSound(word.toLowerCase())
    const identifiedLetters = this.wordSplitter.separateLetters(word.toLowerCase())

    let phoneticallySpelledWord = word // initial spelling

    if (identifiedLetters[0] === 's' && identifiedLetters[1] === 'k') {
      if (identifiedConsonantSound === 'sj') {
        phoneticallySpelledWord = 'sj' + word.slice(2)
      }
    } else if (identifiedLetters[0] !== identifiedConsonantSound) {
      phoneticallySpelledWord = identifiedConsonantSound + word.slice(1)
    }

    return phoneticallySpelledWord
  }

```

### 5. identifyVowelSounds (word)
```
identifyVowelSounds (word) {
    const identifiedLetters = this.wordSplitter.separateLetters(word.toLowerCase())

    let identifiedVowelSound = []

    for (let i = 0; i < identifiedLetters.length; i++) {
      if (this.allVowels.includes(identifiedLetters[i])) {
        if (!this.checkCombinedShortSoundRequirements(identifiedLetters, i)) {
          identifiedVowelSound.push(identifiedLetters[i].toUpperCase())
        } else {
          identifiedVowelSound.push(identifiedLetters[i])
        }
      }
    } return identifiedVowelSound
  }
```