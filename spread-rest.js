// Já vimos vários tipos de operadores (soma, subtração...)


function imprimir(x, y, z) { 
    return console.log(x, y, z)
}
let argumentos = [2, 3, 5]

espalhar(...argumentos)


let compras = ['calça preta', 'blusa animal print', 'salto fino vermelho 12cm']
let novasCompras = ['argolas grandes de prata', ...compras, 'lace cacheada castanho']
let novissimasCompras = [...compras]
