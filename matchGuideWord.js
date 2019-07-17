
module.exports = function matchGuideWord (meaning) {
  const regExp = new RegExp('(\\\\")(\\D+?)(\\\\|,|;|\\s[A-Z])')
  const match = regExp.exec(meaning)
  return match[2]
}

