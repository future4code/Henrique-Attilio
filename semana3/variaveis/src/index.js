
/*
Exercícios de interpretação de código
1:
a = 10
b = 10
console.log(b)
b = 5
console.log(a, b)
 
resposta = console.log(b) = 10

reposta = console.log(a, b) = como nao foi declarado o tipo da variavel, ela sera considerada como um objeto global, 
passivel de modificacao, entao vai aparecer na tela do console 10 e 5 ( o professor tocou no assunto, 
    mais no material nao tem referencia sobre objeto global)

2:
a = 10
b = 20
c = a
b = c
a = b
console.log(a, b, c)

reposta = a= 10 , b=10, c= 10
*/




//Exercícios de escrita de código
// 1-a: const nome
// 1-b: let idade

// 1-c: console.log(typeof(nome))
// 1-c: console.log(typeof(idade))

/*
1-d: aparece no console "Uncaught SyntaxError: Missing initializer in const declaration" 
ele nao tem como informar o tipo, pois nao tem nenhum dado para categorizar
*/

/*
const nome = prompt ("Qual o seu nome ?")
let idade = prompt ("Qual a sua idade ?")

console.log(nome)
console.log(idade)

console.log(typeof(nome))
console.log(typeof(idade))

console.log("Olá "+ nome +", você tem " + idade +" anos")
alert("Olá "+ nome +", você tem " + idade +" anos")
*/

/*alert("Olá "nome", você tem "idade" anos") */



/* 1-e: o tipo foi string, pois como foi coletado pela interfance (prompt) , ele vem como um texto digitado pelo usuario, 
sem definicao de tipo*/

/*1-f:
console.log("Olá "+ nome +", você tem " + idade +" anos")
alert("Olá "+ nome +", você tem " + idade +" anos")
*/

// vou declarar todas as variaveis con CONST
/*
2:

const end = prompt ("Qual o seu endereco ?")
console.log(end)
alert(end)

const bairro = prompt ("Qual o seu bairro?")
console.log(bairro)
alert(bairro)

const cidade = prompt ("Qual o sua cidade?")
console.log(cidade)
alert(cidade)

const estado = prompt ("Qual o seu estado?")
console.log(estado)
alert(estado)

const pais = prompt ("Qual o seu pais?")
console.log(pais)
alert(pais)

*/
/*
//3-a
let comida = ["panqueca", "lasanha", "churrasco", "mousse", "chourizo"]
console.log(comida)
alert(comida)

// 3-b
console.log("Minha comida preferida e " + comida[0])
console.log("Minha comida preferida e " + comida[1])
console.log("Minha comida preferida e " + comida[2])
console.log("Minha comida preferida e " + comida[3])
console.log("Minha comida preferida e " + comida[4])

alert("Minha comida preferida e " +comida[0]+ "\n"+"Minha comida preferida e " +comida[1]+ "\n"+"Minha comida preferida e "+comida[2]+"\n"+"Minha comida preferida e "+comida[3]+"\n"+"Minha comida preferida e "+comida[4])

// 3-c

comida[1] = prompt("qual a sua comida preferida")
console.log(comida)
alert(comida)

*/
//4

let perguntas = ["Voce tomou cafe da manha ? ", "Voce almocou hoje ? ", "Voce jantou hoje ? "]
let respostas = [true, false, true]
console.log(perguntas[0] + respostas[0])
alert(perguntas[0] + respostas[0])
console.log(perguntas[1] + respostas[1])
alert(perguntas[1] + respostas[1])
console.log(perguntas[2] + respostas[2])
alert(perguntas[2] + respostas[2])












