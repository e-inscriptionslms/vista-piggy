import React from 'react'
import { Base_Url } from '../helper/helper';

const Topbar = () => {
    return (
        <>
            <div className='col-12  d-flex justify-content-center'>                
                    <img src={`${Base_Url()}/images/hopiffy-logo.png`} alt="" srcset="" height="100px"/>    
            </div>
        </>
    )
}

export default Topbar;