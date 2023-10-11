/* eslint-disable jsdoc/require-jsdoc */
export class VowelPhoneticallyExplained {
  returnVowelSound (vowel) {
    switch (vowel) { // user will have to insert  vowel
      case 'a':
        return this.shortA_sound()
      case 'A':
        return this.longA_sound()
      case 'e':
        return this.shortE_sound()
      case 'E':
        return this.longE_sound()
      case 'i':
        return this.shortI_sound()
      case 'I':
        return this.longI_sound()
      case 'o':
        return this.shortO_sound()
      case 'O':
        return this.longO_sound()
      case 'u':
        return this.shortU_sound()
      case 'U':
        return this.longU_sound()
      case 'y':
        return this.shortY_sound()
      case 'Y':
        return this.longY_sound()
      case 'å':
        return this.shortÅ_sound()
      case 'Å':
        return this.longÅ_sound()
      case 'ä':
        return this.shortÄ_sound()
      case 'Ä':
        return this.longÄ_sound()
      case 'ö':
        return this.shortÖ_sound()
      case 'Ö':
        return this.longÖ_sound()
    }
  }

  returnVowelExample (vowel) {
    switch (vowel) { // user will have to insert  vowel
      case 'a':
        return this.shortA_example()
      case 'A':
        return this.longA_example()
      case 'e':
        return this.shortE_example()
      case 'E':
        return this.longE_example()
      case 'i':
        return this.shortI_example()
      case 'I':
        return this.longI_example()
      case 'o':
        return this.shortO_example()
      case 'O':
        return this.longO_example()
      case 'u':
        return this.shortU_example()
      case 'U':
        return this.longU_example()
      case 'y':
        return this.shortY_example()
      case 'Y':
        return this.longY_example()
      case 'å':
        return this.shortÅ_example()
      case 'Å':
        return this.longÅ_example()
      case 'ä':
        return this.shortÄ_example()
      case 'Ä':
        return this.longÄ_example()
      case 'ö':
        return this.shortÖ_example()
      case 'Ö':
        return this.longÖ_example()
    }
  }

  returnVowelEnglishExample (vowel) {
    switch (vowel) { // user will have to insert  vowel
      case 'a':
        return this.shortA_englishExample()
      case 'A':
        return this.longA_englishExample()
      case 'e':
        return this.shortE_englishExample()
      case 'E':
        return this.longE_englishExample()
      case 'i':
        return this.shortI_englishExample()
      case 'I':
        return this.longI_englishExample()
      case 'o':
        return this.shortO_englishExample()
      case 'O':
        return this.longO_englishExample()
      case 'u':
        return this.shortU_englishExample()
      case 'U':
        return this.longU_englishExample()
      case 'y':
        return this.shortY_englishExample()
      case 'Y':
        return this.longY_englishExample()
      case 'å':
        return this.shortÅ_englishExample()
      case 'Å':
        return this.longÅ_englishExample()
      case 'ä':
        return this.shortÄ_englishExample()
      case 'Ä':
        return this.longÄ_englishExample()
      case 'ö':
        return this.shortÖ_englishExample()
      case 'Ö':
        return this.longÖ_englishExample()
    }
  }

  shortA_sound () {
    return 'ah'
  }

  shortA_example () {
    const SwedishSpelling = 'affär'
    const phoneticSpelling = 'ahff-AIR'
    const translatedMeaning = 'shop (noun)'
    return `${SwedishSpelling} : ''${phoneticSpelling}' ~ meaning: ${translatedMeaning}`
  }

  shortA_englishExample () {
    return 'cat'
  }

  longA_sound () {
    return 'AA'
  }

  longA_example () {
    const SwedishSpelling = 'apa'
    const phoneticSpelling = 'AA-pah'
    const translatedMeaning = 'monkey (noun)'
    return `${SwedishSpelling} : '${phoneticSpelling}' ~ meaning: ${translatedMeaning}`
  }

  longA_englishExample () {
    return 'art'
  }

  shortE_sound () {
    return 'eh'
  }

  shortE_example () {
    const SwedishSpelling = 'eld'
    const phoneticSpelling = 'ehlld'
    const translatedMeaning = 'fire (noun)'
    return `${SwedishSpelling} : ''${phoneticSpelling}' ~ meaning: ${translatedMeaning}`
  }

  shortE_englishExample () {
    return 'neck'
  }

  longE_sound () {
    return 'EA'
  }

  longE_example () {
    const SwedishSpelling = 'ek'
    const phoneticSpelling = 'ek-k'
    const translatedMeaning = 'oak (noun)'
    return `${SwedishSpelling} : ''${phoneticSpelling}' ~ meaning: ${translatedMeaning}`
  }

  longE_englishExample () {
    return 'ear'
  }

  shortI_sound () {
    return 'ih'
  }

  shortI_example () {
    const SwedishSpelling = 'inte'
    const phoneticSpelling = 'INN-teh'
    const translatedMeaning = 'not (adverb)'
    return `${SwedishSpelling} : '${phoneticSpelling}' ~ meaning: ${translatedMeaning}`
  }

  shortI_englishExample () {
    return 'did'
  }

  longI_sound () {
    return 'EE'
  }

