const matchGuideWord = require('./matchGuideWord')

test.each([
  ['\\\\~ \\"veiled, covered\"', 'veiled'],
  ['\\"rare; valuable', 'rare'],
  ['(*i/i*; stat. *(w)aruq*, occas. *uruq*) \\\\[SIG7\\\\] \\"become green, yellow; pale\\" of face, invalid; of fluids, fruit, glass, star', 'become green'],
  ['\\"make manifest, appear\\", \\"produce, create\\"; \\"make clear, display\\"; \\"make glorious\\" kingship, name, deeds etc.', 'make manifest'],
  ['\\"cure by exorcism O/jB', 'cure by exorcism'],
  ['\\"furious\\"', 'furious'],
  ['\\"to sit (down); dwell\\"', 'to sit (down)'],
  ['(+ *-šu/ka* etc.) \\"he/you (etc.) alone\\" Bab. (*cf.* GAG §67f)', 'he/you (etc.) alone'],
  ['\\"to go out\\", + vent. \\"come out\\" (from = *ina*, *ištu*, acc.)', 'to go out'],
  ['\\"one who gives/has given/is about to give birth\\"', 'one who gives/has given/is about to give birth'],
  ['NA f. also *āli(s)su* \\"one who begets/begot; progenitor\\" Bab. esp. *abu(m) w.* of biological father; jB *lā ālidu* \\"sterile\\";', 'one who begets/begot'],
  ['jB lex. *pištu uppušu* \\"cast abuse\\"', 'cast abuse'],
  ['\\[ITI; also ITI.1.KAM; OA ITI.KAM; NB astr. ÁB\\]', ''],
  ['\\[EGIR\\] adv.', ''],
  ['f. *(w)aruqtu(m)*', ''],
  ['liter. \'that which goes out\' \\\\[È- \\\\]', ''],
  ['', '']
])('%s', (meaning, guideWord) => {
  const strippedMeaning = matchGuideWord(meaning)
  expect(strippedMeaning).toEqual(guideWord)
})
