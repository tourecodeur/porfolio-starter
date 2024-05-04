import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle';
import {Link} from 'react-scroll';

const Navbar = () => {
    return(
        <div className="n-wrapper" id='Navbar'>
            <div className="n-left">
                <div className="n-name">Macoumba</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                  <ul style={{listStyleType:'none'}}>
                    <Link spy={true} smooth={true} to='Navbar'>
                    <li>Acceuil</li>
                    </Link>
                    <Link spy={true} smooth={true} to='Services'>
                    <li>Services</li>
                    </Link>
                    <Link spy={true} smooth={true} to='Experience'>
                    <li>Experiences</li>
                    </Link>
                    <Link spy={true} smooth={true} to='Porfolio'>
                    <li>Porfolio</li>
                    </Link>
                    <Link spy={true} smooth={true} to='Testimonials'>
                    <li>Temoignages</li>
                    </Link>
                    <Link spy={true} smooth={true} to='Contact'>
                    <li>Contact</li>
                    </Link>
                  </ul>
                </div>
                <button className="button n-button">Contact</button>
            </div>
        </div>
    )
}
export default Navbar