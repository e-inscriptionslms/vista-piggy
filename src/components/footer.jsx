import React from 'react'
import { Link } from 'react-router-dom';
import { Route_Path } from '../RoutePath/routepath';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 bg-theme">
                            <h3 className="title">About Us</h3>
                            <p className="image-caption excerpt">Explore the weird to the fascinating at vistapiggy. Get
                                instantly captivated with mind-blowing topics. Unveil wow facts and bizarre
                                wonders.</p>
                            <p className="copyright-text">Copyright 2023 - <Link to={Route_Path.HOME}>HOPIFFY</Link></p>
                        </div>
                        <div className="col-sm-6 bg-theme">
                            <h3 className="title">Follow Us</h3>
                            <ul className="icons">
                                <li><i className="fa-brands fa-instagram"></i></li>
                                <li><i className="fa-brands fa-facebook"></i></li>
                            </ul>
                            <ul className="ul">
                                <li><Link to={Route_Path.ABOUT}>About</Link></li>
                                <li><Link to={Route_Path.CONTACT}>Contact</Link></li>
                                <li><Link to={Route_Path.PRIVACY}>Privacy Policy</Link></li>
                                <li><Link to={Route_Path.TERMSANDCONDITION}> Terms and Conditions </Link></li>
                                <li><Link to={Route_Path.DISCLAIMER}> Disclaimer </Link></li>
                              
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;