import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Route_Path } from '../RoutePath/routepath';
import SideBar from './sideToggler';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSideBar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const tab = document.getElementById("navbarSupportedContent")
        tab.onclick = () => {
            setIsOpen(false)
        }
    }, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-theme p-4">
                <div className="container">
                    <SideBar isOpen={isOpen} toggle={toggleSideBar} />
                    <div className="main-content">
                        <button onClick={toggleSideBar} className="toggle-button">
                            ☰
                        </button>
                    </div>
                    
                    <div className="collapse navbar-collapse try" >
                        <ul className="navbar-nav me-auto nav_list ">
                            <li className="nav-item"><Link to={`${Route_Path.BLOG}/${Route_Path.MYTHOLOGY}`}>Mythology</Link></li>
                            <li className="nav-item"><Link to={`${Route_Path.BLOG}/${Route_Path.TECHNOLOGY}`}>Technology</Link></li>
                            <li className="nav-item"><Link to={`${Route_Path.BLOG}/${Route_Path.WEIRD}`}>Weird</Link></li>
                            <li className="nav-item"><Link to={`${Route_Path.BLOG}/${Route_Path.ANIMALS}`}>Animals</Link></li>
                            <li className="nav-item"><Link to={`${Route_Path.BLOG}/${Route_Path.ENTERTAINMENT}`}>Entertainment</Link></li>
                            <li className="nav-item"><Link to={`${Route_Path.BLOG}/${Route_Path.HISTORY}`}>History</Link></li>
                            <form className="d-flex">
                                <input className="form-control me-2" id='dynamicInput' type="search" placeholder="Search" />
                                <button className="btn btn-outline-secondary text-light" type="submit">Search</button>
                            </form>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;