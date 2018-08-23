import React, { Component } from 'react';
import './Contacts.css';

class Contacts extends Component {
    state = {
        navList: [
            {title: 'Домой', href: '/'},
            {title: 'Прайс', href: '/price'},
            {title: 'Обратный звонок', href: '/callback'}
        ]
    }
    render() {
        const renderedItems = this.state.navList.map((item, i) => {
            return(
                <li key={i} className="contacts__list__item">
                    <a className="contacts__list__link" href={item.href}>{item.title}</a>
                </li>
            );
        })
        return (
            <div className="contacts">
                <nav className="contacts__nav">
                    <ul className="contacts__list">
                        {renderedItems}
                    </ul>
                </nav>
                <main className="contacts__main">
                    <a className="contacts__main__link contacts__main__number" href="tel:+79963332211">
                        +7 (996) 333 22 11
                    </a><br/>
                    <span>
                        Оказываем услуги по рекламе в подьездах,<br/>
                        наружная реклама, объявления
                    </span>
                    <br /><br />
                    <a className="contacts__main__link" href="https://vk.com">Группа Вконтакте</a>
                </main>
            </div>
        );
    }
}

export default Contacts;