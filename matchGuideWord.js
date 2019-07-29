const { Lexer, Tagger } = require('pos')

const defaultGuideWord = ''

function checkForGeneralisedMeaning (meaning) {
  const match = /^\(\D+\)/.exec(meaning)
  return match ? match[0] : defaultGuideWord
}

function checkForVerb (meaning) {
  const match = /(")(to\s)(\D+?)("|,|;|\s[A-Z])/.exec(meaning)
  if (match) {
    const firstMeaning = match[3]
    const words = new Lexer().lex(firstMeaning)
    const [[, tag]] = new Tagger().tag(words)
    return tag === 'VB' ? firstMeaning : `to ${firstMeaning}`
  } else {
    return defaultGuideWord
  }
}

function checkForUnknownMeaning (meaning) {
  return /mng\. unkn\./.test(meaning)
    ? 'meaning unknown'
    : defaultGuideWord
}

module.exports = function matchGuideWord (meaning) {
  const match = /(")(\D+?)("|,|;|\s[A-Z])/.exec(meaning)
  return match
    ? checkForVerb(match[0]) || match[2]
    : checkForUnknownMeaning(meaning) || checkForGeneralisedMeaning(meaning)
}
