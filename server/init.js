const express = require('express')
const { getContent } = require('./api/mongodb')
const router = require('./middlewares/middlewares')
const app = express()
const port = process.env.PORT || 3000





app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.set("view engine", "ejs")


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/../public/index")
})

app.post("/article",async (req, res) => {
    let id = ""
    //brazilian way
    if(typeof req.body.selected != "string") {

        for(let i in req.body.selected) {
            if(req.body.selected[i] == "true") {
                
                id = req.body.id[i]
            }
        }
    } else {
        id =req.body.id
    }
    let content = await getContent(id)
    
    
    res.render(__dirname + "/../public/article.ejs", {contents: content})
    
})



//api

//get content
app.get("/api/get/:id", router,async (req, res, next) =>{
    res.status(200).json({
        result: req.toPost
    })
} )


//create content
app.post("/api/post", router, async (req, res) => {  
    res.json({
        status: req.status
    })
})


app.put("/api/put/:id", router, (req, res) => {
    res.json({
        status: req.status
    })
})


app.delete("/api/delete/:id", router, (req, res) => {
    res.json({
        status: req.status
    })
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})