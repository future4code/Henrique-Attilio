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
                    <option value="Domingo">Domingo</option>
                    <option value="Segunda">Segunda-feira</option>
                    <option value="Terca">Terça-feira</option>
                    <option value="Quarta">Quarta-feira</option>
                    <option value="Quinta">Quinta-feira</option>
                    <option value="Sexta">Sexta-feira</option>
                    <option value="Sabado">Sábado</option>
                </select>
                    <button id="botao" onClick={chamadaBotao}>Criar Tarefa</button>
            </div>
            
        </CabecaEstilizada>
    )
}
export default Topoheader