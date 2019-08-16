const _ = require('lodash')
const matchGuideWord = require('./matchGuideWord')

function checkForAmplifiedMeanings (word) {
  return _(word.amplifiedMeanings).map(({ meaning, entries }) => matchGuideWord(meaning) || checkForEntries(entries))
    .reject(_.isEmpty)
    .first() || ''
}

function checkForEntries (entries) {
  return _(entries)
    .map('meaning')
    .map(matchGuideWord)
    .reject(_.isEmpty)
    .first() || ''
}

function extractGuideWord (word) {
  return matchGuideWord(word.meaning) || checkForAmplifiedMeanings(word)
}

module.exports = function extractGuideWords (words) {
  return words.map(word => ({
    lemma: word.lemma.join(' '),
    eblHomonym: word.homonym,
    eblGuideWord: extractGuideWord(word),
    legacyEntry: word.source || null
  }))
}
