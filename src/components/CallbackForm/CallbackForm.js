import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import './CallbackForm.css';
import cancel from './img/cancel.svg';

class CallbackForm extends Component {
    onblurHandler = () => {
        console.log("HAHAHAH")
    }
    render() {
        return (
            <div className="callback" onClick={this.onblurHandler}>
                <div className="callback__wrapper">
                    <Link to="/">
                        <div className="callback__cancel">       
                            <img src={cancel} alt="" />
                        </div>
                    </Link>
                    <h4 className="callback__desc">Перезвоним, в ближайшее время</h4>
                    <form className="callback__form">
                        <input className="callback__form__input" type="text" placeholder="Ваше имя" />
                        <InputMask mask="+7 (999) 999 99 99" maskChar="_">
                            {(inputProps) => <input className="callback__form__input" type="text" placeholder="+7 (999) 555 44 33"/>}
                        </InputMask>
                        <input className="callback__form__input callback__form__submit" type="submit" value="Отправить"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default CallbackForm;
