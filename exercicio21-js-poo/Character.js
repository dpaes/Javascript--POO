export class Character {
    constructor(nome,vida,atk,def){
        this.nome = nome
        this.vida = vida
        this.atk = atk
        this.def = def
    }

    Atacar(alvo){
        if(alvo.def >= this.atk){
            console.log('Plim!')
        } else if(this.atk > alvo.def){
            alvo.vida -= (this.atk - alvo.def)
            console.log(`${this.nome} atacou ${alvo.nome} e causou ${(this.atk - alvo.def)} de dano!`)
        }
        
    }
}