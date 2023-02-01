class User{
    constructor(fullname,email,password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email,password){
        if(this.email === email && this.password === password){
            console.log('Login bem sucedido!')
        } else {
            console.log('Login falhou!')
        }
    }
}

const daniel = new User("Daniel Paes","daniel@email.com", "1234")

daniel.login("daniel@email.com","1234")