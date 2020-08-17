import React from 'react';
import { render } from '@testing-library/react';

class Botao extends React.Component{
    state = {
        pagina: ""

    };


render() {
    
    return(
    <div>
        <button onClick={this.props.funcaoTrocarPagina}>Enviar</button>
    </div>
    )
    }
}

export default Botao