import { Character } from "./Character.js"

export class Thief extends Character{
    Atacar(alvo){
        if((this.atk * 2) > alvo.def){
            alvo.vida -= ((this.atk * 2) - alvo.def)
            console.log(`${this.nome} atacou ${alvo.nome} e causou ${((this.atk * 2) - alvo.def)} de dano!`)
        } else if((this.atk * 2) <= alvo.def){
            console.log(`Plim!`)
        }
    }
}