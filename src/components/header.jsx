import React from 'react';
import { Link } from 'react-router-dom';
import {Route_Path} from '../RoutePath/routepath';

function Header() {
    return (
        <>
            <section className="">
                <nav className="d-flex justify-content-between bg-theme navbar">
                    <div className='ms-4'>
                        <h2 className='text-white'>logo</h2>
                    </div>
                    <div className='me-2 d-flex align-items-center'>
                        <div className='me-4'>
                            <ul className='d-flex gap-4 mt-3'>
                                <li><Link to={Route_Path.HOME}>Home</Link></li>
                                <li><Link to={`${Route_Path.BLOG}/${Route_Path.MYTHOLOGY}`}>Mythology</Link></li>
                                <li><Link to={`${Route_Path.BLOG}/${Route_Path.TECHNOLOGY}`}>Technology</Link></li>
                                <li><Link to={`${Route_Path.BLOG}/${Route_Path.WEIRD}`}>Weird</Link></li>
                                <li><Link to={`${Route_Path.BLOG}/${Route_Path.ANIMALS}`}>Animals</Link></li>
                                <li><Link to={`${Route_Path.BLOG}/${Route_Path.ENTERTAINMENT}`}>Entertainment</Link></li>
                                <li><Link to={`${Route_Path.BLOG}/${Route_Path.HISTORY}`}>History</Link></li>
                            </ul>
                        </div>
                        <div className="pull-right flip hidden-sm hidden-xs mt-18">
                            <div className="m-0" style={{display: "flex", gap: "15px"}}>
                                <input id="dynamicInput" type="text" placeholder="" className="form-control"
                                    style={{width: "240px"}}/>
                                    <button className="search-btn">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Header;