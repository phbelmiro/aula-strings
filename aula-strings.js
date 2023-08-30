/*

pedro henrique 

A

//array indefinido

// array null

//11

//3

//[3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// 9

2

subi num onibus em marrocos 27

*/

//B

//1

let nome = prompt("qual e seu nome?")
let email = prompt("digite seu e-mail para cadastratar")

console.log("o e-mail " + email + " foi cadastrado com sucesso. seja bem-vinda(o) " + nome )

//2

let  comidas = ["arroz e feijao" , "pastel" , "pizza" , "xis" , "massa"];
console.log(comidas);
console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);
console.log(comidas[3]);
console.log(comidas[4]);

let C = prompt("qual e sua comida favorita?");

comidas [1] = C

console.log(comidas);

//3

let listaDeTarefas = []

let tarefas = prompt("qual e sua 1° tarefas voce precisa realizar")
let tarefas2 = prompt("qual e sua 2° tarefas voce precisa realizar")
let tarefas3 = prompt("qual e sua 3° tarefas voce precisa realizar")

listaDeTarefas = [tarefas, tarefas2, tarefas3]
console.log(listaDeTarefas)

let tarefasComcluidas = Number(prompt("qual tarefa voce comcluio de 0 a 2"))
listaDeTarefas.splice(tarefasComcluidas, 1)

console.log(listaDeTarefas)
