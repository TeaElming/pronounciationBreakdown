import { SwedishPhonicsChecker } from '../../../js/Module/swedish-phonics-module.js'

const template1 = document.createElement('template')
template1.innerHTML = `
<style>
#vowelSound {
  display: flex;            /* Use flexbox */
  align-items: center;      /* Vertically align items in the center */
}
</style>
<div>
  <h1>Vowel Checker</h1>
  <div id="vowelSound">
  </div>
  <div id="phoneticSpelling">
  </div>
</div> `

/**
 * This is a custom element that checks the vowel sound of a Swedish word.
 */
export class VowelComponent extends HTMLElement {
  /**
   * Creates an instance of VowelComponent.
   */
  constructor () {
    super()

    this.attachShadow({ mode: 'open' }).appendChild(template1.content.cloneNode(true))

    this.swedishPhonicsChecker = new SwedishPhonicsChecker()
    this.inputWord = 'rolig'

    this.vowelSoundDiv = this.shadowRoot.querySelector('#vowelSound')
    this.phoneticSpellingDiv = this.shadowRoot.querySelector('#phoneticSpelling')
  }

  /**
   * Sets the vowel to be checked.
   */
  connectedCallback () {
    this.generateVowelButtons()
    this.generatePhoneticSpelling()
  }

  /**
   * Generates buttons for each vowel sound.
   */
  generateVowelButtons () {
    const vowelSounds = this.swedishPhonicsChecker.returnAllVowelSounds(this.inputWord)
    console.log(vowelSounds)

    // loop through the vowel sounds and create a button for each
    vowelSounds.forEach(vowel => {
      const vowelButton = document.createElement('vowel-button')
      vowelButton.setVowel(vowel)
      this.vowelSoundDiv.appendChild(vowelButton)
    })
  }

  /**
   * Sets the input word.
   *
   * @param {string} word The word to be checked.
   */
  setInputWord (word) {
    this.inputWord = word
  }

  /**
   * Generates the phonetic spelling of the word.
   */
  generatePhoneticSpelling () {
    const phoneticSpelling = this.swedishPhonicsChecker.phoneticVowelSpelling(this.inputWord)

    const phoneticSpellingText = document.createElement('p')
    phoneticSpellingText.innerHTML = phoneticSpelling

    this.phoneticSpellingDiv.appendChild(phoneticSpellingText)
  }
}

customElements.define('vowel-component', VowelComponent)
