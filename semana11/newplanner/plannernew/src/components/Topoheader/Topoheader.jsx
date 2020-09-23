import React from 'react';
import { CabecaEstilizada } from './styled'


const Topoheader = () => {
    return (
        <CabecaEstilizada>
            <div>
                <label htmlFor="tarefa">Nova tarefa: </label>
                <input type="text" placeholder="task" id="tarefa"/>
            
                <select name="dias-semana" id="dias-semana">
                    <option value="domingo">Domingo</option>
                    <option value="segunda">Segunda-feira</option>
                    <option value="terca">Terça-feira</option>
                    <option value="quarta">Quarta-feira</option>
                    <option value="quinta">Quinta-feira</option>
                    <option value="sexta">Sexta-feira</option>
                    <option value="sabado">Sábado</option>
                </select>
                    <button id="botao">Criar Tarefa</button>
            </div>
            
        </CabecaEstilizada>
    )
}
export default Topoheader