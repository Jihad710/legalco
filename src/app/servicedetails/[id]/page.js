"use client"
import Container from '@/Common/Container';
import { merriweather } from '@/Utils/Font';
import LoadingPage from '@/shared/Loading';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ServiceDetailsPage = ({params}) => {
    const [details,setDetails] = useState({});
    const [lawyers,setLawyers] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=> {
        (async()=> {
            const res = await axios('/api/lawyer');
            const response = await axios(`/api/services/${params?.id}`);
            setDetails(response?.data);
            setLawyers(res?.data);
            if(response?.data && res?.data){
                setLoading(false);
            }
        })()
    },[params])

    const {description,service} = details || {};
    return (
       <div className="-mt-24">
          <div className="service_banner_bg_imgae h-[450px] text-white flex items-end justify-center">
             <div className={`${merriweather.className} text-center mb-20`}>
                <h2 className="text-5xl">{service}</h2>
             </div>
          </div>
          <Container>
             {loading ? (
                <LoadingPage></LoadingPage>
             ) : (
                <div className="my-20 bg-[#225559cc] p-10 rounded-lg ">
                   <div className="grid grid-cols-2 gap-6">
                      <div className="text-white border-r-2 border-white pr-5">
                         <h2 className={`${merriweather.className} text-4xl`}>
                            {service}
                         </h2>
                         <p className="text-lg mt-8">{description}</p>
                      </div>
                      <div className="">
                         <h2
                            className={`${merriweather.className} text-4xl mb-8 text-white`}
                         >
                            Available Lawyer
                         </h2>
                         {lawyers.slice(0, 5).map((lawyer) => (
                            <div
                               key={lawyer?._id}
                               className="flex rounded-md my-5 items-center gap-5"
                            >
                               <Image
                                  src={lawyer?.image}
                                  alt="Lawyer image"
                                  width={150}
                                  height={50}
                                  className="w-40 h-20 object-cover object-top rounded-lg"
                               />
                               <div className="">
                                  <h3
                                     className={`${merriweather.className} text-white text-xl`}
                                  >
                                     {lawyer?.name}
                                  </h3>
                                  <h4 className="text-[#ccbd99]">
                                     {lawyer?.title}
                                  </h4>
                               </div>
                            </div>
                         ))}
                      </div>
                   </div>
                   <Link
                      className="lc_btn w-fit mx-auto block mt-8"
                      href={"/appointment"}
                   >
                      Appointment Now
                   </Link>
                </div>
             )}
          </Container>
       </div>
    );
};

export default ServiceDetailsPage;