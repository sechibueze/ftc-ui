import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './navbar.css';
import ftc_logo from '../../../images/ftc-logo.png';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-col">
                    <a className="navbar-brand" href="/"><img src={ftc_logo} width="50" height="50" alt="ftc-logo"/> FT Choir</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">

                        </ul>

                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link btn-outline-success d-block" to="/signup">
                                    Signup
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn-outline-primary d-block" to="/login">
                                    Login
                                </Link>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;