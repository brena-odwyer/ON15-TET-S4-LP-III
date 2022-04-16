const professora = new Object()
professora.nome = "Lilit"
professora.sobrenome = "Bandeira"
professora.cidade = "São Paulo"

//console.log(professora)

const aluna = {
    nome: { primeiro: "Gabriela", segundo: "Lemos" },
    _id: 1232541231234,
    idade: 20,
    cidade: { nascimento: "Palmas",
            viveu: ["São Paulo", "Salvador"]},
    interesses: ["música", "animes"],
    saudacao: () => console.log("olá, meninas"),

};

// o saudação é um método porque é uma função

// console.log(aluna.cidade.viveu[1])
// o 1 da salvador, porque o 0 é São Paulo, dentro da array. A contagem dos índices começa no 0.
// Além de criar objetos, semana passada também vimos notação de ponto.
// Que é igual esse aluna.cidade.viveu esse ponto é a notação, pra achar a info que queremos.
// Encapuslamento é o escopo do objeto, não pode ser acessado fora.

// Temos o objeto aluna com várias propriedades (nome, cidades, interesses...). Quando eu acessar esse objeto a partir de um banco de dados,
// eu sei que vou precisar de uma informação específica. Se eu quero só o nome e o id do objeto, não preciso puxar o objeto inteiro (console.log(aluna)),
// faz mais sentido desestruturar, ou seja, separar todas as propriedades do objeto e vendo só as que eu quero.
// Existe uma sintaxe pra isso, aí eu pego só o nome e o id:

// let { nome, _id} = aluna

// console.log(nome)

// Aí vem como uma variável isolada, só o objeto nome. Vai trazer Gabriela Lemos.

// console.log(nome.primeiro)

// Vai trazer Gabriela no terminal, porque o objeto foi desestruturado então vai conseguir acessar a propriedade específica.
// Isso é útil quando temos um objeto gigante.
// Você coloca o que você quer do objeto dentro da chave, porque você não quer acessar tudo.
// Se a chave for um sring a notação de ponto não funciona, aí tem que usar a notação de colchete.

// Objeto dade e seus métodos:
let hoje = new Date(); // isso é um objeto date, então tem propriedades (info) e métodos (ações)
let dia =hoje.getDate()
let mes =hoje.getMonth () // vai trazer o mês. (Colocando mes no console.log(mes))
let ano = hoje.getFullYear() // vai trazer o ano colocando console.log(ano).
console.log(hoje) // volta assim no terminal: 2022-04-16T14:09:27.133Z. Do jeito americano.
console.log(`${dia}/${mes}/${ano}`) // aqui vai trazer no console 16/3/2022, estaos em abril, mas o array conta janeiro como 0. Se colcoar mes + 1 ali vai mostrar o mes certo.
// Mas também existe um método específico para fazer isso baseado no lugar onde estamos = hoje.toLocaleDateString("pt-BR").

let dataFormatada = hoje.toLocaleDateString("pt-BR")
console.log(dataFormatada)

// console.log(hoje); // 2022-04-16T10:56:49.693Z

// const dia = hoje.getDate();
// const mes = hoje.getMonth();
// const ano = hoje.getFullYear();

// console.log(`${dia}/${mes + 1}/${ano}`); // 16/04/2022 🤔

// const dataFormatada = hoje.toLocaleDateString("pt-BR");
// console.log(dataFormatada); // 16/04/2022

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const dataLonga = hoje.toLocaleDateString("pt-BR", options);
console.log(dataLonga); // sábado, 16 de abril de 2022

// Tem tudo isso no MDN - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date