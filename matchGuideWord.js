const { Lexer, Tagger } = require('pos')

const defaultGuideWord = ''

function checkForGeneralisedMeaning (meaning) {
  const match = /\((\D+?)\)(\??)( |$)/.exec(meaning)
  return match ? `(${match[1]}${match[2]})` : defaultGuideWord
}

function checkForVerb (definition) {
  const words = new Lexer().lex(definition)
  const tags = new Tagger().tag(words).map(([, tag]) => tag)
  return tags[0] === 'TO' && tags[1] === 'VB' ? definition.substring(3) : defaultGuideWord
}

function checkForUnknownMeaning (meaning) {
  return /mng\. unkn\./.test(meaning)
    ? '(meaning unknown)'
    : defaultGuideWord
}

module.exports = function matchGuideWord (meaning) {
  const match = /"(\D+?)([,;].*?)?"(\??)/.exec(meaning)
  return match
    ? checkForVerb(match[1]) || `${match[1]}${match[3]}`
    : checkForUnknownMeaning(meaning) || checkForGeneralisedMeaning(meaning)
}
