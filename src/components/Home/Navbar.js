import React, {Component} from 'react';
import './navbar.css'

class Navbar extends Component{
    render(){
        return (
            <nav className="navbar navbar-dark bg-dark">
                <h4 className="Navbar__name">Hola {this.props.name}</h4>
            </nav>    
        )
    }
}

export default Navbar;