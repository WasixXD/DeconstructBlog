const mongoose = require('mongoose')


let PostSchema = new mongoose.Schema({
    id: Number,
    title: String,
    body: String,
    created: Date,
    author: String,

})

const Post = mongoose.model("Post", PostSchema)

module.exports = Post