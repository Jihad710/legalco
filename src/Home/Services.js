"use client"
import Container from '@/Common/Container';
import SectionTitle from '@/Common/SectionTitle';
import { merriweather } from '@/Utils/Font';
import LoadingPage from '@/shared/Loading';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ServicesPage = () => {
    const [services,setServices] = useState(null);
    useEffect(()=> {
        (async()=>{
            const res = await axios('/api/services')
            if(res?.data){
            setServices(res?.data);
        }
        })()
    }, [])

    return (
        <section className='py-20 bg_imgae' id='services'>
            <Container>
                <div className="text_shadow-white">
                    <SectionTitle title={"Our Services"}></SectionTitle>
                </div>
                {/* */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        services ? 
                        services?.map((service) => <Link href={`/servicedetails/${service?._id}`} key={service?._id} className='border-2 bg-white shadow-lg p-5 flex items-center gap-5 rounded-2xl rounded-tr-none rounded-bl-none '>
                            <Image width={50} height={50} src={service?.icon} alt='icon' className='w-12 h-12'/>
                            <h3 className={`${merriweather.className} font-medium text-lg`}>{service?.service}</h3>
                        </Link>) : <div className="col-span-3">
                            <LoadingPage></LoadingPage>
                        </div>
                    }
                </div>
            </Container>
        </section>
    );
};

export default ServicesPage;