import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Involucro, NomeSemana } from './styled'

const ScreenTela  = (props) => {

    const [tarefa, setTarefa] = useState()

    const pegarTarefas = () => {
        Axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-henrique`)
        .then (answer => {
            setTarefa([answer.data]) 
            console.log(tarefa)
        })
        .catch(erro => {
            console.log(erro)
        })

    }
    
    useEffect(() => {
        pegarTarefas()

    }, [])


    return(
        <Involucro>
            <NomeSemana>{props.semana}</NomeSemana>
            <div>
                <p>Tarefas</p>
            </div>
        </Involucro>

    )
}

export default ScreenTela