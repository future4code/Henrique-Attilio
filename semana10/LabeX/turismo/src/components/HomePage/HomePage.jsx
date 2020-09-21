import React, { Component, useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-green/theme.css';
import styled from 'styled-components';
import axios from 'axios';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/henrique-attilio-jackson"

const Space = styled.div`
color: red;
display: flex;
flex-direction: column;
width: 100vw;
height: 80vh;
justify-content: center;
align-items: center;
background-color: pink;

`;

const HomePage = () => {

    const [emailValor, setEmailValor] = useState("jorgetabuna@bol.com.br");
    const [senhaValor, setSenhaValor] = useState("852963");

        const funcPegarUsuario = (event) => {
        setEmailValor(event.target.value)
        }

            const funcPegarSenha = (e) => {
            setSenhaValor(e.target.value)
            }
        
        const pegarLogin = () => {
            const body = {
                email: emailValor,
                password: senhaValor,
            }
            
            axios.post(`${baseUrl}/login`, body)    
                .then (retorno => {
                    console.log(retorno.data.token)
                }).catch(erro => {
                    console.log(erro)
                })
             
             console.log(emailValor, senhaValor)
            
        }

    
     return (
    <Space>
        <h1>Labex</h1>
        <h3>A sua aventura espacial começa aqui</h3>
        
        <label htmlhtmlFor="nv">Usuario</label>
        <InputText id="nv" value={emailValor} onChange={funcPegarUsuario} />
        <hr/>
        <label htmlhtmlFor="nr">Senha</label>
        <InputText id="nr" value={senhaValor} onChange={funcPegarSenha}/>
        
        
        <hr/>
        <Button label="Confirmar" className="p-button-secondary" onClick={pegarLogin}/>
        
             
        
        <NavBar/>
    </Space>

     )
    
}
export default HomePage;

