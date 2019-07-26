const extractOraccGuideWords = require('./extractOraccGuideWords')

test.each([
  [[{ 'headword': 'amelu', 'gw': 'human' }], ['human']],
  [[{ 'headword': 'libbu', 'gw': 'heart' }], ['heart']]
])('%s', (word, guideWords) => {
  const extractedWords = extractOraccGuideWords(word)
  expect(extractedWords).toEqual(guideWords)
})