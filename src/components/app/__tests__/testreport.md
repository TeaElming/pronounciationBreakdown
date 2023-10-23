# Test Report

## Table Of Contents
- [Test Report](#test-report)
  - [Table Of Contents](#table-of-contents)
  - [Use Cases](#use-cases)
    - [Use Case 1 - Prepare Component](#use-case-1---prepare-component)
        - [TC 1 - Consonant](#tc-1---consonant)
      - [Expected Outcome](#expected-outcome)
        - [TC 2 - Vowel](#tc-2---vowel)
      - [Expected Outcome](#expected-outcome-1)
    - [Use Case 2 - Handle Empty Input](#use-case-2---handle-empty-input)
      - [TC 1 - Empty Input](#tc-1---empty-input)
      - [Expected Outcome:](#expected-outcome-2)
      - [TC 2 - Non-Empty Input](#tc-2---non-empty-input)
      - [Expected Outcome:](#expected-outcome-3)
    - [Use Case 3 - Clear Info Div](#use-case-3---clear-info-div)
      - [TC 1 - Clear Info Div](#tc-1---clear-info-div)
      - [Expected Outcome:](#expected-outcome-4)
    - [Use Case 4 - Explain Multiple Words](#use-case-4---explain-multiple-words)
      - [TC 1 - Multiple Words](#tc-1---multiple-words)
      - [Expected Outcome:](#expected-outcome-5)
    - [Use Case 5 - Insert Combined Component](#use-case-5---insert-combined-component)
      - [TC 1 - Insert Combined Component](#tc-1---insert-combined-component)
      - [Expected Outcome:](#expected-outcome-6)
    - [Use Case 6 - Insert Vowel Component](#use-case-6---insert-vowel-component)
      - [TC 1 - Insert Vowel Component](#tc-1---insert-vowel-component)
      - [Expected Outcome:](#expected-outcome-7)
    - [Use Case 7 - Insert Consonant Component](#use-case-7---insert-consonant-component)
      - [TC 1 - Insert Consonant Component](#tc-1---insert-consonant-component)
      - [Expected Outcome:](#expected-outcome-8)
    - [Use Case 8 - Handle Form Submit](#use-case-8---handle-form-submit)
      - [TC 1 - Form Submission](#tc-1---form-submission)
      - [Expected Outcome:](#expected-outcome-9)
  - [Table of Outcomes](#table-of-outcomes)
  - [Table of Outcomes](#table-of-outcomes-1)

## Use Cases

### Use Case 1 - Prepare Component
Description: Verifies that prepareComponent sets the word on PhonicsComponent.

##### TC 1 - Consonant
The component specification `document.createElement('consonant-component')` and a word (`test`) are enetred into the component.

#### Expected Outcome
A consonant component with the set word are created.

##### TC 2 - Vowel
The component specification `document.createElement('vowel-component')` and a word (`test`) are enetred into the component.

#### Expected Outcome
A vowel component with the set word are created.

### Use Case 2 - Handle Empty Input

Description: Verifies that the application handles empty input fields correctly.

#### TC 1 - Empty Input

An empty input field is submitted.

#### Expected Outcome:
The application displays an error message requesting the user to enter a word.

#### TC 2 - Non-Empty Input

A non-empty input field is submitted.

#### Expected Outcome:
The application proceeds to perform the requested action.


### Use Case 3 - Clear Info Div

Description: Verifies that the information div is cleared.

#### TC 1 - Clear Info Div

The information div is cleared.

#### Expected Outcome:
The information div is empty.

### Use Case 4 - Explain Multiple Words

Description: Verifies that the application explains the limitation when multiple words are entered.

#### TC 1 - Multiple Words

Multiple words are entered.

#### Expected Outcome:
The application informs the user that it currently supports only one word at a time and displays information about the first word.


### Use Case 5 - Insert Combined Component

Description: Verifies that the combined phonetic spelling component is inserted.

#### TC 1 - Insert Combined Component

The "See combined phonetic spelling" button is clicked.

#### Expected Outcome:
The combined phonetic spelling component is inserted with the appropriate information.

### Use Case 6 - Insert Vowel Component

Description: Verifies that the vowel phonetic spelling component is inserted.

#### TC 1 - Insert Vowel Component

The "Learn about the vowels" button is clicked.

#### Expected Outcome:
The vowel phonetic spelling component is inserted with the appropriate information.


### Use Case 7 - Insert Consonant Component

Description: Verifies that the consonant phonetic spelling component is inserted.

#### TC 1 - Insert Consonant Component

The "Learn about the consonants" button is clicked.

#### Expected Outcome:
The consonant phonetic spelling component is inserted with the appropriate information.


### Use Case 8 - Handle Form Submit

Description: Verifies that the form submission is handled correctly.

#### TC 1 - Form Submission

The form is submitted.

#### Expected Outcome:
The combined phonetic spelling component is inserted as a default action.

## Table of Outcomes

## Table of Outcomes

| Use Case     | TC   | Pass | Fail |
|--------------|------|------|------|
| UC1          | TC1  | yes  |      |
|              | TC 2 | yes  |      |
|              |      |      |      |
| UC2          | TC1  | yes  |      |
|              | TC 2 | yes  |      |
|              |      |      |      |
| UC3          | TC1  | yes  |      |
|              |      |      |      |
| UC4          | TC1  | yes  |      |
|              |      |      |      |
| UC5          | TC1  | yes  |      |
|              |      |      |      |
| UC6          | TC1  | yes  |      |
|              |      |      |      |
| UC7          | TC1  | yes  |      |
|              |      |      |      |
| UC8          | TC1  | yes  |      |
|              |      |      |      |
| Success Rate |      | 100% |      |