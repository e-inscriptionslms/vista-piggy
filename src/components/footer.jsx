import React from 'react'

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
                            <p className="copyright-text">Copyright 2023 - <a>VISTA PIGGY</a></p>
                        </div>
                        <div className="col-sm-6 bg-theme">
                            <h3 className="title">Follow Us</h3>
                            <ul className="icons">
                                <li><i className="fa-brands fa-instagram"></i></li>
                                <li><i className="fa-brands fa-facebook"></i></li>
                            </ul>
                            <ul className="ul">
                                <li>About</li>
                                <li>Contact</li>
                                <li>Privacy Policy</li>
                                <li>Terms and Conditions</li>
                                <li>Disclaimer</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;