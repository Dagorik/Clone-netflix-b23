import React, {Component} from 'react'
import './home.css'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import Navbar from './Navbar'
import Movie from './Movie/Movie'

const QUERY_ME = gql `
    query me{
        me{
           name
        }
    }
`

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            nombre:"Juanito Perez"
        }
    }

    getMe = () => (
        <Query query={QUERY_ME}>
            {({loading,err,data}) => {
                if (loading) return 'Loading...'
                if (err) return 'Error del servicio'
                return <Navbar name={data.me.name}/>
            }}
        </Query>
    )

    render(){
        return (
            <div className="cover">
                {this.getMe()}
                <h1>El home</h1>
                <Movie/>
            </div>
        )
    }
}

export default Home;