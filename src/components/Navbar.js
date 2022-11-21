import React, { useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';




const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleNav = () => {

        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)
    

      return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, []) 

    return (
        <nav>
        {(toggleMenu || screenWidth > 970) && (
        <ul className="list">
        <li className='items logo-pf'></li>
        <li className="items"><NavLink to="/">Accueil</ NavLink></li>
        <li className="items"><NavLink to="/about">À propos</ NavLink></li>
        <li className="items"><NavLink to="/skills">Skills</ NavLink></li>
        <li className="items"><NavLink to="/projets">Projets</ NavLink></li>
        <li className="items"><NavLink to="/contact">Contact</ NavLink></li>
      </ul>
        )}
        <div className='btn' onClick={toggleNav}></div>
      </nav>
    );
};

export default Navbar;