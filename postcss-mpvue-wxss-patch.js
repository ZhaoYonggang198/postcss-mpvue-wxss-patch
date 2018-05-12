const postcss = require('postcss')
module.exports = postcss.plugin('wxss-filter', option => {
  return (root) => {
    root.walkAtRules(function (rule, idx) {
      switch (rule.name) {
        case 'media':
          if (rule.params === 'print') {
            rule.remove()
          }
          break
        case '-moz-document':
          if (rule.params === 'url-prefix()') {
            rule.remove()
          }
          break
      }
    })
  }
})
