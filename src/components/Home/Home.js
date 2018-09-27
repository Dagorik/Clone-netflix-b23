import React, {Component} from 'react'
import Navbar from './Navbar'

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            nombre:"Juanito Perez"
        }
    }

    render(){
        return (
            <div>
                <Navbar name={this.state.nombre}/>
                <h1>El home</h1>
            </div>
        )
    }
}

export default Home;