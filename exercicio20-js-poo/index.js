import { Component } from "./Component.js";
import { Form } from "./Form.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";

/* teste\/ para testar basta digitar node index.js c/ node instalado */
const title = new Component('h1', 'body', { textContent: 'Olá, Mundo!'})

console.log(title)

title.render()

title.tag = 'h3'

title.build().render()

const form = new Form('body')

const label = new Label('Nome:', form, { htmlFor: 'nameInput' })
const input = new Input(form, { id: 'nameInput', name: 'name'})

form.render()
label.render()

form.addChildren(input)

form.addChildren(
    new Component('br'),
    new Component('br'),
    new Label('Data de Nascimento:', { htmlFor: 'birthdayInput'}),
    new Input(form, {id: 'birthdayInput', name: 'birthday', type: 'date'})
)