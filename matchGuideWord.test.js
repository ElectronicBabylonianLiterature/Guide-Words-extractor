const matchGuideWord = require('./matchGuideWord')

test.each([
  ['"\\\\~ \\"veiled, covered\"', 'veiled'],
  ['\\"rare; valuable', 'rare'],
  ['"(*i/i*; stat. *(w)aruq*, occas. *uruq*) \\\\[SIG7\\\\] \\"become green, yellow; pale\\" of face, invalid; of fluids, fruit, glass, star"', 'become green'],
  ['\\"make manifest, appear\\", \\"produce, create\\"; \\"make clear, display\\"; \\"make glorious\\" kingship, name, deeds etc.', 'make manifest'],
  ['\\"cure by exorcism O/jB', 'cure by exorcism'],
  ['\\"furious\\', 'furious'],
  ['\\"one who gives/has given/is about to give birth\\', 'one who gives/has given/is about to give birth'],
  ['NA f. also *āli(s)su* \\"one who begets/begot; progenitor\\" Bab. esp. *abu(m) w.* of biological father; jB *lā ālidu* \\"sterile\\";', 'one who begets/begot']
])('%s', (meaning, guideWord) => {
  const strippedMeaning = matchGuideWord(meaning)
  expect(strippedMeaning).toEqual(guideWord)
})
