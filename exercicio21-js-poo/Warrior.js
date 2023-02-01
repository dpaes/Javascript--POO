import { Character } from "./Character.js";

export class Warrior extends Character{
    constructor(nome,vida,atk,def,escudo){
        super(nome,vida,atk,def)
        this.escudo = escudo
        this.postura = 'ataque'
    }

    Atacar(alvo){
        if(this.postura === 'ataque'){
            super.Atacar(alvo)
        } else {
            console.log(`${this.nome} não pode atacar pois está em defesa.`)
        }
    }

    TrocarPostura(){
        if(this.postura === 'ataque'){
            this.postura = 'defesa'
            this.def += this.escudo
            console.log(`${this.nome} mudou de postura para Defesa`)
        } else {
            this.postura = 'ataque'
            this.def -= this.escudo
            console.log(`${this.nome} mudou de postura para Ataque`)
        }
    }
}