const extractGuideWords = require('./extractGuideWords')

test.each([
  [{ lemma: ['part1', 'part2'], homonym: 'I', meaning: 'f. *aruštu*, *maruštu* "dirty" OA, M/NB of clothing, person; f. sg. and pl. as subst. "dirt";' }, 'dirty'],
  [{
    lemma: ['lemma'],
    homonym: 'II',
    meaning: '\\[ITI; also ITI.1.KAM; OA ITI.KAM; NB astr. ÁB\\]',
    amplifiedMeanings: [
      {
        meaning: '(fish) OB',
        vowels: [],
        key: 'G',
        entries: []
      },
      {
        meaning: 'OB "to make immovable, paralyse]" part of body',
        vowels: [],
        key: 'Št',
        entries: []
      }
    ]
  }, '(fish)'],
  [{
    lemma: ['lemma'],
    homonym: 'III',
    meaning: '\\[ITI; also ITI.1.KAM; OA ITI.KAM; NB astr. ÁB\\]',
    amplifiedMeanings: [
      {
        meaning: '',
        vowels: [],
        key: 'G',
        entries: []
      },
      {
        meaning: 'OB "to make immovable, paralyse]" part of body',
        vowels: [],
        key: 'Št',
        entries: []
      }
    ]
  }, 'make immovable'],
  [{
    lemma: ['lemma'],
    homonym: 'IV',
    meaning: '',
    amplifiedMeanings: [
      {
        meaning: '',
        vowels: [],
        key: '',
        entries: [
          {
            meaning: 'O/jB "wing" (of bird)',
            vowels: []
          },
          {
            meaning: 'O/jB(lit.) "fin" (of fish)',
            vowels: []
          }
        ]
      }
    ]
  }, 'wing'],
  [{
    lemma: ['lemma'],
    homonym: 'V',
    meaning: '',
    amplifiedMeanings: [
      {
        meaning: '',
        vowels: [],
        key: '',
        entries: [
          {
            meaning: '',
            vowels: []
          },
          {
            meaning: 'O/jB(lit.) "fin" (of fish)',
            vowels: []
          }
        ]
      }
    ]
  }, 'fin'],
  [{
    lemma: ['lemma'],
    homonym: 'VI',
    meaning: '\\[ITI; also ITI.1.KAM; OA ITI.KAM; NB astr. ÁB\\]',
    amplifiedMeanings: []
  }, '']

])('%s', (word, guideWord) => {
  const extractedWords = extractGuideWords([word])
  expect(extractedWords).toEqual([{
    lemma: word.lemma.join(' '),
    eblHomonym: word.homonym,
    eblGuideWord: guideWord
  }])
})
