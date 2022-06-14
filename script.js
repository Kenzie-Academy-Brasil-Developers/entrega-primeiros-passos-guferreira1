const refrigerante = parseFloat(prompt('Digite o valor do refrigerante'))
let refrigeranteQuantidade = parseInt(prompt("Quantas unidades de refrigerante ?")) 
let refrigeranteTotal = refrigerante * refrigeranteQuantidade


const macarrao = parseFloat(prompt('Digite o valor do macarrão'))
let macarraoQuantidade = parseInt(prompt('Quantas unidades de macarrão ?'))
let macarraoTotal = macarrao * macarraoQuantidade


const ervilha = parseFloat(prompt('Digite o valor da ervilha'))
let ervilhaQuantidade = parseInt(prompt('Quantas quantidades de ervilha ?'))
let ervilhaTotal = ervilha * ervilhaQuantidade


const arroz = parseFloat(prompt('Digite o valor do arroz'))
let arrozQuantidade = parseInt(prompt('Quantas quantidades de arroz ?'))
let arrozTotal = arroz * arrozQuantidade

const feijao = parseFloat(prompt('Digite o valor do feijao'))
let feijaoQuantidade = parseInt(prompt('Quantas quantidades de feijão ?'))
let feijaoTotal = feijao * feijaoQuantidade

const vinho = parseFloat(prompt('Digite o valor do vinho'))
var vinhoQuantidade = parseInt(prompt('Quantas quantidades de vinho ?'))
let vinhoTotal = vinho * vinhoQuantidade

let total = (refrigeranteTotal + macarraoTotal + ervilhaTotal + arrozTotal + feijaoTotal + vinhoTotal)
let totalDividido = total / 2
//console.log (total / 2)
alert(`Valor a ser pago por cada: R$ ${totalDividido}`)

if (total % 2 == 0) {
    console.log (`Seu amigo pagará o vinho`)
} else {
    console.log (`Dividir a conta total`)
}

alert(`Valor total a ser pago: R$ ${total}`)