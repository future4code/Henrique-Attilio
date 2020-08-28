import React from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

class App extends React.Component {
  state = {
    nomeMissao:[],
  }

pegarMissoes = () => {
  Axios.get(`https://api.spacexdata.com/v3/missions`)
  .then((anwser) => {
    this.setState({nomeMissao: anwser.data
      });
      console.log(anwser.data)
  })
    .catch((errorRet) => {
      console.log(errorRet)
        })
    
  
}

componentDidMount(){
  this.pegarMissoes()
}

  render(){
    return(
      <div>
        {this.state.nomeMissao.map((poder) => {
          return(
            <div>
                <h1 key={poder.mission_id}>{poder.mission_name}</h1>  
                <a href={poder.wikipedia}>Link para o site da empresa</a>
                  <ul>
                    {poder.manufacturers.map((fabric) => {
                      return <li key={fabric}>{fabric}</li>;
                    })}
                  </ul>
            </div>
          )
        }
        )}
    )
    

  return (
    
      
      
      


    </div>
    );
  }
}

export default App;
