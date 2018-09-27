import React, {Component} from 'react'
import './movie.css'
class Movie extends Component{
    render(){
        return (
            <div className="col-md">
                <div className="card Movie__card">
                    <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/Robo2poster.png/220px-Robo2poster.png" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <a className="btn btn-primary">Ver</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Movie;