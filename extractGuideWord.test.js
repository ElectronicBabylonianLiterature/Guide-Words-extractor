const extractGuideWord = require('./extractGuideWord')

test.each([
    [[{
        "_id": "aršu I",
        "lemma": [
          "aršu"
        ],
        "meaning": 'f. *aruštu*, *maruštu* \\"dirty\\" OA, M/NB of clothing, person; f. sg. and pl. as subst. \\"dirt\\";',
      },
        {
          "_id": "asāmu I",
          "lemma": [
            "asāmu"
          ],
          
          "meaning": '\\"to be(come) fitting, suitable; seasonable\\',
        }],
        [ "dirty" , "be(come) fitting" ]
    ]
  ])('%s', (word, guideWord) => {
    const extractedWord = extractGuideWord(word)
    expect(extractedWord).toEqual(guideWord)
  })