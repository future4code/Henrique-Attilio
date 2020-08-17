import React from 'react';
import { render } from '@testing-library/react';
import Botao from './Botao'

class Etapa1 extends React.Component{
    state = {
        pagina: ""

    };


render() {
    
        return(
        <form>
            <h1>ETAPA 1 - DADOS GERAIS</h1>

                <label for="formNome">1. Qual o seu nome ?</label>
                <input type="text" name="formNome"/>

                <label for="formIdade">2. Qual a sua idade ?</label>
                <input type="number" name="formIdade"/>

                <label for="formMail">3. Qual o seu E-mail ?</label>
                <input type="email" name="formMail"/>

                <label for="opcaoEnsino">Qual a sua escolaridade</label> 
                    <select name="opcaoEnsino">
                        <option value="Fundamental Incompleto">Fundamental Incompleto</option>
                        <option value="Fundamental Completo">Fundamental Completo</option>
                        <option value="Ensino Medio Incompleto">Ensino Medio Incompleto</option>
                        <option value="Ensino Medio Completo">Ensino Medio Completo</option>
                        <option value="Superior Incompleto">Superior Incompleto</option>
                        <option value="Superior Completo">Superior Completo</option>
                    </select>
                        <Botao funcaoTrocarPagina ={this.onClickEtapa2}/>
        </form>
        )
    }
}

export default Etapa1