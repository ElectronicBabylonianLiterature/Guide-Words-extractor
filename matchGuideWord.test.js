const matchGuideWord = require('./matchGuideWord')

test.each([
  ['\\~ "veiled, covered"', 'veiled'],
  ['"rare; valuable', 'rare'],
  ['"to make"', 'make'],
  ['(*i/i*; stat. *(w)aruq*, occas. *uruq*) \\[SIG7\\] "to be(come) green, yellow; pale" of face, invalid; of fluids, fruit, glass, star', 'be(come) green'],
  ['"to make manifest, appear", "produce, create"; "make clear, display"; "make glorious" kingship, name, deeds etc.', 'make manifest'],
  ['"to another place"', 'to another place'],
  ['"towards"', 'towards'],
  ['"story"', 'story'],
  ['"kind to"', 'kind to'],
  ['"cure by exorcism O/jB', 'cure by exorcism'],
  ['"furious"', 'furious'],
  ['"to sit (down); dwell"', 'sit (down)'],
  ['(+ *-šu/ka* etc.) "he/you (etc.) alone" Bab. (*cf.* GAG §67f)', 'he/you (etc.) alone'],
  ['"to go out", + vent. "come out" (from = *ina*, *ištu*, acc.)', 'go out'],
  ['"one who gives/has given/is about to give birth"', 'one who gives/has given/is about to give birth'],
  ['NA f. also *āli(s)su* "one who begets/begot; progenitor\\" Bab. esp. *abu(m) w.* of biological father; jB *lā ālidu* \\"sterile\\";', 'one who begets/begot'],
  ['jB lex. *pištu uppušu* "cast abuse"', 'cast abuse'],
  ['\\[ITI; also ITI.1.KAM; OA ITI.KAM; NB astr. ÁB\\]', ''],
  ['\\[EGIR\\] adv.', ''],
  ['f. *(w)aruqtu(m)*', ''],
  ['liter. \'that which goes out\' \\[È- \\]', ''],
  ['', ''],
  ['(a type of vessel) OA', '(a type of vessel)'],
  ['mng. unkn. jB lex.', 'meaning unknown'],
  ['(or *pahāṣ/zu(m)*) mng. unkn. O/jB', 'meaning unknown'],
  ["\"desire, objective\" Bab.(lit.); *n. kašādu(m)* \"to attain o.'s goal\";", 'desire']
])('%s', (meaning, guideWord) => {
  const strippedMeaning = matchGuideWord(meaning)
  expect(strippedMeaning).toEqual(guideWord)
})
