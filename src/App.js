import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                    <Main />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
