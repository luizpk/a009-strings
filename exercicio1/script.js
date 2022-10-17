// # Exercício 1

// Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:
    
//     ```
//     Estas são as comidas favoritas de nomeDoUsuario
//     - Comida1
//     - Comida2
//     - Comida3
//     ```
  
// Você deve usar apenas um `console.log()` para isso

//   <details> 
//   <summary> 💡 Dica</summary>
  
//     ⭐ Você pode juntar texto com variáveis de duas formas:
//     - Concatenando as strings (com o sinal de +)
//     - Utilizando template strings (e envolvendo a sua string com o sinal de CRASE ao invés de aspas ⇒ ````)
    
//     Adicionar um  `\n` na string coloca uma **quebra de linha** no texto.
  
//   </details>

const nome = prompt("Olá! Digite o seu nome.");
const comida1 = prompt("Agora vou pedir que insira o nome de três comidas. \n Digite o nome da primeira comida.");
const comida2 = prompt("Digite o nome da segunda comida");
const comida3 = prompt("Digite o nome da terceira comida.");

console.log(`Estas são as comidas favoritas de ${nome}:
- ${comida1}
- ${comida2}
- ${comida3}`)