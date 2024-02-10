import React from 'react'

function Header() {
    return (
        <>
            <section className="">
                {/* navbar start  */}
                <header>
                    {/* <nav id="navbar" className="">
                        <div className="container-fluid">
                            <div className="d-flex justify-content-between"> */}
                    {/* Navbar Logo */}
                    {/* <div className="logo"> */}
                    {/* Logo Placeholder for Inlustration */}
                    {/* <a href="#home"><i className="fas fa-chess-knight"></i> Logo</a>
                                </div> */}
                    {/* Navbar Links */}
                    {/* <ul id="menu">
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#services">mathology</a></li>
                                    <li><a href="#about">technolgy</a></li>
                                    <li><a href="#contact">weird</a></li>
                                    <li><a href="#contact">animals</a></li>
                                    <li><a href="#contact">entertainment</a></li>
                                    <li><a href="#contact">history</a></li>
                                </ul> */}
                    {/* </div>
                        </div>
                    </nav> */}


                    {/* Menu Icon */}
                    {/* <div className="menuIcon">
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
                    </div> */}
                    {/* navbar end */}



                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <div className="container-fluid">
                            <div classname="logo">
                                <i className="fa-solid fa-horse-head" />
                                <a className="navbar-brand" href="#">
                                    LOGO
                                </a>
                            </div>
                            <button
                                className="navbar-toggler "
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0" />
                                <div className="d-flex nav_list">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">
                                                Home
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                MATHOLOGY
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                TECHNOLGY
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                WEIRD
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                WEIRD
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                WEIRD
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                WEIRD
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                WEIRD
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>

                </header>
            </section>
        </>
    )
}

export default Header;