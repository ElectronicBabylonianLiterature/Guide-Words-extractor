const extractGuideWords = require('./extractGuideWords')

test.each([
    [[{ "meaning": 'f. *aruštu*, *maruštu* \\"dirty\\" OA, M/NB of clothing, person; f. sg. and pl. as subst. \\"dirt\\";' }], ["dirty"]],
    [[{
        "meaning": '\\[ITI; also ITI.1.KAM; OA ITI.KAM; NB astr. ÁB\\]',
        "amplifiedMeanings": [
            {
                "meaning": "(fish) OB",
                "vowels": [],
                "key": "G",
                "entries": []
            },
            {
                "meaning": 'OB \\"to make immovable, paralyse]\\" part of body',
                "vowels": [],
                "key": "Št",
                "entries": []
            }
        ]
    }], ["(fish)"]],
    [[{
        'meaning': '',
        "amplifiedMeanings": [
            {
                "meaning": "",
                "vowels": [],
                "key": "",
                "entries": [
                    {
                        "meaning": 'O/jB \\"wing\\" (of bird)',
                        "vowels": []
                    },
                    {
                        "meaning": 'O/jB(lit.) \\"fin\\" (of fish)',
                        "vowels": []
                    }
                ]
            }
        ]
    }], ["wing"]]

])('%s', (word, guideWords) => {
    const extractedWords = extractGuideWords(word)
    expect(extractedWords).toEqual(guideWords)
})