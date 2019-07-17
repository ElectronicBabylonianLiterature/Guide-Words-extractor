
module.exports = function matchGuideWord (meaning) {
  const regExp = new RegExp('(\\\\"t?o?\\s?)(\\D+?)(,|;)')
  const match = regExp.exec(meaning)
  return match[2]
}

