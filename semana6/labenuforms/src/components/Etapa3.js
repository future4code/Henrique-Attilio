import React from 'react';
import { render } from '@testing-library/react';
import Botao from './Botao'

class Etapa3 extends React.Component{
    state = {
        pagina: ""

    };


render() {
    
    return(
    <form>
        <h1>ETAPA 3 - INFORMACOES GERAIS DE ENSINO</h1>
                <label for="formNotEnd">5. Por que voce nao terminou um curso de graduacao ?</label>
                <input type="text" name="formNotEnd"/>

                <label for="opcaoCurso">6. Voce fez algum curso complementar</label>
                    <select name="opcaoCurso">
                        <option value="Nenhum">Nenhum</option>
                        <option value="Sim">Sim, Quais ?</option>
                
                    </select>
                    <Botao funcaoTrocarPagina ={this.onClickFinal} />

    </form>
    )
    }
}

export default Etapa3