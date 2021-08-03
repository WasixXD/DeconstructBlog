function checkIfJson(test) {
    if(test["content-type"] === "application/json") {
        return true
    }
    return false
}


function checkIfContent(content) {
    return !!Object.keys(content).length
}


module.exports = {
    checkIfJson,
    checkIfContent

}