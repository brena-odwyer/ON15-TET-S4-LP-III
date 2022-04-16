// Criando uma array
const tipos = ["String", "Números", "Booleanos"];
const cidades = new Array("Recife", "São Paulo", "Manaus");
const cursos = "frontend backend".split(" ");
const tecnologias = Array.of("HTML", "CSS", "JS");

let signos = Array.of('Aquário', 'Libra', 'Gêmeos')
console.log(signos)

//acessando o valor de um elemento em uma array
let alunas = ['Adriana', 'Amitair', 'Ana Elisa']
console.log(alunas[1]);

//desestruturando uma array

const [primeiro, segundo] = tipos;
console.log(primeiro);
console.log(segundo);

let alfabeto = "abcdefghijklmnopqrstuvwxyz"

//let arrayAlfabeto = alfabeto.split("o")
//console.log(arrayAlfabeto)
//resposta no terminal: [ 'abcdefghijklmn', 'pqrstuvwxyz' ], inclusive excluiu o "o".

let arrayAlfabeto = alfabeto.split("")
console.log(arrayAlfabeto) //a resposta vai dar os elementos um por um.