import { Character } from "./Character.js";
import { Mage } from "./Mage.js";
import { Thief } from "./Thief.js";
import { Warrior } from "./Warrior.js";

const boneco1 = new Thief('personagem Thief', 100, 30, 10)

const boneco2 = new Character('personagem Normal', 105, 25, 15)

const boneco3 = new Mage('personagem Mago', 100, 10, 15, 20)

const boneco4 = new Warrior('personagem Warrior', 200, 25, 20, 10)

console.table({ boneco1, boneco2, boneco3, boneco4})

boneco4.Atacar(boneco1)

boneco4.TrocarPostura()

boneco1.Atacar(boneco2)
boneco2.Atacar(boneco3)
boneco3.Atacar(boneco4)

console.table({ boneco1, boneco2, boneco3, boneco4})

boneco4.Atacar(boneco1)
boneco3.Cura(boneco3)
boneco4.TrocarPostura()
boneco4.Atacar(boneco1)
boneco3.Atacar(boneco4)

console.table({ boneco1, boneco2, boneco3, boneco4})
boneco4.Atacar(boneco1)
boneco4.TrocarPostura()
boneco4.Atacar(boneco1)

console.table({ boneco1, boneco2, boneco3, boneco4})