import React from 'react';
import {NavLink} from "react-router-dom";
import favicon from '../../favicon.ico';

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <img src={favicon} alt="" width="30" height="30"/>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className={'nav-link'} to={'/'} end>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={'nav-link'} to={'/about'}>About</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navigation;