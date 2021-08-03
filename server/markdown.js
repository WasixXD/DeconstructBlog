const markdown = require('markdown-it')
let mark = new markdown()

function parseMarkDown(content) {
    let result = mark.render(content)

    return result
}


module.exports = {
    parseMarkDown
}