const _ = require('lodash')
const extractGuideWords = require('./extractGuideWords')
const extractOraccGuideWords = require('./extractOraccGuideWords')

const words = require('./words.json')
const entries = require('./oraccGlossary.json').entries

const eblGuideWords = extractGuideWords(words)
const oraccGuideWords = extractOraccGuideWords(entries)

console.log(`Successfully parsed ${_.filter(eblGuideWords, _.negate(_.isNil)).length} of ${eblGuideWords.length} eBL words.`)
