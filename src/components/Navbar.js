import React, { useEffect, useState } from 'react'
import logo from "../Netflix_Logo.png";
import avatar from "../avatar.png";
import '../css/navbar.css';

function Navbar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            }
            else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", null);
        };

    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>

            <img className='nav__logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" />


            {/* <div className='nav__menu'>
                <h3>TV Shows</h3>
                <h3>Movies</h3>
                <h3>Recently Added</h3>
                <h3>My List</h3>
            </div> */}

            <img className='nav__avatar' src={avatar} alt="logo" />
        </div>
    )
}

export default Navbar