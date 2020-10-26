//Exercicio 1
//a: Passamos varival atribuido o process.argv e posicao o array que vai receber o argumento quando ele for digitado na linha de commando
//b: 
// const nome = process.argv[2];
// const idade = process.argv[3];
// console.log("Ola, "+ nome+"! Voce tem "+idade+" anos" )
//c: 
// const nome = process.argv[2];
// const idade = process.argv[3];
// const convFut = Number(idade)
// const idadeFut = Number(idade) + 7
// console.log("Ola, "+ nome+"! Voce tem "+idade+" anos. Em sete anos voce tera "+idadeFut+"" )
//Exercicio 2
//a: 
// const operacao = process.argv[2];
// const valor1 = Number(process.argv[3]);
// const valor2 = Number(process.argv[4]);
// let resul = 0;
// switch(operacao){
//     case 'add':
//         resul = valor1 + valor2
//         break;
//     case 'sub':
//         resul = valor1 - valor2
//         break;
//     case 'mult':
//         resul = valor1 * valor2
//         break;
//     case 'div':
//         resul = valor1 / valor2
//         break;
//     default:
//         console.log("valor nao informado")
//     }
// console.log(resul)
//Exercicio 3
//a:
// const tarefa = String(process.argv[2]);
// let list = ["Lavar a louca", "Lavar a pia"]
// console.log("Tarefa adicionada com sucesso!")
// list.push(tarefa)
// console.log("Tarefas: ")
// console.log(list)



























// const paisesss = require("./countries")

// const name = process.argv[2];

// const procuraPorPais = (name) => {

//     const filtragemPaises = paisesss.filter((apelido) => {
//         return apelido.name.includes(name);
//     })
//         return filtragemPaises;
// }

// console.table(procuraPorPais(name));


