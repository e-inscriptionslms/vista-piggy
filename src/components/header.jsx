import React from 'react'

function Header() {
    return (
        <>
            <section className="">
                {/* navbar start  */}
                <header>
                    <nav id="navbar" className="">
                        <div className="container-fluid">
                            <div className="d-flex justify-content-between">
                                {/* Navbar Logo */}
                                <div className="logo">
                                    {/* Logo Placeholder for Inlustration */}
                                    <a href="#home"><i className="fas fa-chess-knight"></i> Logo</a>
                                </div>
                                {/* Navbar Links */}
                                <ul id="menu">
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#services">mathology</a></li>
                                    <li><a href="#about">technolgy</a></li>
                                    <li><a href="#contact">weird</a></li>
                                    <li><a href="#contact">animals</a></li>
                                    <li><a href="#contact">entertainment</a></li>
                                    <li><a href="#contact">history</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>


                    {/* Menu Icon */}
                    <div className="menuIcon">
                        <span className="icon icon-bars"></span>
                        <span className="icon icon-bars overlay"></span>
                    </div>


                    <div className="overlay-menu">
                        <ul id="menu">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">mathology</a></li>
                            <li><a href="#about">technolgy</a></li>
                            <li><a href="#contact">weird</a></li>
                            <li><a href="#contact">animals</a></li>
                            <li><a href="#contact">entertainment</a></li>
                            <li><a href="#contact">history</a></li>
                        </ul>
                    </div>
                    {/* navbar end */}
                </header>
            </section>
        </>
    )
}

export default Header;