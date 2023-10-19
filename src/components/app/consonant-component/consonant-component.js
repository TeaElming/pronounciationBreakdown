import { SwedishPhonicsChecker } from '../../modules/swedish-phonics-module.js'

const templateConsonantComponent = document.createElement('template')
templateConsonantComponent.innerHTML = `
<style>
  #consonantInformation {
    background-color: #f7f3f3;
    padding: 5px;
  }
</style>
<div>
  <h2>Consonant Checker</h2>
  <div id="consonantSound">
  </div>
  <div id="phoneticSpelling">
  </div>
  <div id="consonantInformation">
    <p>There are two main consonant sounds to be aware of: ‘sj’ and ‘tj’. The following pronunciation advice are for native English speakers. If you are a native speaker of another language, you may find that the pronunciation advice below is not helpful.</p>
    <p><i>sj<i> – think ‘hw’. The word ‘sju’ is pronounced ‘hwoo’ – it is an odd sound in the back of your throat, almost like the wind whistling in the trees.</p>
    <p><i>tj</i> – think ‘sh’ as in ‘shop’. The Swedish word for ‘twenty’ is ‘tjugo’, pronounced ‘SHOE-goh.
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

    this.consonantInformationDiv = this.shadowRoot.querySelector('#consonantInformation')
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
