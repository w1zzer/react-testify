import React, { Component } from 'react';
import  './Header.css';
import logo from './img/logo.png';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1 className="header__title">Оракольн</h1>
                <div className="header__logo-wrapper">
                    <img
                        src={logo}
                        alt=""
                        className="header__logo-img"
                    />
                </div>
            </header>
        );
    }
}

export default Header;