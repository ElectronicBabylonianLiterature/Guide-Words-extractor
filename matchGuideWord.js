const pos = require('pos')

function checkForGeneralisedMeaning (meaning) {
  const regExp = new RegExp('^\\(\\D+\\)')
  const match = regExp.exec(meaning)
  return match !== null ? match[0] : ""
}

function checkForVerb (meaning) {
  const regExp = new RegExp('(\\\\")(to\\s)(\\D+?)(\\\\"|,|;|\\s[A-Z])')
  const match = regExp.exec(meaning)
  if (match !== null) {
    const tagger = new pos.Tagger()
    const matchAsArray = match[3].split(' ')
    const onlySecondWord = matchAsArray[0]
    const word = new pos.Lexer().lex(`${onlySecondWord}`);
    const tagged = tagger.tag(word)
    return tagged [0][1] === 'VB' ? match[3] : `to ${match[3]}`
  } else {
    return ''
  } 
}

function checkForUnknownMeaning (meaning) {
  const regExp = new RegExp('mng. unkn.')
  const match = regExp.exec(meaning)
  if (match !== null) {
    const replacedMatch = match.join('').replace(/mng. unkn./g, 'meaning unknown')
    return replacedMatch
  } else {
    return ''
  }
}

module.exports = function matchGuideWord (meaning) { 
  const regExp = new RegExp('(\\\\")(\\D+?)(\\\\"|,|;|\\s[A-Z])')
  const match = regExp.exec(meaning)
  if (match !== null) {
    return checkForVerb(meaning) !== ''
      ? checkForVerb(meaning)
      : match[2]
  } else {
    return checkForUnknownMeaning(meaning) !== "" 
      ? checkForUnknownMeaning(meaning)
      : checkForGeneralisedMeaning(meaning) !== ""
        ? checkForGeneralisedMeaning(meaning)
        : ''
}
}