import { SwedishPhonicsChecker } from '../../../js/Module/swedish-phonics-module.js'

const templateVowelButton = document.createElement('template')
templateVowelButton.innerHTML = `
<div>
  <button id="vowelButton"></button>
  div id="additionalButtons">
    <div id="vowelSound">
      <button id="buttonVowelSound">Vowel sound</button>
      <p id="vowelSoundTest></p>
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
</div> `

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

    this.vowel = 'a'
    this.vowelButton = this.shadowRoot.querySelector('#vowelButton')
    this.additionalButtons = this.shadowRoot.querySelector('#additionalButtons')
    this.buttonVowelSound = this.shadowRoot.querySelector('#buttonVowelSound')
    this.buttonSwedishExample = this.shadowRoot.querySelector('#buttonSwedishExample')
    this.buttonEnglishExample = this.shadowRoot.querySelector('#buttonEnglishExample')

    // Add event listener to the vowelButton element
    this.vowelButton.addEventListener('click', () => {
      // Toggle the visibility of additionalButtons when the vowel button is clicked
      this.additionalButtons.style.display =
        this.additionalButtons.style.display === 'none' ? 'block' : 'none'

      // Display the appropriate content in the <p> elements
      if (this.additionalButtons.style.display === 'block') {
        this.displayVowelSound()
        this.displaySwedishExample()
        this.displayEnglishExample()
      }
    })
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
    const vowelSound = SwedishPhonicsChecker.getVowelSound(this.vowel)
    this.shadowRoot.querySelector('#vowelSoundText').textContent = `The vowel sound is: ${vowelSound}`
  }

  /**
   * Inserts the Swedish example of the vowel.
   */
  displaySwedishExample () {
    const swedishExample = SwedishPhonicsChecker.getSwedishExample(this.vowel)
    this.shadowRoot.querySelector('#swedishExampleText').textContent = `The Swedish example is: ${swedishExample}`
  }

  /**
   * Inserts the English example of the vowel.
   */
  displayEnglishExample () {
    const englishExample = SwedishPhonicsChecker.getEnglishExample(this.vowel)
    this.shadowRoot.querySelector('#englishExampleText').textContent = `The English example is: ${englishExample}`
  }
}

customElements.define('vowel-button', VowelButton)
