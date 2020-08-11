//Exercícios de interpretação de código======================================================================================

//EXERCICIO 1
//R: Vai fazer a multiplicacao do 'valor em dolar'  * 'cotacao' e  sair o valor convertido 
//Saida do console: como o valor da contacao nao esta definido, e o valor na chamada na funcao e '100' entao vai ser undefined
//Ou se o usuario escrever o valor, vai ser 100 * o valor da cotacao

//EXERCICIO 2
//R: A funcao vai verificar qual e o 'tipo de investimento' e o 'valor' , com isso vai retornar o valor do investimento calculado
//novoMontante = 165
//segundoMontante =  vai dar um alert 'TIPO DE INVESTIMENTO INCORRETO' , pois 'Tesouro direto' nao esta declarado como opcao na funcao

//EXERCICIO 3
//R: vai correr todo o 'array numeros' e verificar se o numero e par vai gravar ele no 'array1' se for impar vai gravar no 'array2'
// e ao fim vai imprimir o tamanho de 'numeros' , 'array1' e 'array2' (quantidade de numeros)
// numeros.lenght = 14
// array1.lenght = 6
// array2.lenght = 8

//EXERCICIO 4
//R: Vai passar pelo array 'numeros' inteiro e fazer 2 comparacoes 
// na primeira comparacao e comparado 'numero < numero1'  sendo que 'numero' igual a o numero do array(nao a posicao)
//  e 'numero1' e uma string que esta preenchida com 'Infinity', entao toda vez que passar, 
// vai ser necessariamente falso, nao executando o bloco
// com isso, passando pelo segundo comparativo 'numero2 > numero' , se 'numero2' for maior que 'numero' entao sera 
// preenchido 'numero' dentro de 'numero2'
// que no final 'numero2' vai ser o maior numero do array e e 'numero1' vai estar com 'Infinity'

//Exercícios de Lógica de Programação===========================================================================================

//EXERCICIO 1

// let array = [28, 35, 36, 96, 74, 65, 94, 13]
//     for(let numeros of array){
//         console.log(numeros)
//     }

// let array = [28, 35, 36, 96, 74, 65, 94, 13]
//     for(let a =0; a<array.length; a++){
//         console.log(array[a])
//     }

// let array = [28, 35, 36, 96, 74, 65, 94, 13]
//     let a = 0
//     while(a<array.length){
//         console.log(array[a])
//         a++
//     }

//EXERCICIO 2

// const booleano1 = true
// const booleano2 = false
// const booleano3 = !booleano2
// const booleano4 = !booleano3

// A:  booleano1 && booleano2 && !booleano4
//     true && false && false = false  <== resposta

// B:   (booleano1 && booleano2) || !booleano3
//      (true && false) || true
//      false || true = true <== resposta

// C:   (booleano2 || booleano3) && (booleano4 || booleano1)
//      (false || true) && (false || true)
//      true && true = true <== resposta

// D:   !(booleano2 && booleano3) || !(booleano1 && booleano3)
//      !(false && true) || !(true && true)
//      !(false) || !(true)
//      true || false = true <== resposta

// E:   !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
//      !(true) && !(true) || (!false && true && true)
//      false && false || (true && true && true)
//      false && false || true
//      false || true = true <== resposta

//EXERCICIO 3
// R: Nao funciona 
// const quantidadeDeNumerosPares = Number(prompt("Digite um numero"))
// let i = 0
// let h = 1
// while(h <= quantidadeDeNumerosPares) {
//   console.log(i*2)
//   i++
//   h++
// }

// EXERCICIO 4

// let numero =[]
//     for(let i=0; i <= 2; i++){
//         let temp= Number(prompt("Digite o valor numero "+i))   
//         numero.push(temp) 
//     }
//     if((numero[0] === numero[1]) && (numero[1] === numero[2])){
//             console.log("Equilatero")
//     }
//     if((numero[0] === numero[1]) && (numero[1] !== numero[2]) && (numero[0] !== numero[2])){
//             console.log("Isósceles")
//     }
//     if((numero[0] !== numero[1]) && (numero[1] === numero[2]) && (numero[0] !== numero[2])){
//         console.log("Isósceles")
//     }
//     if((numero[0] !== numero[1]) && (numero[1] !== numero[2]) && (numero[0] === numero[2])){
//         console.log("Isósceles")
//     }  
//     if((numero[0] !== numero[1]) && (numero[1] !== numero[2]) && (numero[0] !== numero[2]) ){
//         console.log("Escaleno")
//     }

// EXERCICIO 5

// let numero = Number(prompt("digite o primeiro valor"))
// let numero2 = Number(prompt("digite o segundo valor"))
//     if(numero >= numero2){
//         console.log(`O maior e ${numero}` )
//     } else{
//         console.log(`O maior e ${numero2}` )
//     }

//     if(numero % numero2 !==0){
//         console.log(`${numero} nao e divisivel por ${numero2}`)
//     }else{
//         console.log(`${numero} e divisivel por ${numero2}`)
//     }
//     let temp = numero - numero2
//     console.log(`A diferenca entre eles e de ${temp}`)

//Exercícios de Funções=====================================================================================================

//EXERCICIO 1


let array = [28, 35, 36, 96, 74, 65, 94, 13]

let segMaior = 0
let segMenor = 0

function recebeValor(temp){
    for(temp2 of temp){
        if(segMaior < temp2){
            segMaior = temp2
            }
            
            else if(segMenor < temp2){
                segMenor = temp2
                }   
            
        }
        return(segMaior,segMenor)
}

if(confirm("Iniciar funcao")){
    recebeValor(array)
    console.log(segMaior)
    console.log(segMenor)
}



