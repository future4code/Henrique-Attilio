import React, {useState} from 'react';
import { CabecaEstilizada } from './styled'
import axios from "axios";
import api from '../services/api'


const turma = "planner-jackson-henrique"

const Topoheader = () => {

    const [text, setText] = useState()
    const [day, setDay] = useState ()

        const funcPegaTarefa = (event) => {
            setText(event.target.value)
        }
        const funcPegarSemana = (event) => {
            setDay(event.target.value)
        }

        
            const chamadaBotao = () => {
                axios.post (`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-henrique`, 
                            {day, text}) 
                    .then (answer => {
                        console.log(answer)
                    })
                    .catch(erro => {
                        console.log(erro)
                    })
                
            }







    return (
        <CabecaEstilizada>
            <div>
                <label htmlFor="tarefa">Nova tarefa: </label>
                <input type="text" placeholder="task" id="tarefa" onChange={funcPegaTarefa} value={text} />
            
                <select name="dias-semana" id="dias-semana" onChange={funcPegarSemana} value={day}>
                    <option value="domingo">Domingo</option>
                    <option value="segunda">Segunda-feira</option>
                    <option value="terca">Terça-feira</option>
                    <option value="quarta">Quarta-feira</option>
                    <option value="quinta">Quinta-feira</option>
                    <option value="sexta">Sexta-feira</option>
                    <option value="sabado">Sábado</option>
                </select>
                    <button id="botao" onClick={chamadaBotao}>Criar Tarefa</button>
            </div>
            
        </CabecaEstilizada>
    )
}
export default Topoheader