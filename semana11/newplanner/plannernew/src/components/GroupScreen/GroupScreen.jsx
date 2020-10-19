import React from 'react';
import ScreenTela from '../ScreenTela/ScreenTela'
import { CorpoEstilizado } from './styled'

const GroupScreen  = () => {
    return(
        <CorpoEstilizado>
            <ScreenTela semana="Domingo"/>
            <ScreenTela semana="Segunda-feira"/>
            <ScreenTela semana="Terça-feira"/>
            <ScreenTela semana="Quarta-feira"/>
            <ScreenTela semana="Quinta-feira"/>
            <ScreenTela semana="Sexta-feira"/>
            <ScreenTela semana="Sábado"/>
        </CorpoEstilizado>
    )
}

export default GroupScreen