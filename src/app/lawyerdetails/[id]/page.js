"use client"
import Container from '@/Common/Container';
import { merriweather } from '@/Utils/Font';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const SingleLawyerPage = ({params}) => {
    const [lawyerDetails,setLawyerDetails] = useState({});
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        (
            async() => {
                const res = await axios(`/api/lawyer/${params?.id}`);
                // if(res?.data){
                    setLawyerDetails(res?.data);
                    setLoading(false);
                // }
            }
        )()
    },[params])
    console.log(lawyerDetails);
    const {name,image,description,department,socialmedia,title,languages} = lawyerDetails || {};
    // if(loading){
    //     return <p className='text-4xl py-40 text-center'>Loading.....</p>
    // }
    return (
        <div className='bg-[#a51890] overflow-hidden'>
            <Container>
                <div className="grid grid-cols-2 gap-5 my-20">
                    <div className="">
                        <Image className='w-full' width={500} height={500} src={image} alt='Lawyer Image'/>
                    </div>
                    <div className="text-gray-50">
                        <h2 className={`${merriweather.className} text-4xl`}>{name}</h2>
                        <h3 className={`${merriweather.className} mt-6`}>{title}</h3>
                        <h3 className='mt-8 font-medium text-lg'><b>Department: </b> {department}</h3>
                        <h3 className=' font-medium text-lg'><b>Languages: </b> {languages}</h3>
                        <p className='mt-5'>{description}</p>

                        <ul className='flex gap-5 mt-7'>
                            {
                                socialmedia?.map((single,idx) => <li key={idx}>
                                    <a target='_blank' href={single?.link}>
                                        <Image width={25} height={25} src={single?.icon} className=' rounded-lg' alt='icon'/>
                                    </a>
                                </li>)
                            }
                        </ul>
                    </div>
                </div>
            </Container>   
        </div>
    );
};

export default SingleLawyerPage;