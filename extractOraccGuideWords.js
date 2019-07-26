module.exports = function extractOraccGuideWords(entries) {
    return entries.map(entry => ({
        lemma: entry.cf,
        guideWord: entry.gw
    }))
}
