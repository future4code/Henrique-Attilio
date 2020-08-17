import React from 'react';
import { render } from '@testing-library/react';
import Botao from './Botao'

class Etapa2 extends React.Component{
    state = {
        pagina: ""

    };


render() {
        return(
        <form>
            <h1>ETAPA 2 - INFORMACOES DO ENSINO SUPERIOR</h1>
                <label for="formCurso">5. Qual curso?</label>
                <input type="text" name="formCurso"/>

                <label for="formEnsino">6. Qual a unidade de ensino?</label>
                <input type="text" name="formEnsino"/>
                <Botao funcaoTrocarPagina ={this.onClickEtapa3}/>
        </form>
        )
    }
}

export default Etapa2