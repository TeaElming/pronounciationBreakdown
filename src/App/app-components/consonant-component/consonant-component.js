import { SwedishPhonicsChecker } from '../../../js/Module/swedish-phonics-module.js'

const templateConsonantComponent = document.createElement('template')
templateConsonantComponent.innerHTML = `
<style>
  div {
    background-color: #f5f5f5;
    border: 1px solid #ddd;
  }
</style>
<div>
  <h1>Consonant Checker</h1>
  <div id="consonantSound">
  </div>
  <div id="phoneticSpelling">
  </div>
</div> `

/**
 * This is a custom element that checks the consonant sound of a Swedish word.
 *
 * @class ConsonantComponent
 */
export class ConsonantComponent extends HTMLElement {
  /**
   * Creates an instance of ConsonantComponent.
   */
  constructor () {
    super()

    this.attachShadow({ mode: 'open' }).appendChild(templateConsonantComponent.content.cloneNode(true))

    this.swedishPhonicsChecker = new SwedishPhonicsChecker()

    this.wordToCheck = 'hej'
    this.soundDiv = this.shadowRoot.querySelector('#consonantSound')
    this.spellingDiv = this.shadowRoot.querySelector('#phoneticSpelling')
  }

  /**
   * Called after the element is inserted into the DOM.
   */
  connectedCallback () {
    this.insertConsonantSound()
    this.insertPhoneticSpelling()
  }

  /**
   * Called after the element has been removed from the DOM.
   */
  disconnectedCallback () {
    this.wordToCheck = null
    this.soundDiv = null
    this.spellingDiv = null
  }

  /**
   * Called after the element has been moved to a new document.
   *
   * @param {string} inputWord - The word to check.
   */
  setWord (inputWord) {
    this.wordToCheck = inputWord
  }

  /**
   * Inserts the consonant sound of the word to check.
   */
  insertConsonantSound () {
    const consonantSound = this.swedishPhonicsChecker.returnInitialConsonantSound(this.wordToCheck)

    this.soundDiv.innerHTML = `The initial phonetic consonant sound of ${this.wordToCheck} is ${consonantSound}`
  }

  /**
   * Inserts the phonetic spelling of the word to check.
   */
  insertPhoneticSpelling () {
    const phoneticSpelling = this.swedishPhonicsChecker.phoneticConsonantSpelling(this.wordToCheck)

    this.spellingDiv.innerHTML = `The phonetic spelling of ${this.wordToCheck} is ${phoneticSpelling}`
  }
}

customElements.define('consonant-component', ConsonantComponent)
