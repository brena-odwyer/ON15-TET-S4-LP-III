// Métodos de array
const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2];
const alunas =['dayane', 'renata', 'amanda', 'brenda', 'aline']

// console.log(numeros[2]) // Como acessar um elemento da array pelo índice. Da 4 no terminal.


//find
const encontrarPrimeiro = numeros.find((element) => element == 2); // arrow function (() =>{}); ((nome que escolhemos para chamar a função, nome arbitrário) =>{aqui é o que será executado: quero que encontre um elemento igual a 2})
console.log(encontrarPrimeiro); // retorno 2 (retorno é o que aparece no terminal)
// a cada volta do find vai olhar o elemento, 3, 2, 4... na ordem.
// O find procura o primeiro e para, mesmo que nessa lista tenham dois elementos 2, no retorno só aparece um 2/
// Não precisa necessariamente atribuir a função a variáve (neste caso const encontrarPrimeiro), mas se não tiver variável,
// o que quer que aquilo for só poderá ser usado uma vez, se você quiser saber o que era depois tem que criar variável.
 console.log(alunas.find((elemento) => elemento == 'brenda')) //sem variável.
 
 const filtrarPor = (numeros.filter((elemento) => elemento == 3)) 
 console.log(numeros.filter((elemento) => elemento == 3))
 // o filter vai encontrar o número 3 três vezes pq ele aparece 3x na array; diferente do find que ia encontrar só um 3, pq ele retorna o primero.
 //O finder traz o objeto que queremos encontrar, apenas uma vez, se ele não encontrar vai retornar undefined.
 // O filter vai achar todos os elementos 3, verificando cada elemento, algo que toda função vai fazer.

 const executarTodos = numeros.map((elemento => elemento * 3));
console.log(executarTodos); // retorno vai ser a array com cada elemento multplicado por 3  [9, 6, 12, 9, 15, 3, 9, 12, 6]. Essa nova array não modifica a original.

const verTodos = numeros.forEach((element) => console.log(element));
console.log(verTodos); // retorno  3\n2\n4\n3\n5\n1\n3\n4\n2. O for each executa, como o map, mas não da retorno

// reduce
// Vai acumulando os resultado com o objetivo de reduzir aquela array a um único valor, diferente do map que faz outro array.
const reduzirPara = numeros.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual
  );
  console.log(reduzirPara); // retorno 27

  const somarTodos = numeros.reduce((acumulador, valorAtual) => (acumulador) + valorAtual)

 // function calcular(funcaoComoArgumento) // o parênteses com a funcaoComoArgumento é a callback.


 // concat
 const arrayConcatenada = numeros.concat(1, [2, 3], "café");
console.log(arrayConcatenada); // retorno [3, 2, 4, 3, 5, 1, 3, 4, 2, 1, 4, 5, 2, 'café']
// concatenar é juntar duas coisas

// push
const adicionaNoFinal = numeros.push(7, 9, 3);
console.log(adicionaNoFinal); // retorno 12, ele retorna o comprimento da array.
console.log(numeros) // retorna [3, 2, 4, 3, 5, 1, 3, 4, 2, 7, 9, 3], ou seja a array original foi modificada.

// pop
// remove o último elemento da array e retorna o último elemento retirado.
const removeUltimo = numeros.pop();
console.log(removeUltimo); // retorno 3
console.log(numeros) // altera a array original. retorna 3, 2, 4, 3, 5, 1, 3, 4, 2, 7, 9]

// shift
// remove o primeiro elemento da array, retorna este elemento e modifica a array.
const removePrimeiro = numeros.shift();
console.log(removeUltimo); // retorno 3
console.log(numeros) // retorna a array original moficiada, sem o primeiro elemento. retorna [2, 4, 3, 5, 1, 3, 4, 2, 7, 9] 

// unshift
// adiciona um ou mais elementos no início da array e o retorno assim como o push é o novo comprimento da array, o número de elementos.
const adicionaNoInicio = numeros.unshift(8, 4, 6);
console.log(adicionaNoInicio); // retorno 13, retorna a quantidade de elementos.
console.log(numeros) // retorna a array modificada com 8, 4 e 6 no começo.

// slice
// retorna uma copia de parte de um array
const copiaParte = numeros.slice(2, 5); // o 2 corresponde ao 6 na array atual, é o índice, não é o valor do item.
console.log(copiaParte); //retorno [6, 2, 4]
console.log(numeros)

// splice
// altera o conteúdo de uma lista, ou seja, moficia a array original, adicionando novos elementos e retira elementos antigos.
const removeEAdiciona = numeros.splice(2, 5);
console.log(removeEAdiciona); //retorno [6, 2, 4, 3, 5] -> removidos
console.log(numeros); // retorno [8, 4, 1, 3, 4, 2, 7, 9] -> array original modificada.

// indexOf
const localizaElemento = numeros.indexOf(2);
console.log(localizaElemento); // retorno 5, que é o índice do elemento. A array nesta altura do campeonato é [8, 4, 1, 3, 4, 2, 7, 9]. O 2 dentro da array está no índice 5, lembrando que o primeiro índice é 0.

// includes
const verificaSeExiste = numeros.includes(4); // dentro do parênteses é o elemeto (e não o índice)
console.log(verificaSeExiste); // true

// join
const transformaString = numeros.join("-"); // pega uma array e transforma em um string.
console.log(transformaString); // retorno "8-4-1-3-4-2-7-9"

