import React from 'react';

const NavItem = (props) => {
    console.log(props);
    return(
        <li className={props.className}>
            <a className={props.classNameLink} href={props.href} alt={props.href}>{props.title}</a>
        </li>
    )
}

export default NavItem;