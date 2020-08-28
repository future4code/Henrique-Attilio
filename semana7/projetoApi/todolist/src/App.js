import React from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

class App extends React.Component {
  state = {
    nomeAtiv:"joao",
    tipo:'educaciona',
    participantes:` joao e maria 2`,


  }


puxarAtividade = () => {
  Axios.get(`https://www.boredapi.com/api/activity/`)
  .then((awnser) => {
    console.log(awnser)
    this.setState({
      nomeAtiv: awnser.data.activity,
      tipo: awnser.data.type,
      participantes: awnser.data.participants,
      });
    })
    .catch((error) => {
      console.log(error);
    } );

}




  render(){
    return(
      <div>
        <p>
          <strong>Nome </strong> {this.state.nomeAtiv}
        </p>
        <p>
          <strong>Tipo </strong> {this.state.tipo}
        </p>
        <p>
          <strong>Participantes </strong> {this.state.participantes}
        </p>
        <button onClick={this.puxarAtividade}> Me de uma nova atividade </button>
      </div>
    )
  }

}

export default App