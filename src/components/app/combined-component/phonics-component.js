/* eslint-disable no-unused-vars */
import { SwedishPhonicsChecker } from '../../modules/swedish-phonics-module.js'
import { ConsonantComponent } from '../consonant-component/consonant-component.js'
import { VowelComponent } from '../vowel-component/vowel-component.js'

const templatePhonicsComponent = document.createElement('template')
templatePhonicsComponent.innerHTML = `
<style>
  .phonics-container {
      font-family: Arial, sans-serif;
      padding: 20px;
      border: 1px solid #ccc;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    margin: 0;
    margin-bottom: 20px;
  }

  .phonics-buttons {
      margin-bottom: 20px;
  }

  button {
      margin-right: 10px;
  }
</style>


  <div class="phonics-container">
      <!-- Form for input -->
      <form class="phonics-form">
          <!-- Input text field -->
          <div class="phonics-input">
              <input type="text" placeholder="Enter text here...">
          </div>

          <!-- Three buttons underneath text box -->
          <div class="phonics-buttons">
              <button type="button" id="consonantButton">Learn about the consonants</button>
              <button type="button" id="vowelButton">Learn about the vowels</button>
              <button type="button" id="combinedButton">See combined phonetic spelling</button>
          </div>
      </form>

      <!-- Div for information -->
      <div class="phonics-info">
          <!-- Information will appear here -->
      </div>
  </div>
`
/**
 * This is a custom element to identify phonetic sounds of Swedish words.
 */
export class PhonicsComponent extends HTMLElement {
  /**
   * Creates an instance of PhonicsComponent.
   */
  constructor () {
    super()

    this.attachShadow({ mode: 'open' }).appendChild(templatePhonicsComponent.content.cloneNode(true))

    this.inputField = this.shadowRoot.querySelector('input')
    this.consonantButton = this.shadowRoot.querySelector('#consonantButton')
    this.vowelButton = this.shadowRoot.querySelector('#vowelButton')
    this.combinedButton = this.shadowRoot.querySelector('#combinedButton')
    this.infoDiv = this.shadowRoot.querySelector('.phonics-info')

    // Bind event handlers to keep the correct context of 'this'
    this.insertConsonantComponent = this.insertConsonantComponent.bind(this)
    this.insertVowelComponent = this.insertVowelComponent.bind(this)
    this.insertCombinedComponent = this.insertCombinedComponent.bind(this)

    this.swedishPhonicsChecker = new SwedishPhonicsChecker()
  }

  /**
   * Called after the element is inserted into the DOM.
   */
  connectedCallback () {
    this.consonantButton.addEventListener('click', this.insertConsonantComponent)
    this.vowelButton.addEventListener('click', this.insertVowelComponent)
    this.combinedButton.addEventListener('click', this.insertCombinedComponent)
  }

  /**
   * Called after the element has been removed from the DOM.
   */
  disconnectedCallback () {
    this.consonantButton.removeEventListener('click', this.insertConsonantComponent)
    this.vowelButton.removeEventListener('click', this.insertVowelComponent)
    this.combinedButton.removeEventListener('click', this.insertCombinedComponent)
  }

  /**
   * Inserts the consonant component.
   */
  insertConsonantComponent () {
    this.clearInfoDiv()
    if (this.handleEmptyInput()) {
      return
    }
    this.explainMultipleWords(this.inputField.value)
    const consonantComponent = this.prepareComponent(document.createElement('consonant-component'), this.inputField.value)
    this.infoDiv.appendChild(consonantComponent)
  }

  /**
   * Inserts the vowel component.
   */
  insertVowelComponent () {
    this.clearInfoDiv()
    if (this.handleEmptyInput()) {
      return
    }
    const vowelComponent = this.prepareComponent(document.createElement('vowel-component'), this.inputField.value)
    this.infoDiv.appendChild(vowelComponent)
  }

  /**
   * Inserts the combined component.
   */
  insertCombinedComponent () {
    this.clearInfoDiv()
    if (this.handleEmptyInput()) {
      return
    }
    const combinedDiv = document.createElement('div')
    const title = document.createElement('h2')
    title.textContent = 'Combined phonetic spelling'
    this.infoDiv.appendChild(title)

    const consonantSpelling = this.swedishPhonicsChecker.phoneticConsonantSpelling(this.inputField.value)
    const vowelSpelling = this.swedishPhonicsChecker.phoneticVowelSpelling(consonantSpelling)

    combinedDiv.innerHTML = `The phonetic spelling of ${this.inputField.value} is ${vowelSpelling}`
    this.infoDiv.appendChild(combinedDiv)
  }

  /**
   * Utilises the return all words in string despite feature not having been implemented yet.
   *
   * @param {string} input from the user.
   */
  explainMultipleWords (input) {
    if (this.swedishPhonicsChecker.returnAllWordsInString(input).length > 1) {
      const explanationDiv = document.createElement('div')
      explanationDiv.innerHTML = 'The app currently only supports one word at a time. You will only see information about the first word.'
      this.infoDiv.appendChild(explanationDiv)
    }
  }

  /**
   * Clears the information div.
   */
  clearInfoDiv () {
    this.infoDiv.innerHTML = ''
  }

  /**
   * Prepares the component by setting the word before it's attached to the DOM.
   *
   * @param {HTMLElement} component The component to be prepared.
   * @param {string} word The word to be set.
   * @returns {HTMLElement} The prepared component.
   */
  prepareComponent (component, word) {
    component.setWord(word)
    return component
  }

  /**
   * Helper function to handle empty input field.
   *
   * @returns {boolean} True if the input field is empty, false otherwise.
   */
  handleEmptyInput () {
    if (this.inputField.value === '') {
      this.infoDiv.textContent = 'Please enter a word.'
      return true // Indicates that the input is empty
    }
    return false // Indicates that the input is not empty
  }
}

customElements.define('phonics-component', PhonicsComponent)
