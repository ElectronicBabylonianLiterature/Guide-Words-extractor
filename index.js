const fs = require('fs')
const _ = require('lodash')
const Papa = require('papaparse')
const extractGuideWords = require('./extractGuideWords')
const extractOraccGuideWords = require('./extractOraccGuideWords')

const words = require('./words.json')
const entries = require('./oraccGlossary.json').entries

const eblGuideWords = extractGuideWords(words)
const oraccGuideWords = extractOraccGuideWords(entries)

console.log(`Parsed ${eblGuideWords.length} eBL words.`)
console.log(`Empty eBL guide words: ${_(eblGuideWords).map('eblGuideWord').filter(_.isEmpty).size()}`)

oraccGuideWords.forEach(({ citationForm, oraccGuideWord }) => {
  const word = eblGuideWords.find(({ lemma, eblGuideWord }) => citationForm === lemma && oraccGuideWord === eblGuideWord)
  if (word) {
    word.oraccGuideWord = oraccGuideWord
  } else {
    eblGuideWords.push({
      lemma: citationForm,
      oraccGuideWord
    })
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
