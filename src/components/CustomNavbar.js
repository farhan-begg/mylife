import React, { useState } from 'react';
import "./CustomNavbar.css"
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as NoteIcon } from './icons/note.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';

import { CSSTransition } from 'react-transition-group';

function CustomNavbar() {
    return (
        <Navbar>
            <NavItem icon={<PlusIcon />} />
            <NavItem icon= {<NoteIcon />} />
            <NavItem icon= {<NoteIcon />} />
            {/* <NavItem icon= {<CaretIcon />}>
              <DropdownMenu></DropdownMenu>
            </NavItem> */}
        </Navbar>
      );
    }
    
function Navbar(props) {
    return (
        <nav className='navbar'>
            <ul className='navbar-nav-1'> { props.children }</ul>
        </nav>
    );
}

function NavItem(props) {

    const [open, setOpen] = useState(false);
    
    return (
        <li className='nav-item'>
            <a href='/login' className='icon-button' onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
}

// function DropdownMenu() {

//     const [activeMenu, setActiveMenu] = useState('main');
//     const [menuHeight, setMenuHeight] = useState(null);

//     function calcHeight(el) {
//         const height = el.offsetHeight;
//         setMenuHeight(height)
//     }

//     function DropdownItem(props) {
//         return (
//             <a href='#' className='menu-item' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
//                 <span className='icon-button'>{props.leftIcon}</span>

//                 {props.children}

//                 <span className='icon-right'>{props.rightIcon}</span>
//             </a>
//         );
//     }
//     return (
//         <div className='dropdown' style={{ height: menuHeight}}>

//             <CSSTransition 
//                 in={activeMenu === 'main'} 
//                 unmountOnExit 
//                 timeout={500}
//                 className='menu-primary'
//                 onEnter={calcHeight}>
//                 <div className='menu'>
//                     <DropdownItem>My Profile</DropdownItem>
//                     <DropdownItem
//                         leftIcon={<CogIcon />}
//                         rightIcon={<ChevronIcon />}
//                         goToMenu='settings'>
//                         Settings
//                     </DropdownItem>
//                 </div>
//         </CSSTransition> 

//         <CSSTransition 
//             in={activeMenu === 'settings'} 
//             unmountOnExit 
//             timeout={500}
//             className='menu-secondary'>
//             <div className="menu">
//                 <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
//                     <h2>Animals</h2>
//                 </DropdownItem>
//                 <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
//                 <DropdownItem leftIcon="🐸">Frog</DropdownItem>
//                 <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
//                 <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
//             </div>
//         </CSSTransition> 
//     </div>
//     );
// }

export default CustomNavbar;