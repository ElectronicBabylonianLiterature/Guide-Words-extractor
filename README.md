# guide-words-extractor
A script to obtain Guide Words from the dictionary

Done:

-- Extract Dictionary GW
-- Extract ORACC GW
-- Bring Dictionary GW in accordance with ORACC GW:
    -- strip all unnecessary information and punctuation marks which accompany the GW
    -- strip "to" from verbs and preserve it in all other cases
    -- check for generalised meaning
    -- check for unknown meaning and expand "mng. unkn." abbreviation

To be done:

-- change the position of question marks in case of the uncertain meaning
-- nominalise adjectives. If a lemma is an adjective, ORACC nominalises it. E.g., qardu[heroic one] instead of "heroic"

Expected discrepancy: if a word is present in a volume of CAD that is more recent than CDA than ORACC uses the GW from CAD. 