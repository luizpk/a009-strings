// # Exercício 3

// A partir da frase a seguir, faça o que se pede

// ```
// Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
// ```

// a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);

const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
console.log(frase)
// b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;

const frase2 = frase.replace("verde","rosa")
const frase3 = frase2.replace("azul","laranja")
console.log(frase3)

// c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.

const verificaVerde =  frase3.includes("verde")
const verificaLaranja = frase3.includes("laranja")
console.log(verificaVerde)
console.log(verificaLaranja)


// **EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”

const frase4 = frase3.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR" )

console.log(frase4)