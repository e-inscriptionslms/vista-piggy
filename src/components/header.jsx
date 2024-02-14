import React from 'react'

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
                            <li><a href="">Home</a></li>
                            <li><a href="">Mythology</a></li>
                            <li><a href="">Technology</a></li>
                            <li><a href="">Weird</a></li>
                            <li><a href="">Animals</a></li>
                            <li><a href="">Entertainment</a></li>
                            <li><a href="">History</a></li>
                          </ul>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <input type="search" className='form-control' name='search' />
                            <button>search</button>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Header;