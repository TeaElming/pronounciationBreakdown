import { SwedishPhonicsChecker } from "../../../js/Module/swedish-phonics-module.js"

const template1 = document.createElement('template')
template1.innerHTML = `
<div>
  <h1>Vowel Checker</h1>
  <div id="vowelSound">
  </div>
  <div id="phoneticSpelling">
  </div>
</div> `

// In the vowelSOund, each vowel shouljd be turned into a button
