import React from 'react';
import './CardPequeno.css'

function CardPequeno(Props) {
    return(
    <div>
        <div className='littlecard-container'>
            <img className='imag' src={Props.location} />
            <a className='escrito1' href="www.linkedin.com/in/henrique-attilio">Link do Linkedin</a>
        </div>
        <div className='littlecard-container'>
            <img className='imag' src={Props.email} />
            
            <a className='escrito2' href = "mailto: hbattilio@gmail.com">Email: Hbattilio@gmail.com</a>
        </div>
    </div>
    )
}

export default CardPequeno;

