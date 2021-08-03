const mongoose = require('mongoose')
const Post = require('./schema')
require('dotenv').config()

function init() {
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lnpf6.mongodb.net/Cluster0?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })

}

async function create(values) {
    try {
        init()
        

        if(!!values.created || values.created == "") {
            values.created = Date()
        }
        const post =  await Post.create(values)
        post.save()
        return "created"
    } catch(err) {
        return err
    }
}

async function getContent(id) {
    try {
        init()
        let result
        if(id == "0") {
            result = await Post.find().exec()
        } else {
            result= await Post.find({id: id}).exec()
        }
        return result

    } catch {
        return []
    }
}

async function update(id, newValues) {
    try{
        init()
        
        let result = await Post.updateOne({id}, {...newValues})
        return result

    } catch {
        return "error"
    }
}


async function del(id) {
    try {
        init()

        let result = await Post.deleteOne({id})
        return "true"
    } catch {
        return "error"
    }
}

module.exports = {
    create,
    getContent,
    update,
    del
}