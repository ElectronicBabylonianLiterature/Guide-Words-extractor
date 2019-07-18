
function checkForGeneralisedMeaning (meaning) {
  const regExp = new RegExp('^\\(\\D+\\)')
  const match = regExp.exec(meaning)
  return match !== null ? match[0] : ""
}

module.exports = function matchGuideWord (meaning) {
  const regExp = new RegExp('(\\\\")(\\D+?)(\\\\"|,|;|\\s[A-Z])')
  const match = regExp.exec(meaning)
  if (match !== null) {
    return match[2]
} else {
  return checkForGeneralisedMeaning(meaning)
}
}