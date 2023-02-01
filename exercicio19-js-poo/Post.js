const Commentary = require("./Commentary")

class Post{
    constructor(title,body,author){
        this.createdAt = new Date()
        this.title = title
        this.body = body
        this.author = author
        this.comments = []
    }

    AddComentary(username,content){
        this.comments.push(new Commentary(username,content))
    }
}

module.exports = Post