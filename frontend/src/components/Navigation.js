import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <i className="material-icons">
                            assignment </i> NotesApp
                    </Link>
                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav" ml-auto>
                            <li className="nav-item nav-link">
                                <Link to="/" >Notes</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/create" className="nav-link">Create Note</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
     
        )
    }
}
