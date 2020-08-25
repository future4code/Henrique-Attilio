import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

export default class App extends React.Component{
  state = {
    idCad: [],
    nomeCad: [],
    emailCad: ""
  };

  pegarTodosUsuarios = () => {
    const requisicao = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers:{
          Authorizarion: "henrique-attilio-jackson"
        }
      }
    );

    request
      .then((anwser) => {
        this.setState({nomeCad: anwser.data.result.name});
        this.setState({idCad: anwser.data.result.id});
      })
      .catch((errorRet) => {
      console.log("Ocorreu um erro de conexao");
      });
    };

  pegarUsuariosPeloId = () => {
    const requisicaoid = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id",
      {
        headers:{
          Authorizarion: "henrique-attilio-jackson"
        }
      }
    );

    request
      .then((anwserId) => {
        this.setState({nomeCad: anwserId.data.result.name});
        this.setState({idCad: anwserId.data.result.id});
        this.setState({emailCad: anwserId.data.result.email});
        })
        .catch((errorId) => {
          console.log("Ocorreu um erro de conexao ID")
        });
    };

  procurarUsuarios = () => {
    const usuariosSearch = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=&email=",
      {
        headers:{
          Authorizarion: "henrique-attilio-jackson"
        }
      }
    );

    request
      .then((anwserUser) => {
        this.setState({nomeCad: anwserUser.data.result.name});
        this.setState({idCad: anwserUser.data.result.id});
        })
        .catch((errorUser) => {
          console.log("Ocorreu um erro de conexao USUARIO")
        });
  }

  criarUsuario = () => {
    const corpo = {
      nome: this.state.nomeCad
    };

    const requisicaoIdUser = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body,
      {
        headers: {
          Authorizarion: "henrique-attilio-jackson"
        }
      }
    );

    request
      .then((anwserCreate) => {
        alert(`O cliente ${this.state.nomeCad} foi criado no cadastro`)
        
      }
      ) 
  }



}














// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
