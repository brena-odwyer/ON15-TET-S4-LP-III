let clienteLilit = [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 30.0}]

    const totalCompras = clienteLilit.reduce(( prevVal, element) => prevVal + element.valor, 0 )
    console.log(totalCompras)

let cliente1 = [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}]

    const totalCompras1 = cliente1.reduce(( prevVal, element) => prevVal + element.valor, 0 )
    console.log(totalCompras1)

let cliente2 = [
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}]

    const totalCompras2 = cliente2.reduce(( prevVal, element) => prevVal + element.valor, 0 )
    console.log(totalCompras2)



function realizarCompra(arrayDeCompra) {
    let valorTotal = 0 // variável com a soma de todos os valores dos produtos sem desconto
    let descontoAplicado = 0 // variável com a soma de todos os dencontos aplicados
    let valorFinal = 0 // variável com a soma de todos os valores dos produtos com desconto
    let quantidadeProdutos = arrayDeCompra.length

    for(let item of arrayDeCompra) {
        valorTotal += item.valor
        if (item.valor >= 200.0) {
            valorFinal += (item.valor * 0.5)
            descontoAplicado += (item.valor * 0.5)
        } else if (item.valor >= 100.0) {
            valorFinal += (item.valor * 0.8)
            descontoAplicado += (item.valor *0.2)
        } else if (item.valor >= 80.0) {
            valorFinal += (item.vamor * 0.9)
            descontoAplicado += (item.valor * 0.1)
        } else if (item.valor >= 50.0) {
            valorFinal += (item.valor * 0.95)
            descontoAplicado += (item.valor * 0.05)
    } else {
        valorFinal += item.valor
    }
}
let dataDaCompra = new Date().toLocaleDateString('pt-BR')
console.log(dataDaCompra)

let notaFiscal = {
    "Valot total": valorTotal,
    "Desconto aplicado": descontoAplicado,
    "Valor Final": valorTotal - descontoAplicado
}  

if(quantidadeProdutos > 10 || valorFinal > 800.0) {
    return console.log({
        ...notaFiscal,
        "Bônus": 'Você ganhou um cupom de 50 reais para sua próxima compra'
    })
} else {
    return console.log(notaFiscal)
}

}

realizarCompra(clienteLilit)
realizarCompra(cliente1)
realizarCompra(cliente2)