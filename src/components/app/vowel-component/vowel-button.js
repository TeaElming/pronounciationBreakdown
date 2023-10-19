import { SwedishPhonicsChecker } from '../../../js/Module/swedish-phonics-module.js'

const templateVowelButton = document.createElement('template')
templateVowelButton.innerHTML = `
<style>
 #wholeButton {
  box-shadow: 0 0px 1px rgba(0,0,0,0.1);
  margin: 2px;
 }

  /* Style for vowelButton */
  #vowelButton {
    padding: 5px;
    margin: 5px;
  }

  /* Style for additionalButtons */
  #additionalButtons button {
    width: auto; /* Let the content determine the width */
    display: inline-block; /* Make buttons inline-block to have the same width */
    margin-right: 10px; /* Add some spacing between buttons */
  }
</style>


<div id="wholeButton">
  <button id="vowelButton"></button>
  <div id="additionalButtons">
    <div id="vowelSound">
      <button id="buttonVowelSound">Vowel sound</button>
      <p id="vowelSoundText"></p>
    </div>
    <div id="swedishExample">
      <button id="buttonSwedishExample">Swedish example</button>
      <p id="swedishExampleText"></p>
    </div>
    <div id="englishExample">
      <button id="buttonEnglishExample">English example</button>
      <p id="englishExampleText"></p>
    </div>
  </div>
</div>`

/**
 * This is a custom element that checks the vowel sound of a Swedish word.
 */
export class VowelButton extends HTMLElement {
  /**
   * Creates an instance of VowelButton.
   */
  constructor () {
    super()

    this.attachShadow({ mode: 'open' }).appendChild(templateVowelButton.content.cloneNode(true))

    this.swedishPhonicsChecker = new SwedishPhonicsChecker()

    this.vowel = 'a'
    this.vowelButton = this.shadowRoot.querySelector('#vowelButton')
    this.additionalButtons = this.shadowRoot.querySelector('#additionalButtons')
    this.buttonVowelSound = this.shadowRoot.querySelector('#buttonVowelSound')
    this.buttonSwedishExample = this.shadowRoot.querySelector('#buttonSwedishExample')
    this.buttonEnglishExample = this.shadowRoot.querySelector('#buttonEnglishExample')

    this.additionalButtons.style.display = 'none'

    this.vowelButton.addEventListener('click', () => {
      if (this.additionalButtons.style.display === 'none') {
        this.additionalButtons.style.display = 'block'
        // Reset the visibility of all text elements when displaying additionalButtons
        this.shadowRoot.querySelector('#vowelSoundText').style.display = 'block'
        this.shadowRoot.querySelector('#swedishExampleText').style.display = 'block'
        this.shadowRoot.querySelector('#englishExampleText').style.display = 'block'
      } else {
        this.additionalButtons.style.display = 'none'
      }
    })

    // Add event listeners to the inner buttons
    this.buttonVowelSound.addEventListener('click', () => {
      this.toggleVisibility('#vowelSoundText')
    })
    this.buttonSwedishExample.addEventListener('click', () => {
      this.toggleVisibility('#swedishExampleText')
    })
    this.buttonEnglishExample.addEventListener('click', () => {
      this.toggleVisibility('#englishExampleText')
    })
  }

  /**
   * Called after the element is inserted into the DOM.
   */
  connectedCallback () {
    this.setVowelButton()
    this.displayVowelSound()
    this.displaySwedishExample()
    this.displayEnglishExample()
  }

  /**
   * Toggle tool for any element.
   *
   * @param {string} selector - The selector to toggle visibility of.
   */
  toggleVisibility (selector) {
    const element = this.shadowRoot.querySelector(selector)
    element.style.display = element.style.display === 'none' ? 'block' : 'none'
  }

  /**
   * Called after the element is inserted into the DOM.
   *
   * @param {string} inputVowel a vowel.
   */
  setVowel (inputVowel) {
    this.vowel = inputVowel
  }

  /**
   * Sets the innerHTML of the vowelButton element.
   */
  setVowelButton () {
    this.vowelButton.innerHTML = this.vowel
  }

  /**
   * Inserts the vowel sound of the vowel.
   */
  displayVowelSound () {
    const vowelSound = this.swedishPhonicsChecker.returnVowelSoundExplanation(this.vowel)
    this.shadowRoot.querySelector('#vowelSoundText').textContent = `The vowel sound is: ${vowelSound}`
  }

  /**
   * Inserts the Swedish example of the vowel.
   */
  displaySwedishExample () {
    const swedishExample = this.swedishPhonicsChecker.returnVowelExample(this.vowel)
    this.shadowRoot.querySelector('#swedishExampleText').textContent = `The Swedish example is: ${swedishExample}`
  }

  /**
   * Inserts the English example of the vowel.
   */
  displayEnglishExample () {
    const englishExample = this.swedishPhonicsChecker.returnVowelEnglishExample(this.vowel)
    this.shadowRoot.querySelector('#englishExampleText').textContent = `The English example is: ${englishExample}`
  }
}

customElements.define('vowel-button', VowelButton)
