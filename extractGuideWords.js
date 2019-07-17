const matchGuideWord = require('./matchGuideWord')

module.exports = function extractGuideWords (words) {
    return words.map(word => matchGuideWord(word.meaning))
      
  }
