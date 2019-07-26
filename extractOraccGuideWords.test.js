const extractOraccGuideWords = require('./extractOraccGuideWords')

test.each([
  [{ 'cf': 'amelu', 'gw': 'human' }, 'human'],
  [{ 'cf': 'libbu', 'gw': 'heart' }, 'heart']
])('%s', (word, guideWord) => {
  const extractedWords = extractOraccGuideWords([word])
  expect(extractedWords).toEqual([{
    lemma: word.cf,
    guideWord
  }])
})