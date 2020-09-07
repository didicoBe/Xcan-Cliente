import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from "./components/pages/login";
import home from "./components/pages/home";
import Pefil from "./components/pages/perfil";
import Categorias from "./components/pages/categorias";
import Registrar from "./components/pages/registrar";
import Esqueci from "./components/pages/login/esqueci";
import Privado from "./components/pages/privado";



const Routes = ()=>(
    <div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={home}></Route>
                <Route path="/login" component={Login}></Route> 
                <Route path="/perfil/:nome" component={Pefil}></Route> 
                <Route path="/categoria/:nome" component={Categorias}></Route> 
                <Route path="/registro" component={Registrar}></Route> 
                <Route path="/esqueci" component={Esqueci}></Route> 
                <Route path="/privado/:id" component={Privado}></Route> 
            </Switch>
        </BrowserRouter>
    </div>
);


export default Routes;