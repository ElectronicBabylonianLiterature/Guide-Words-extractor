
module.exports = function matchGuideWord (meaning) {
  const match = /(\\"t?o?\s?)(\D+?)(,|;)/.exec(meaning)
  return match[2]

}

