import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import './Main.css';

class Main extends Component {
    render() {
        return (
            <main className="main">
                <h2 className="main__desc">
                    Предоставляем услуги рекламы<br/>
                    на подъездах и внутри
                </h2>
                <Link to="/callback">
                    <button className="main__btn" tabIndex="0">
                        Обратный звонок
                    </button>
                </Link>
            </main>
        );
    }
}

export default Main;