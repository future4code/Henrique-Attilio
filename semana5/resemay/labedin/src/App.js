import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import fotoperfil from './image/Foto_henrique.jpg';
import CardPequeno from './components/CardPequeno/CardPequeno';
import email_icon from './image/email-icon.jpg'
import location_icon from './image/location-pin.png'
import logo_alterdata from './image/alterdata.png'
import logo_movimento from './image/movimento.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem = {fotoperfil}
          nome="Henrique Attilio" 
          descricao="Ola, meu nome e Henrique, tenho 35 anos. Sou de Sao Bernando do campo, mais moro em uberlandia a mais de 20 anos. Minha tragetoria profissional pode ser divida em 2 partes, como vendedor e como tecnico de suporte"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        <CardPequeno
          location={location_icon}
          email ={email_icon}
        />
       
      </div>
      
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={logo_movimento}
          nome="Movimento Sistemas" 
          descricao="Atendimento ao cliente, elaboração modelos de processo a ser implantação, parametrização do programa. Suporte via remoto" 
        />
        
        <CardGrande 
          imagem={logo_alterdata}
          nome="Alterdata Software" 
          descricao="Técnico de Suporte para sistema de Varejo, Consultor Comercial, Prospecção e relacionamento a clientes" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
