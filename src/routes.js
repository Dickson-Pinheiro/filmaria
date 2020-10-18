import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/home/home'
import Erro from './pages/erro/erro'
import Filme from './pages/Filme/Filme'

export default () => {
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/filme/:id' component={Filme} />
                    <Route path='*' component={Erro} />
                </Switch>
            </BrowserRouter>
        </div>
    )
   
}