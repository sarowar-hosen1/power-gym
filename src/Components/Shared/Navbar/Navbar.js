import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const handleNavbar = () => {
        if (window.scrollY >=200) {
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', handleNavbar);

    return (
        <nav class={navbar ? "navbar navbar-expand fixed-top navbar-dark bg-dark" : "navbar navbar-expand navbar-dark"}>
            <div class="container-fluid container">
                <Link class="navbar-brand" to="/">POWER <span>X</span></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="text-white"><FaBars /></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/our-classes">Our Classes</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/pricing-plan">Pricing</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/">About Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;