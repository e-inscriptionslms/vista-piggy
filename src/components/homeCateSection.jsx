import React from 'react'
import { Base_Url } from '../helper/helper';

export default function HomeCateSection({cate,data}) {
    // console.log(data);
    return (
        <>
            <div className='container-fluid p-2'>
                <div className='row justify-content-center mt-2 p-3'>
                    <div className='col-10 p-1'>
                        <h3 className='p-1 cate-name'>Categories</h3>
                        {cate && cate.map((item,index)=>(
                            <div className='cate-Card d-flex mt-1' key={index}>
                            <div className='col-9 d-flex justify-content-start align-items-center' style={{background:`url('${Base_Url()}/${data?.filter(ele=>ele.cate_name === item)[index]?.image}')`}}>
                                <h5 className='p-1 ms-2 text-white'>{item}</h5>
                            </div>
                            <div className='col-3 text-center bg-theme d-flex justify-content-center align-items-center'>
                                <h5 className='text-white'>{data?.filter(ele=>ele.cate_name === item)?.length} Posts</h5>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
