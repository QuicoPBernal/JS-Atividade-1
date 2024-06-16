//Atividade 01
var nome = prompt("Digite seu nome: ")
console.log(`Olá ${nome}! Seja bem vindo(a)`)

//Atividade 02
var num1 = Number(prompt("Digite um número: "))
var num2 = Number(prompt("Digite outro número: "))
var soma = num1 + num2
console.log(`A soma dos números ${num1} e ${num2} é: ${soma}`)

//Atividade 03
var idade = Number(prompt("Digite sua idade: "))
var ano = 2024 - idade
console.log(`Você nasceu em: ${ano}`)

//Atividade 04
var raio = Number(prompt("Digite o raio do círculo: "))
var area = Math.PI * (raio ** 2)
console.log(`A área do círculo é: ${area.toFixed(2)}`)

//Atividade 05
var dolar = Number(prompt("Digite o valor em dólares: "))
var euro = dolar * 0.85
console.log(`O valor em euros é: ${euro.toFixed(2)}`)

//Atividade 06
var preco = Number(prompt("Digite o preço do produto: "))
var desconto = preco * 0.1
var precoComDesconto = preco - desconto
console.log(`O preço com desconto é: ${precoComDesconto.toFixed(2)}`)

//Atividade 07
var metros = Number(prompt("Digite o valor em metros: "))
var centimetros = metros * 100
console.log(`O valor em centímetros é: ${centimetros}`) 