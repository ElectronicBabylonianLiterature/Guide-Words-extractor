const pos = require('pos')

const defaultGuideWord = ''

function checkForGeneralisedMeaning (meaning) {
  const regExp = /^\(\D+\)/
  const match = regExp.exec(meaning)
  return match !== null ? match[0] : defaultGuideWord
}

function checkForVerb (meaning) {
  const regExp = /(")(to\s)(\D+?)("|,|;|\s[A-Z])/
  const match = regExp.exec(meaning)
  if (match) {
    const tagger = new pos.Tagger()
    const words = new pos.Lexer().lex(match[3])
    const tagged = tagger.tag(words)
    return tagged[0][1] === 'VB' ? match[3] : `to ${match[3]}`
  } else {
    return defaultGuideWord
  }
}

function checkForUnknownMeaning (meaning) {
  const regExp = new RegExp('mng. unkn.')
  const match = regExp.exec(meaning)
  if (match !== null) {
    const replacedMatch = match.join('').replace(/mng. unkn./g, 'meaning unknown')
    return replacedMatch
  } else {
    return defaultGuideWord
  }
}

module.exports = function matchGuideWord (meaning) {
  const regExp = /(")(\D+?)("|,|;|\s[A-Z])/
  const match = regExp.exec(meaning)
  if (match !== null) {
    return checkForVerb(match[0]) !== defaultGuideWord
      ? checkForVerb(meaning)
      : match[2]
  } else {
    return checkForUnknownMeaning(meaning) !== defaultGuideWord
      ? checkForUnknownMeaning(meaning)
      : checkForGeneralisedMeaning(meaning) !== defaultGuideWord
        ? checkForGeneralisedMeaning(meaning)
        : defaultGuideWord
  }
}
