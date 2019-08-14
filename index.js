const fs = require('fs')
const _ = require('lodash')
const Papa = require('papaparse')
const extractGuideWords = require('./extractGuideWords')
const extractOraccGuideWords = require('./extractOraccGuideWords')

const words = require('./words.json')
const rinapEntries = require('./oraccGlossary.json').entries
const saaoEntries = require('./gloss-akk.json').entries

const eblGuideWords = extractGuideWords(words)

console.log(`Parsed ${eblGuideWords.length} eBL words.`)
console.log(`Empty eBL guide words: ${_(eblGuideWords).map('eblGuideWord').filter(_.isEmpty).size()}`)

_(rinapEntries)
  .concat(saaoEntries)
  .thru(extractOraccGuideWords)
  .forEach(({ citationForm, oraccGuideWord: newOraccGuideWord }) => {
    const word = eblGuideWords.find(({ lemma, eblGuideWord }) => citationForm === lemma && newOraccGuideWord === eblGuideWord)
    const oraccWord = eblGuideWords.find(({ lemma, oraccGuideWord }) => citationForm === lemma && newOraccGuideWord === oraccGuideWord)
    if (word) {
      addToExistingWord(word, newOraccGuideWord)
    } else if (!oraccWord) {
      createNewWord(citationForm, newOraccGuideWord)
    }
  })

eblGuideWords.forEach(word => {
  word.isMatch = word.eblGuideWord === word.oraccGuideWord
})

console.log(`Common guide words: ${_(eblGuideWords).filter('isMatch').size()}`)
console.log(`Extra ORACC guide words: ${_(eblGuideWords).map('eblHomonym').filter(_.isNil).size()}`)

fs.writeFileSync('guide-words.csv', Papa.unparse(_.sortBy(eblGuideWords, ['lemma', 'eblHomonym']), {
  columns: ['lemma', 'eblHomonym', 'eblGuideWord', 'oraccGuideWord', 'isMatch']
}))

function addToExistingWord (word, newOraccGuideWord) {
  if (word.oraccGuideWord && word.oraccGuideWord !== newOraccGuideWord) {
    createDuplicateWord(word, newOraccGuideWord)
  } else {
    word.oraccGuideWord = newOraccGuideWord
  }
}
function createDuplicateWord (word, newOraccGuideWord) {
  eblGuideWords.push({
    ...word,
    oraccGuideWord: newOraccGuideWord
  })
}

function createNewWord (citationForm, newOraccGuideWord) {
  eblGuideWords.push({
    lemma: citationForm,
    oraccGuideWord: newOraccGuideWord
  })
}