  longI_example () {
    const SwedishSpelling = 'is'
    const phoneticSpelling = 'ees'
    const translatedMeaning = 'ice (noun)'
    return `${SwedishSpelling} : '${phoneticSpelling}' ~ meaning: ${translatedMeaning}`
  }

  longI_englishExample () {
    return 'bee'
  }

  shortO_sound () {
    return 'oh'
  }

  shortO_example () {
    const SwedishSpelling = 'och'
    const phoneticSpelling = 'ock'
    const translatedMeaning = 'and (conjunction)'
    return `${SwedishSpelling} : '${phoneticSpelling}' ~ meaning: ${translatedMeaning}`
  }

  shortO_englishExample () {
    return 'olives'
  }

  longO_sound () {
    return 'ooh'
  }

  longO_example () {
    const SwedishSpelling = 'olika'
    const phoneticSpelling = 'ooh-LEAK-ah'
    const translatedMeaning = 'different (adjective)'
    return `${SwedishSpelling} : ''${phoneticSpelling}' ~ meaning: ${translatedMeaning}`
  }

  longO_englishExample () {
    return 'ooh la la'
  }

  shortU_sound () {
    return 'uh'
  }

  shortU_example () {
    const SwedishSpelling = 'ung'
    const phoneticSpelling = 'oung'
    const translatedMeaning = 'young (adjective)'
    return `${SwedishSpelling} : '${phoneticSpelling}' ~ meaning: ${translatedMeaning}`
  }

  shortU_englishExample () {
    return 'mood'
  }

  longU_sound () {
    return 'OO'
  }

  longU_example () {
    const SwedishSpelling = 'slut'
    const phoneticSpelling = 'sloot'
    const translatedMeaning = 'end (noun)'
    return `${SwedishSpelling} : '${phoneticSpelling}' ~ meaning: ${translatedMeaning}`
  }

  longU_englishExample () {
    return 'boot'
  }

  shortY_sound () {
    return 'yh'
  }

  shortY_example () {
    const SwedishSpelling = 'yrke'
    const phoneticSpelling = 'UERR-key'
    const translatedMeaning = 'profession (noun)'
    return `${SwedishSpelling} : '${phoneticSpelling}' ~ meaning: ${translatedMeaning}`
  }

  shortY_englishExample () {
    return 'merry'
  }

  longY_sound () {
    return 'EE-> EEU'
  }

  longY_example () {
    const SwedishSpelling = 'yr'
    const phoneticSpelling = 'uer'
    const translatedMeaning = 'dizzy (adjective)'
    return `${SwedishSpelling} : ''${phoneticSpelling}' ~ meaning: ${translatedMeaning}`
  }

  longY_englishExample () {
    return 'Start by saying the EE sounds, and then shape your lips into an O. No English equivalent sounds available.'
  }

  shortÅ_sound () {
    return 'oh'
  }

  shortÅ_example () {
    const SwedishSpelling = 'ålder'
    const phoneticSpelling = 'OLL-dehr'
    const translatedMeaning = 'age (noun)'
    return `${SwedishSpelling} : '${phoneticSpelling}' ~ meaning: ${translatedMeaning}`
  }

  shortÅ_englishExample () {
    return 'song'
  }

  longÅ_sound () {
    return 'oa (oar)'
  }

  longÅ_example () {
    const SwedishSpelling = 'år'
    const phoneticSpelling = 'oar'
    const translatedMeaning = 'year (noun)'
    return `${SwedishSpelling} : '${phoneticSpelling}' ~ meaning: ${translatedMeaning}`
  }

  longÅ_englishExample () {
    return 'for'
  }

  shortÄ_sound () {
    return 'eh'
  }

  shortÄ_example () {
    const SwedishSpelling = 'äldre'
    const phoneticSpelling = 'ELL-dreh'
    const translatedMeaning = 'older (adjective)'
    return `${SwedishSpelling} : '${phoneticSpelling}' ~ meaning: ${translatedMeaning}`
  }

  shortÄ_englishExample () {
    return 'bear'
  }

  longÄ_sound () {
    return 'AI'
  }

  longÄ_example () {
    const SwedishSpelling = 'äta'
    const phoneticSpelling = 'AI-tah'
    const translatedMeaning = 'eat (verb, base form)'
    return `${SwedishSpelling} : '${phoneticSpelling}' ~ meaning: ${translatedMeaning}`
  }

  longÄ_englishExample () {
    return 'fair'
  }

  shortÖ_sound () {
    return 'u'
  }

  shortÖ_example () {
    const SwedishSpelling = 'öppna'
    const phoneticSpelling = 'UHPP-nah'
    const translatedMeaning = 'open (verb, base form)'
    return `${SwedishSpelling} : '${phoneticSpelling}' ~ meaning: ${translatedMeaning}`
  }

  shortÖ_englishExample () {
    return 'ugly'
  }

  longÖ_sound () {
    return 'U/EA'
  }

  longÖ_example () {
    const SwedishSpelling = 'öl'
    const phoneticSpelling = 'uuhl'
    const translatedMeaning = 'beer (noun)'
    return `${SwedishSpelling} : ''${phoneticSpelling}' ~ meaning: ${translatedMeaning}`
  }

  longÖ_englishExample () {
    return 'burn/earn'
  }
}
