import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import Picprofile from './img/Foto_henrique.jpg'
import ImageLumber from './img/lumber.jpg'

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Charlotte'}
          fotoUsuario={'https://picsum.photos/id/1027/50/50'}
          fotoPost={'https://picsum.photos/id/1040/200/150'}
        />
        <Post
          nomeUsuario={'Martha'}
          fotoUsuario={'https://picsum.photos/id/177/50/50'}
          fotoPost={'https://picsum.photos/id/1054/200/150'}
        />
        <Post
          nomeUsuario={'Henrique'}
          fotoUsuario={Picprofile}
          fotoPost={ImageLumber}
        />
      </div>
    );
  }
}

export default App;
