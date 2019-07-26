const extractOraccGuideWords = require('./extractOraccGuideWords')

test.each([
  [{ 'cf': 'amelu', 'gw': 'human' }, 'amelu', 'human'],
  [{ 'cf': 'liʾbʾbu', 'gw': 'heart' }, "li'b'bu", 'heart']
])('%s', (word, lemma, guideWord) => {
  const extractedWords = extractOraccGuideWords([word])
  expect(extractedWords).toEqual([{
    lemma,
    guideWord
  }])
})