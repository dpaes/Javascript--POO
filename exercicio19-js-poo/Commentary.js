class Commentary{
    constructor(content,username) {
        this.createdAt = new Date()
        this.content = content
        this.username = username
    }
}

module.exports = Commentary