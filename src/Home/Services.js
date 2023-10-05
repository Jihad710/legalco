"use client"
import Container from '@/Common/Container';
import SectionTitle from '@/Common/SectionTitle';
import { merriweather } from '@/Utils/Font';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ServicesPage = () => {
    const [services,setServices] = useState([]);
    useEffect(()=> {
        (async()=>{
            const res = await axios('/api/services')
            setServices(res?.data);
        })()
    },[])
    console.log(services);
    return (
        <section className='py-20 bg_imgae'>
            <Container>
                <div className="text_shadow-white">
                    <SectionTitle title={"Our Services"}></SectionTitle>
                </div>
                {/* */}
                <div className="mt-10 grid grid-cols-3 gap-5">
                    {
                        services?.map((service,idx) => <div key={idx} className='border-2 bg-white shadow-lg p-5 flex items-center gap-5 rounded-2xl rounded-tr-none rounded-bl-none '>
                            <Image width={50} height={50} src={service?.icon} alt='icon' className=''/>
                            <h3 className={`${merriweather.className} font-medium text-lg`}>{service?.service}</h3>
                        </div>)
                    }
                </div>
            </Container>
        </section>
    );
};

export default ServicesPage;