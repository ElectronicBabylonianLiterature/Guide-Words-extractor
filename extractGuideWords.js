const matchGuideWord = require('./matchGuideWord')

function checkForAmplifiedMeanings(word) {
    return word.amplifiedMeanings[0].meaning !== ""
        ? matchGuideWord(word.amplifiedMeanings[0].meaning)
        : word.amplifiedMeanings[0].entries[0].meaning !== ""
            ? matchGuideWord(word.amplifiedMeanings[0].entries[0].meaning)
            : ""
}

function extractGuideWord(word) {
    try {
        if (word.meaning !== '') {
            if (matchGuideWord(word.meaning) !== '') {
                return matchGuideWord(word.meaning)
            } else {
                return checkForAmplifiedMeanings(word)
            }
        } else {
            return checkForAmplifiedMeanings(word)
        }
    } catch (err) {
        console.error(word._id, err.message)
        return null
    }
}

module.exports = function extractGuideWords(words) {
    return words.map(word => ({
        lemma: word._id.replace(/ [IV]+$/, ''),
        guideWord: extractGuideWord(word)
    }))
}
