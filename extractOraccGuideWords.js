module.exports = function extractOraccGuideWords (entries) {
  return entries.map(entry => ({
    citationForm: entry.cf.replace(/ʾ/g, "'"),
    oraccGuideWord: entry.gw
  }))
}
