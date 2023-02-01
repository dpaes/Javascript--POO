import { Character } from "./Character.js";

export class Mage extends Character{
    constructor(nome,vida,atk,def,magia){
        super(nome,vida,atk,def)
        this.magia = magia
    }

    Atacar(alvo){
        if((this.atk + this.magia) <= alvo.def){
            console.log('Plim!')
        } else if((this.atk + this.magia) > alvo.def){
            alvo.vida -= ((this.atk + this.magia) - alvo.def)
            console.log(`${this.nome} atacou ${alvo.nome} e causou ${(((this.atk + this.magia) - alvo.def))} de dano.`)
        }
    }

    Cura(alvo){
        alvo.vida += (this.magia * 2)
        console.log(`${this.nome} curou ${alvo.nome} em ${(this.magia * 2)} de vida.`)
    }
}