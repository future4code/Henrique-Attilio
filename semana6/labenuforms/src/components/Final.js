import React from 'react';
import { render } from '@testing-library/react';
import Botao from './Botao'

class Final extends React.Component{
    state = {
        pagina: ""

    };


render() {
    
    return(
    <div>
        <h1>O FORMULARIO ACABOU </h1>
        <p>Muito obrigado por participar! Entraremos em contato !</p>
        <Botao funcaoTrocarPagina ={this.onClickEtapa1} />
    </div>
    )
    }
}

export default Final