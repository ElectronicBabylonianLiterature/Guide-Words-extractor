const matchGuideWord = require('./matchGuideWord')

function checkForAmplifiedMeanings (word) {
  return word.amplifiedMeanings[0].meaning !== ''
    ? matchGuideWord(word.amplifiedMeanings[0].meaning)
    : checkForEntries(word.amplifiedMeanings[0])
}

function checkForEntries (amplifiedMeaning) {
  return amplifiedMeaning.entries[0].meaning !== ''
    ? matchGuideWord(amplifiedMeaning.entries[0].meaning)
    : ''
}

function extractGuideWord (word) {
  try {
    return matchGuideWord(word.meaning) || checkForAmplifiedMeanings(word)
  } catch (err) {
    console.error(word._id, err.message)
    return null
  }
}

module.exports = function extractGuideWords (words) {
  return words.map(word => ({
    lemma: word._id.replace(/ [IV]+$/, ''),
    guideWord: extractGuideWord(word)
  }))
}
