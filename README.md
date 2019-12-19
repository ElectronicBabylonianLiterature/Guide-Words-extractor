# guide-words-extractor

[![Build Status](https://travis-ci.com/ElectronicBabylonianLiterature/guide-words-extractor.svg?branch=master)](https://travis-ci.com/ElectronicBabylonianLiterature/guide-words-extractor)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A script to obtain Guide Words from the dictionary

## Done:

- Extract Dictionary GW
- Extract ORACC GW
- Bring Dictionary GW in accordance with ORACC GW:
  - strip all unnecessary information and punctuation marks which accompany the GW 
  - strip "to" from verbs and preserve it in all other cases
  - check for generalised meaning
  - check for unknown meaning and expand "mng. unkn." abbreviation
  - change the position of question marks in case of the uncertain meaning

## To be done:

- nominalise adjectives. If a lemma is an adjective, ORACC nominalises it. E.g., qardu[heroic one] instead of "heroic"
- meanings where single quotes are used instead of double quotes

## Expected discrepancies: 

- if a word is present in a volume of CAD that is more recent than CDA than ORACC uses the GW from CAD.
- ORACC lemmas use `ʾ` and eBL lemmas use `'`.
- ORACC glossary does not have homonym number.
- Some ORACC lemmas are forms eBL.

## Usage

Run `node index.js`. `words.json`, `oraccGlossary.json`, and `gloss-akk.json` have to be in the working directory. The scripts will print some information and write resulting guide words to `guide-words.csv`.
