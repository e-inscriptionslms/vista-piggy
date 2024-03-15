
import React from 'react';
import { Base_Url } from '../helper/helper';
import { Route_Path } from '../RoutePath/routepath';
import { Link } from 'react-router-dom';
// import './SideBar.css';

const SideBar = ({ isOpen, toggle }) => {
    return (
        <>
            <div className={isOpen ? 'sidebar open' : 'sidebar'}>
                <button onClick={toggle} className="toggle-button">
                    ☰
                </button>
                <ul id="navbarSupportedContent">
                    <li className="nav-item bghover"><Link to={Route_Path.HOME}>Home</Link></li>
                    <li className="nav-item bghover"><Link to={`${Route_Path.BLOG}/${Route_Path.MYTHOLOGY}`}>Mythology</Link></li>
                    <li className="nav-item bghover"><Link to={`${Route_Path.BLOG}/${Route_Path.TECHNOLOGY}`}>Technology</Link></li>
                    <li className="nav-item bghover"><Link to={`${Route_Path.BLOG}/${Route_Path.WEIRD}`}>Weird</Link></li>
                    <li className="nav-item bghover"><Link to={`${Route_Path.BLOG}/${Route_Path.ANIMALS}`}>Animals</Link></li>
                    <li className="nav-item bghover"><Link to={`${Route_Path.BLOG}/${Route_Path.ENTERTAINMENT}`}>Entertainment</Link></li>
                    <li className="nav-item bghover"><Link to={`${Route_Path.BLOG}/${Route_Path.HISTORY}`}>History</Link></li>
                </ul>
            </div>
            <Link className='mobile-logo' to={Route_Path.HOME}>
            <img className='logo-img' src={`${Base_Url()}/images/hopiffy.jpg`} alt="imgh" />
            </Link>
        </>
    );
};

export default SideBar;
