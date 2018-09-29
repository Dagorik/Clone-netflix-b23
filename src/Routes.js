import React, { Component } from 'react';
import {Route, 
    BrowserRouter as Router, Redirect} from 'react-router-dom'
import {ApolloProvider} from 'react-apollo'
import client from './graphql'
import Login from './components/Login/Login'
import Signup  from './components/Signup/Signup'
import Home from './components/Home/Home'
import MovieDetail from './components/Home/MovieDetail/MovieDetail'
import isAuthenticated from './resolvers/isAuthenticated'

class Routes extends Component{
    render(){
        
        const PrivateRoute = ({component:Component, ...rest}) => (
            <Route {...rest} render={(props) => (
                isAuthenticated() === true 
                ? <Component {...props} />
                : <Redirect to="/login"/>
            )} />
        )

        return(
            <Router>
                <ApolloProvider client={client}>
                <main>
                    <PrivateRoute exact path='/' component={Home}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/signup' component={Signup}/>
                    <PrivateRoute exact path='/movie/:id' component={MovieDetail}/>
                </main>
                </ApolloProvider>
            </Router>
        )
    }
}

export default Routes;