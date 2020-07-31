/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

 

 console.log("Bem vindo ao jogo de Blackjack!")
 let op1Carta = [0]
 let op2Carta = [0]
 let op1Valor =[0]
 let op2Valor = [0]
 let op1Resul = 0
 let op2Resul = 0

 if(confirm("Quer iniciar uma nova rodada?")){
         for(let i = 0; i < 2; i++ ){
            const carta = comprarCarta()
            op1Carta[i] = carta.texto
            op1Valor[i] = carta.valor
            op1Resul = op1Resul + op1Valor[i]
         }
         for(let i = 0; i < 2; i++ ){
            const carta = comprarCarta()
            op2Carta[i] = carta.texto
            op2Valor[i] = carta.valor
            op2Resul = op2Resul + op2Valor[i]
         }
            console.log("Usuário - cartas: "+op1Carta+" pontuação: "+op1Resul)
            console.log("Computador - cartas: "+op2Carta+" pontuação: "+op2Resul)
               if (op2Resul < op1Resul){
                  console.log("O usuário ganhou !!!")
               } else if(op2Resul > op1Resul){
                        console.log("O computador ganhou !!!")
                     } else{
                        console.log("Empate !")
                     }
                               }else {
                              alert("o jogo acabou")
                                    }



// "Usuário - cartas: Q♣️ 10♣️  - pontuação 20" 
//"Computador - cartas: Q♣️ 10♣️  - p