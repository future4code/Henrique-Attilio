import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const BotaoDeletar = styled.span`
color:red;
`



class Listacliente extends React.Component{
    state = {
        usuarios: []
    }

    pegarTodosUsuarios = () => {
    axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers:{
          Authorization: "henrique-attilio-jackson"
        }
      }
    )

        .then((anwser) => {
          console.log(anwser.data)
        this.setState({usuarios: anwser.data});
        
      })
      .catch((errorRet) => {
      console.log(errorRet)
      console.log(errorRet.message)

      });
    };

    

    apagarUsuario = (idDoUsuario) => {
        console.log(idDoUsuario)
         axios.delete(
             `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idDoUsuario}`,
            {
                                
            headers:{
                Authorization: "henrique-attilio-jackson"
                }
                
            })
            
        .then(anwserDel => {
            this.pegarTodosUsuarios()
            alert(`Tem certeza que deseja deletar ?`)
            console.log(anwserDel)
        })
        .catch((errorDel) => {
        console.log(errorDel)
          
        })
    }
    



    componentDidMount = () => {
        this.pegarTodosUsuarios()
    }
    
    


    render(){
        return(
            <div>
                {this.state.usuarios.map(usuario =>{
                    return(<p key={usuario.id} >
                        {usuario.name}
                        <BotaoDeletar onClick={() => this.apagarUsuario(usuario.id)}> X</BotaoDeletar>
                    </p>
                    )
                })}
            </div>
        )
    }
}

export default Listacliente