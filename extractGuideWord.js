const matchGuideWord = require('./matchGuideWord')

module.exports = function extractDictionaryGuideWords (words) {
    return words.map(word => {
       return matchGuideWord(word.meaning)
    })
      
  }
