const express = require('express')
const { parseMarkDown } = require('../markdown')

const { getContent, create, update, del } = require('../api/mongodb')
const { checkIfJson, checkIfContent } = require("./utils")
let router = express.Router()
router.use(express.json())

router.get("/api/get/:id", async (req, res, next) => {
    const id = req.params.id
    req.toPost = await getContent(id)
    next()
})


router.post("/api/post",async (req, res, next) => {
    
    if(checkIfJson(req.headers) && checkIfContent(req.body)) {
        let markDownParsed = parseMarkDown(req.body.body)
        let post = {...req.body, body: markDownParsed}
        let status = await create(post)
        req.status = status
    
    } else {
        req.status = "error"
    }
    next()
})

router.put("/api/put/:id", async (req, res, next) => {
    const id = req.params.id
    let parsed = parseMarkDown(req.body.body)
    let result = await update(id, {...req.body, body: parsed})
    req.status = result
    next()
})


router.delete("/api/delete/:id", async (req, res, next) => {
    const id = req.params.id
    let result = await del(id)
    req.status = result
    next()
})


module.exports = router