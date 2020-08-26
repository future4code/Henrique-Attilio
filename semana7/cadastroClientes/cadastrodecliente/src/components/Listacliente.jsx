import React from 'react';
import styled from 'styled-components'

const BotaoDeletar = styled.span`
color:red;
`



class Listacliente extends React.Component{
    state = {
        usuarios: [
            {
                id: 1,
                name: "Cebolinha"
            },
            {
                id: 2,
                name: "Magali"
            }
        ]
    }

    render(){
        return(
            <div>
                {this.state.usuarios.map(usuario =>{
                    return(<p key={usuario.id} >
                        {usuario.name}
                        <BotaoDeletar> X</BotaoDeletar>
                    </p>
                    )
                })}
            </div>
        )
    }
}

export default Listacliente