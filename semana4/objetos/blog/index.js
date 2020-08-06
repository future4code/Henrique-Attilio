let i = 0
const varal = []
function capturarDados(){
    const titulo = document.getElementById("titulo-post")
    const tituloNome = titulo.value
      
    const autor = document.getElementById("autor-post")
    const autorNome = autor.value
        
    const texto = document.getElementById("conteudo-post")
    const textoConteudo = texto.value
    
    const container = document.getElementById("container-de-posts")
    
    container.innerHTML += `<h1>Titulo: ${tituloNome}</h1>
    <h3>Autor: ${autorNome}</h3>
    <p>Texto: ${textoConteudo}</p> <br> `
        
        function postBlog(tituloX, autorX, textoX){
            this.tituloY = tituloX;
            this.autorY = autorX;
            this.textoY = textoX;
        }
                let meuPost = new postBlog(tituloNome, autorNome, textoConteudo);
                
                
                varal[i] = meuPost
                i++
                //varal.push(meuPost)
                console.log(varal)
                

                    titulo.value = ""
                    autor.value = ""
                    texto.value = ""
                            
                    
                    
    }




