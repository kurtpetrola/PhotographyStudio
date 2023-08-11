import './Navbar.scss';
import Navlink from './Navlink';
import { useState, useEffect } from 'react';

const Navbar = (props) => {
    const [openMenu, setOpen] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 950){
            setOpen(true);
        } else if (window.innerWidth < 950){
            setOpen(false);
        }
    }, []);

    const openMenuHandler = () => {
        setOpen(!openMenu);
    };

    return(
        <nav className='flex-nav-bar' id='nav'>
            <header>
                <a href="/home" className='logo'>Focus Frame</a>
                <p className='sublogo'>Photography</p>
            </header>
            <nav>
                {openMenu && <Navlink onClick={openMenuHandler}/>}  
                <ul>
                    <li>
                            <i className="far fa-envelope"></i>
                    </li>
                    <li>
                            <i className="fab fa-instagram"></i>
                    </li>
                    <li>
                        <i className="fas fa-bars open-menu" onClick={openMenuHandler}></i>
                    </li>
                </ul>
            </nav>
        </nav>
    );
};

export default Navbar;