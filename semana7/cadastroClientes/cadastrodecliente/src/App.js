import React from 'react';
import axios from "axios";
import Cadcliente from '../src/components/Cadcliente';
import Listacliente from '../src/components/Listacliente';

export default class App extends React.Component{
  state = {
    paginaAtual: "Cadcliente"
  };

  
  // pegarUsuariosPeloId = () => {
  //   const requisicaoid = axios.get(
  //     "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id",
  //     {
  //       headers:{
  //         Authorizarion: "henrique-attilio-jackson"
  //       }
  //     }
  //   );

    
  //     .then((anwserId) => {
  //       this.setState({nomeCad: anwserId.data.result.name});
  //       this.setState({idCad: anwserId.data.result.id});
  //       this.setState({emailCad: anwserId.data.result.email});
  //       })
  //       .catch((errorId) => {
  //         console.log("Ocorreu um erro de conexao ID")
  //       });
  //   };

  // procurarUsuarios = () => {
  //   const usuariosSearch = axios.get(
  //     "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=&email=",
  //     {
  //       headers:{
  //         Authorizarion: "henrique-attilio-jackson"
  //       }
  //     }
  //   );

    
  //     .then((anwserUser) => {
  //       this.setState({nomeCad: anwserUser.data.result.name});
  //       this.setState({idCad: anwserUser.data.result.id});
  //       })
  //       .catch((errorUser) => {
  //         console.log("Ocorreu um erro de conexao USUARIO")
  //       });
  // }

  

  mudarPagina = () => {
    if (this.state.paginaAtual === "Cadcliente"){
      this.setState({paginaAtual: "Listacliente" })
    }
    else if(this.state.paginaAtual === "Listacliente"){
      this.setState({paginaAtual: "Cadcliente"})
    }
  }



    render (){
const pagAtual = () => {
    if (this.state.paginaAtual === "Cadcliente"){
      return <Cadcliente/>
    }else if(this.state.paginaAtual === "Listacliente"){
      return <Listacliente/>
    }
}

      return(
        <div>
          {pagAtual()}
           <button onClick={this.mudarPagina} > Trocar de Pagina </button> 
        </div>


      );

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
