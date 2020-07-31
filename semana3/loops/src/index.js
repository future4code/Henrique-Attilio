//EXERCICIO 1

//Let valor = 0 // Declaracao de varivel valor =0
//for(let i = 0; i < 5; i++) { // Declaracao da variavel 'i' com valor igual a 0 , 
//comparativo se o valor de 'i' e menor que 5 , e incremento de '1'  de +1 a cada vez que executa
//valor += i // soma do valor de 'valor' com o valor de 'i' ==> ex: 0 + 1 = 1 / 1 +2 = 3 / 3 + 3 = 6 / 6 + 4 = 10 
  //}
  //console.log(valor) // aparece o valor quando a condicao do 'for' for falsa  i=5


  //EXERCICIO 2

  //a: 10, 11, 12, 15
  //b: nao suficiente, pois ele corre todo o array (o indice e implicito), 
  
  //DESAFIO 1

  //iria aparecer 3x o numero 0 um debaixo do outro  (coloquei essa reposta antes de executar)
  // mais vi que esqueci a soma de concatenacao na varivael, e que o loop comeca no 0, nao no 1


  //EXERCICIO 3

  //const arrayOriginal = [85, 96, 74, 12, 36, 56]
  //console.log(arrayOriginal)
// a:
//     for(let h of arrayOriginal){
//         console.log(h)
//     }

// B:
// const arrayOriginal = [85, 96, 74, 12, 36, 56]
//     for(let h of arrayOriginal){
//         let g = h / 10
//         console.log(g)
//     }


//C: 
// const arrayOriginal = [85, 96, 74, 12, 36, 56]
// const array =[0]
// let i = 0
//     for(let h of arrayOriginal)
//     {
//           let resto = h%2
//         if (resto ===0)
//             {
//             array[i] = h
//             i +=1 
//             }
//     }
//     console.log(array)
    

//D:
// const arrayOriginal = ["85", "96", "74", "12", "36", "56"]
// let i = 0
// let array = [0]
//     for(let h of arrayOriginal){
//         array[i] = ("O elemento do índex " +i+ " é " +h)
//         i ++
//     }
//     console.log(array)

//E:
// const arrayOriginal = ["85", "96", "74", "12", "36", "56"]
// let valorMaximo = 0
// let valorMinino = 0
//     for(let h of arrayOriginal){
//         if (h > valorMaximo) {
//             valorMaximo = h
//         }
        
//     }
//     valorMinino = valorMaximo
//         for(let h of arrayOriginal){
//             if (h > valorMinino) {
//                 valorMinino = h
//             }
            
//         }

//     console.log(valorMaximo)
//     console.log(valorMinino)

    