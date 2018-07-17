import React from 'react'
import {Switch, Route} from 'react-router-dom'

import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'

const Main = () => (
    <main>
        <Switch>
            <Route path='/About' component={About} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Contact" component={Contact} />
        </Switch>
    </main>    
)

export default Main