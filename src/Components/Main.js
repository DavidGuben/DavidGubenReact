import React from 'react'
import {Switch, Route} from 'react-router-dom'

import About from './About'
import Portfolio from './Portfolio'


const Main = () => (
    <main>
        <Switch>
            <Route path='/About' component={About} />
            <Route path="/Portfolio" component={Portfolio} />
            
        </Switch>
    </main>    
)

export default Main