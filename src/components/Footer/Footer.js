import React, { Component } from 'react';
import './Footer.css';
import NavItem from './NavItem';

class Footer extends Component {
    state = {
        links: [
            {href: '/contacts', title: 'контакты'},
            {href: '/price', title: 'прайс'},
            {href: 'https://vk.com/', title: 'вконтакте'}
        ]
    }
    render() {
        const decoratedLinks = this.state.links.map((item, i) => {
            return (
                <NavItem
                    className="footer__list__item"
                    classNameLink="footer__list__link"
                    href={item.href}
                    title={item.title}
                    key={i}
                />
            );
        });
        return (
            <footer className="footer">
                <nav className="footer__nav">
                    <ul className="footer__list">
                        { decoratedLinks }
                    </ul>
                </nav>
            </footer>
        );
    }
}

export default Footer;