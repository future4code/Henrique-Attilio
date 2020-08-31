import React from 'react';
import axios from 'axios';



class CriarPlaylist extends React.Component{
  state = {
    nomePlay:"",

  }

  onChangeNomePlaylist = (event) => {
    this.setState({nomePlay: event.target.value})
  }


  nascerPlaylist = () => {
    const body = {
      name: this.state.nomePlay,
    }
      axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
        headers: {
          Authorization: 'henrique-attilio-jackson'
        }
      })
        .then(resposta => {
          alert(`A playlist ${this.state.nomePlay} foi criada com sucesso`)
          this.setState({nomePlay:"",})
        })
          .catch(erro => {
            alert(`Playlist ja incluida`)
          })
  }

  componentDidMount(){};

  componentDidUpdate(){};
 

  render(){
    return(
      <div>
        <h1>Crie a sua playlist</h1>
        <label htmlFor="nomePlaylist">Nome Da Playlist: </label>
        <input type="text" name="nomePlaylist" value={this.state.nomePlay} onChange={this.onChangeNomePlaylist} />
        <button onClick={this.nascerPlaylist} >Incluir Playlist</button>
      </div>
    )
  }

}

export default CriarPlaylist