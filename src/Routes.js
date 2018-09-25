import React, { Component } from 'react';
import {Route, 
    BrowserRouter as Router} from 'react-router-dom'
import {ApolloProvider} from 'react-apollo'
import client from './graphql'
import Login from './components/Login/Login'
import Signup  from './components/Signup/Signup'

class Routes extends Component{
    render(){
        return(
            <Router>
                <ApolloProvider client={client}>
                <main>
                    <Route exact path='/' component={Login}/>
                    <Route exact path='/signup' component={Signup}/>
                </main>
                </ApolloProvider>
            </Router>
        )
    }
}

export default Routes;