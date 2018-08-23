import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, BrowserRouter } from 'react-router-dom';
import CallbackForm from './components/CallbackForm/CallbackForm';
import Price from './components/Price/Price';
import Contacts from './components/Contacts/Contacts';

const Routing = () => {
    return(
        <BrowserRouter>
            <div className="highest">
                <Route path="/" exact component={App}></Route>
                <Route path="/callback" component={CallbackForm}></Route>     
                <Route path="/price" component={Price}></Route>
                <Route path="/contacts" component={Contacts}></Route> 
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(
    <Routing />,
    document.querySelector('#root')
);

