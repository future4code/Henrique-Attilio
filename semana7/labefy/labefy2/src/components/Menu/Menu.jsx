import React from 'react';
import AdicionarMusicPlay from '../AdicionarMusicPlay/AdicionarMusicPlay'
import CriarPlaylist from '../CriarPlaylist/CriarPlaylist'
import VisualizarDetPlaylist from '../VisualizarDetPlaylist/VisualizarDetPlaylist'
import VisualizarPlaylist from '../VisualizarPlaylist/VisualizarPlaylist'



class Menu extends React.Component{
  state = {
    paginaAtual: "AdicionarMusicPlay",
  };
  


  setarAdicionarMusicPlay = () => {
    this.setState({paginaAtual: "AdicionarMusicPlay" })
}

  setarCriarPlaylist = () => {
    this.setState({paginaAtual: "CriarPlaylist" })
}

  setarVisualizarDetPlaylist = () => {
      this.setState({paginaAtual: "VisualizarDetPlaylist" })
  }

  setarVisualizarPlaylist = () => {
    this.setState({paginaAtual: "VisualizarPlaylist" })
}



  render(){
    const pagAtual = () => {
      if (this.state.paginaAtual === "AdicionarMusicPlay"){
      return <AdicionarMusicPlay/>
          }else if (this.state.paginaAtual === "CriarPlaylist"){
            return <CriarPlaylist/>
              }else if (this.state.paginaAtual === "VisualizarDetPlaylist"){
              return <VisualizarDetPlaylist/>
                }else if (this.state.paginaAtual === "VisualizarPlaylist"){
                return <VisualizarPlaylist/>
                }
        }

    return(
      <div>
          <h3>Menu Labefy</h3>
            <div>
                {pagAtual()}
            </div>
                <div>
                  <button onClick={this.setarCriarPlaylist}>Criar Playlist</button>
                  <button onClick={this.setarAdicionarMusicPlay} >Adicionar Musica</button>
                  <button onClick={this.setarVisualizarDetPlaylist}>Visualizar Detalhes da Playlist</button>
                  <button onClick={this.setarVisualizarPlaylist}>Visualizar Playlist</button>
                </div>
        </div>

      );
    }

  }


export default Menu