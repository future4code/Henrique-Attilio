import React from 'react';
import {useHistory} from 'react-router-dom'


const NavBar = () => {
    const history = useHistory()

    const vaiParaHome = () => {
        history.push("/")
    }
    const vaiListadeViagens = () => {
        history.push("/ListaViagens")
    }
    const vaiCriarViagem = () => {
        history.push("/CriarViagens")
    }
    const vaiViagensDet = () => {
        history.push("/DetalhesViagens")
    }
    const loginPageVal = () => {
        history.push("/PaginaDeLogin")
    }

     return (
    <div>
        <p> Barra de Navegacao  </p>
            <button onClick={vaiParaHome}> Vai para a pagina</button>
            <button onClick={vaiListadeViagens}> Vai para a Lista de Viagens</button>
            <button onClick={vaiCriarViagem}> Vai criar viagem</button>
            <button onClick={vaiViagensDet}>Viagem Detalhes</button>
            <button onClick={loginPageVal} > Pagina de Login</button>

    </div>

     )
    
}
export default NavBar;

