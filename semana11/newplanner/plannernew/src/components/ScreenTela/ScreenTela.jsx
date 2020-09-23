import React from 'react';
import { Involucro, NomeSemana } from './styled'

const ScreenTela  = (props) => {
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