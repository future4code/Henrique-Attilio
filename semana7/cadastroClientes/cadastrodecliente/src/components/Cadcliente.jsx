import React from 'react';
import axios from 'axios'














class Cadcliente extends React.Component{
    state = {
        nomeValor:"",
        emailValor:"",
    }

    onChangeNome = (event) => {
        this.setState({nomeValor: event.target.value})
    }


    onChangeEmail = (event) => {
        this.setState({emailValor: event.target.value})
    }


    criarUsuario = () => {
    const body = {
      name: this.state.nomeValor,
      email: this.state.emailValor
    }
        

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
        headers: {
          Authorization: 'henrique-attilio-jackson'
        }
      }).then(anwserCreate => {
          console.log(anwserCreate)
            // alert(`O cliente ${this.state.nomeValor} foi criado no cadastro`)
      }).catch(erro => {
        //   console.log(erro)
          console.log(erro.mensage)
      })
    }
  


    render() {
        return(
            <div>
                <label htmlFor="nomeCad">Nome: </label>
                <input type="text" placeholder="nome" name="nomeCad" value={this.state.nomeValor} onChange={this.onChangeNome}/>
                <label htmlFor="emailCad">Email: </label>
                <input type="text" placeholder="email" name="emailCad" value={this.state.emailValor} onChange={this.onChangeEmail}/>
                <button onClick={this.criarUsuario}>Criar Usuario</button>
            </div>
        )
    }
}

export default Cadcliente
