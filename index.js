const fs = require('fs');
const _ = require('lodash')
const Papa = require('papaparse')
const extractGuideWords = require('./extractGuideWords')
const extractOraccGuideWords = require('./extractOraccGuideWords')

const words = require('./words.json')
const entries = require('./oraccGlossary.json').entries

const eblGuideWords = extractGuideWords(words)
const oraccGuideWords = extractOraccGuideWords(entries)

console.log(`Successfully parsed ${_(eblGuideWords).map('guideWord').filter(_.negate(_.isNil)).size()} of ${eblGuideWords.length} eBL words.`)

const eblLemmas = _(eblGuideWords).map('lemma').uniq().value()
const oraccLemmas = _(oraccGuideWords).map('lemma').uniq().value()

console.log(`eBL lemmas: ${eblLemmas.length}.`)
console.log(`ORACC lemmas: ${oraccLemmas.length}.`)
console.log(`Common lemmas: ${_.intersection(eblLemmas, oraccLemmas).length}.`)
console.log(`Extra ORACC lemmas: ${_.difference(oraccLemmas, eblLemmas).length}.`)

const ebl = _(eblGuideWords).groupBy('lemma').mapValues((guideWords, lemma) => ({
    lemma,
    eblGuideWords: _.map(guideWords, 'guideWord')
})).value()
const oracc = _(oraccGuideWords).groupBy('lemma').mapValues((guideWords, lemma) => ({
    lemma,
    oraccGuideWords: _.map(guideWords, 'guideWord')
})).value()

fs.writeFileSync('guide-words.csv', Papa.unparse(_(ebl).merge(oracc).values().value(), {
    columns: ['lemma', 'eblGuideWords', 'oraccGuideWords']
}))
