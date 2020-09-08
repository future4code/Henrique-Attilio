import React from 'react';
import Axios from 'axios';



class AdicionarMusicPlay extends React.Component{
state ={
  objetoPlaylist:[]

}




puxarPlaylist = () => {
    Axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`,
      {
        headers:{
          Authorization: "henrique-attilio-jackson"
        }
      }
    )
      .then((anwserPuxar) => {
        console.log(anwserPuxar.data)
        this.setState({objetoPlaylist:anwserPuxar.data});
      })
      .catch(erro => {
        alert(erro)
      });
}





componentDidMount(){
this.puxarPlaylist()
}

componentDidUpdate(){
  console.log(this.state.objetoPlaylist)
}





  render(){
    return(
        <div>
           {this.state.objetoPlaylist.map((arrayPlaylist) => {
              return(
              <div>
                <p key={arrayPlaylist.id}>{arrayPlaylist.name}</p>
                <hr />
              </div>
          
                );
          })} 
          

        </div>    
    );
    
  }

}

export default AdicionarMusicPlay