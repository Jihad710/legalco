"use client"
import Container from '@/Common/Container';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ServiceDetailsPage = ({params}) => {
    const [details,setDetails] = useState({});
    useEffect(()=> {
        (async()=> {
            const response = await axios(`/api/services/${params}`);
            setDetails(response?.data)
        })()
    },[params])
    console.log(details);
    return (
        <div className='-mt-20'>
            <div className="team_banner_bg_imgae h-[450px] text-white flex items-end justify-center ">
                <Container>
                    <div className="text-center mb-20">
                        {/* <h2 className='text-5xl'>{"name"}</h2>
                        <h3 className='mt-3 text-2xl text-[#ccbd99]'>{"title"}</h3> */}
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default ServiceDetailsPage;