const matchGuideWord = require('./matchGuideWord')

test.each([
  ['"\\\\~ \\"veiled, covered\"', 'veiled'],
  ['\\"rare; valuable', 'rare'],
  ['OA, OB, jB \\"to be big, to be great, be strong (Am.)', 'be big'],
  ['"(*i/i*; stat. *(w)aruq*, occas. *uruq*) \\\\[SIG7\\\\] \\"become green, yellow; pale\\" of face, invalid; of fluids, fruit, glass, star"', 'become green'],
  ['\\"make manifest, appear\\", \\"produce, create\\"; \\"make clear, display\\"; \\"make glorious\\" kingship, name, deeds etc.', 'make manifest'],
  ['\\"cure by exorcism O/jB', 'cure by exorcism'],
  ['\\"furious\\', 'furious']
])('%s', (meaning, guideWord) => {
  const strippedMeaning = matchGuideWord(meaning)
  expect(strippedMeaning).toEqual(guideWord)
})
