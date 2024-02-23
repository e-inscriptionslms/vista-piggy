import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Route_Path } from '../RoutePath/routepath';

function Header() {
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        const tab = document.getElementById("navbarSupportedContent")
        tab.onclick = () => {
            setIsShow(false)
        }
    }, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-theme p-4">
                <div className="container">
                    <a className="navbar-brand" href="#">Vistapiggy</a>
                    <button className="navbar-toggler" onClick={() => { setIsShow(!isShow) }} type="button" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={isShow ? "collapse navbar-collapse show try" : "collapse navbar-collapse try"} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto nav_list ">
                            <li className="nav-item"><Link to={Route_Path.HOME}>Home</Link></li>
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