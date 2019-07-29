module.exports = function extractOraccGuideWords (entries) {
  return entries.map(entry => ({
    lemma: entry.cf.replace(/ʾ/g, "'"),
    guideWord: entry.gw
  }))
}
