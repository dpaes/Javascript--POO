const Author = require("./Author")

/* teste\/ para testar basta digitar node index.js c/ node instalado. */
const Daniel = new Author("Daniel Paes")

const post = Daniel.writePost("Titulo", "coisas coisas body")

post.AddComentary("pessoa1","que coisa legal")

post.AddComentary("filhot", "top hein")

console.log(Daniel)
console.log(post)

/* Crie uma aplicação javascript que simule um funcionamento básico de blog utilizando classes e associações.

Você deverá criar uma classe Post e uma classe Comment, onde uma instância de Post poderá receber vários comentários.
As instâncias de Post também devem ter um método específico para adição de comentários nelas.

Você também deverá criar uma classe Author, e os objetos da classe Post também devem possuir um objeto da classe Author,
que é o autor do post. 
Além disso, os objetos da classe Author também devem possuir um array de posts (objetos da classe Post) e um método
específico para criação de posts, que deverá criar uma instância utilizando aquele próprio autor, incluir o post no
array e então retornar o post criado. */ 