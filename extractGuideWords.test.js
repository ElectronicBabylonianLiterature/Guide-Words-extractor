const extractGuideWords = require('./extractGuideWords')

test.each([
    [{ "_id": 'lemma I', "meaning": 'f. *aruštu*, *maruštu* "dirty" OA, M/NB of clothing, person; f. sg. and pl. as subst. "dirt";' }, "dirty"],
    [{
        "_id": 'lemma II',
        "meaning": '\\[ITI; also ITI.1.KAM; OA ITI.KAM; NB astr. ÁB\\]',
        "amplifiedMeanings": [
            {
                "meaning": "(fish) OB",
                "vowels": [],
                "key": "G",
                "entries": []
            },
            {
                "meaning": 'OB "to make immovable, paralyse]" part of body',
                "vowels": [],
                "key": "Št",
                "entries": []
            }
        ]
    }, "(fish)"],
    [{
        "_id": 'lemma III',
        'meaning': '',
        "amplifiedMeanings": [
            {
                "meaning": "",
                "vowels": [],
                "key": "",
                "entries": [
                    {
                        "meaning": 'O/jB "wing" (of bird)',
                        "vowels": []
                    },
                    {
                        "meaning": 'O/jB(lit.) "fin" (of fish)',
                        "vowels": []
                    }
                ]
            }
        ]
    }, "wing"],
    [{
        "_id": 'lemma IV',
        "meaning": '\\[ITI; also ITI.1.KAM; OA ITI.KAM; NB astr. ÁB\\]',
        amplifiedMeanings: []
    }, null],

])('%s', (word, guideWord) => {
    const extractedWords = extractGuideWords([word])
    expect(extractedWords).toEqual([{
        lemma: 'lemma',
        guideWord
    }])
})
