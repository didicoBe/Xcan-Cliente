import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from "./components/pages/login";
import home from "./components/pages/home";
import Pefil from "./components/pages/perfil";



const Routes = ()=>(
    <div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={home}></Route>
                <Route path="/login" component={Login}></Route> 
                <Route path="/perfil/:nome" component={Pefil}></Route> 
            </Switch>
        </BrowserRouter>
    </div>
);


export default Routes;