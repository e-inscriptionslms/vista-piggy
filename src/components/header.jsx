import React from 'react'
import { Link } from 'react-router-dom';

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
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/mythology">Mythology</Link></li>
                                <li><Link to="/technology">Technology</Link></li>
                                <li><Link to="/weird">Weird</Link></li>
                                <li><Link to="/animals">Animals</Link></li>
                                <li><Link to="/entertainment">Entertainment</Link></li>
                                <li><Link to="/history">History</Link></li>
                            </ul>
                        </div>
                        <div class="pull-right flip hidden-sm hidden-xs mt-18">
                            <div class="m-0" style={{display: "flex", gap: "15px"}}>
                                <input id="dynamicInput" type="text" value="" placeholder="" class="form-control"
                                    style={{width: "240px"}}/>
                                    <button class="search-btn">
                                        <i class="fa-solid fa-magnifying-glass"></i>
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