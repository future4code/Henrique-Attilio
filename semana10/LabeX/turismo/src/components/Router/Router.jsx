import { Switch, Route, BrowserRouter} from 'react-router-dom'
import React from 'react';
import HomePage from '../HomePage/HomePage'
import ListTripsPage from '../ListTripsPage/ListTripsPage'
import CreateTripPage from '../CreateTripPage/CreateTripPage'
import TripDetailsPage from '../TripDetailsPage/TripDetailsPage'
import LoginPage from '../LoginPage/LoginPage'
import NavBar from '../NavBar/NavBar'


const Router = () => {
  return (
      
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/ListaViagens">
                <ListTripsPage />
            </Route>
            <Route exact path="/CriarViagens">
                <CreateTripPage />
            </Route>
            <Route exact path="/DetalhesViagens">
                <TripDetailsPage />
            </Route>
            <Route exact path="/PaginaDeLogin">
                <LoginPage />
            </Route>
            <Route>
                <div>Erro 404 Pagina nao encontrada / Escolha as Opcoes abaixo</div>
                <NavBar/>
            </Route>
            
        </Switch>
    </BrowserRouter>    

    



  );
}

export default Router;
