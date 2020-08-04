function callButton (){
    
    const inputBotao = document.getElementById("tarefa")
    let tarefa1 = inputBotao.value
    if( tarefa1 !==""){
        const seletorSemana =document.getElementById("dias-semana")
    let semana = seletorSemana.value
    
    
    const info1 =document.getElementById(semana)
    info1.innerHTML += `<p class="riscado" onclick="riscarTarefa()">${tarefa1}</p>`

    inputBotao.value = ""
    }else{
        alert("informacao invalida")
    }
    
}

function riscarTarefa(){
    document.getElementsByClassName("riscado").style.color ="blue";

    // style="text-decoration-line: line-through"
//estilo.style = "text-decoration-line: line-through"

}



