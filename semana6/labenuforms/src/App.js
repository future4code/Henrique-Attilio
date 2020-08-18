import React from 'react';
import logo from './logo.svg';
import './App.css';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Final from './components/Final'
import Botao from './components/Botao'

class App extends React.Component {
  state = {
    pagina: "etapa1"
  }

  onClickEtapa1 = () => {
      this.setState({
      pagina: "etapa1"
    });
  };

  onClickEtapa2 = () => {
    this.setState({
      pagina: "etapa2"
    });
  };

  onClickEtapa3 = () => {
    this.setState({
      pagina: "etapa3"
    });
  };

  onClickFinal = () => {
    this.setState({
      pagina: "final"
    });
  };

  render() {
    const homegame = () => {
      switch(this.state.pagina){
        case "etapa1":
          return<Etapa1/>;
        case "etapa2":
          return<Etapa2/>;
        case "etapa3":
          return<Etapa3/>;
        case "final":
          return<Final/>;
        default:
          return <div> Padrao</div>
      }
    };
    return(
      <div>
        {homegame()}
      </div>
    );

  }

  
  
  
  
  // render() {
  //   return(
  //   <div>
      
  //     <Etapa1/>
  //     <Etapa2/>
  //     <Etapa3/>
  //     <Final/>
  //     </div>
      
  //   );
  // };
}

export default App;
