// # Exercício 2

// Observe a string abaixo.

// ```jsx
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
// ```

// A partir dela, execute os passos abaixo:

// a) Remova o excesso de espaços no final da string;

const novaString = minhaString.trim();


// b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;

console.log(minhaString.length);
console.log(novaString.length);

// c) Substitua os traços `________` por “sticioso”.

const novaString2 = novaString.replace(`________`, "sticioso");

console.log(novaString2);