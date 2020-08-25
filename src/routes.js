import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from "./components/pages/login";
import home from "./components/pages/home";


const Routes = ()=>(
    <div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={home}></Route>
                <Route path="/login" component={Login}></Route> 
            </Switch>
        </BrowserRouter>
    </div>
);


export default Routes;