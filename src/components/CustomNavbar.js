import React, { useState } from 'react';
import "./CustomNavbar.css"
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as NoteIcon } from './icons/note.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import firebase from "../firebase";

import { CSSTransition } from 'react-transition-group';

function CustomNavbar() {
    return (
        <Navbar>
            <NavItem icon={<PlusIcon />} />
            <NavItem icon={<NoteIcon />} />
            <button onClick={() => firebase.auth().signOut()}>Sign out</button>
            <NavItem icon={<CaretIcon />}>
                <DropdownMenu></DropdownMenu>
            </NavItem>
        </Navbar>
    );
}

function Navbar(props) {
    return (
        <nav className='navbar-1'>
            <ul className='navbar-nav-1'> {props.children}</ul>
        </nav>
    );
}

function NavItem(props) {

    const [open, setOpen] = useState(false);

    return (
        <li className='nav-item-6'>
            <a className='icon-button-6' onClick={() => setOpen(!open)}>

                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
}

function DropdownMenu() {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height)
    }

    function DropdownItem(props) {
        return (
            <a className='menu-item-6' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className='icon-button-6'>{props.leftIcon}</span>

                {props.children}

                <span className='icon-right-6'>{props.rightIcon}</span>
            </a>
        );
    }
    return (
        <div className='dropdown-6' style={{ height: menuHeight }}>

            <CSSTransition
                in={activeMenu === 'main'}
                unmountOnExit
                timeout={500}
                className='menu-primary'
                onEnter={calcHeight}
            >
                <div className='menu-6'>
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronIcon />}
                        goToMenu='settings'>
                        Settings
            </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'}
                unmountOnExit
                timeout={500}
                className='menu-secondary'
            >
                <div className='menu-6'>
                    <DropdownItem leftIcon={<ArrowIcon />} goToMenu='main' />
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem>Settings</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}

export default CustomNavbar;