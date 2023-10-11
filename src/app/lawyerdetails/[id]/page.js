"use client";
import Container from '@/Common/Container';
import { merriweather } from '@/Utils/Font';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import banner from '@/assets/team_banner.jpg';
import LoadingPage from '@/shared/Loading';


const SingleLawyerPage = ({ params }) => {
  const [lawyerDetails, setLawyerDetails] = useState(null);
  const [activeTab, setActiveTab] = useState('PROFILE');

  useEffect(() => {
    (async () => {
      const res = await axios(`/api/lawyer/${params?.id}`);
      if (res?.data) {
        setLawyerDetails(res?.data);
      }
    })();
  }, [params]);

  const { name, image, description, department, socialmedia, title, languages, contacts } =
    lawyerDetails || {};

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="-mt-20">
      <div className="team_banner_bg_imgae h-[450px] text-white flex items-end justify-center">
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-5xl">{name}</h2>
            <h3 className="mt-3 text-2xl text-[#ccbd99]">{title}</h3>
          </div>
        </Container>
      </div>
      <Container>
        {lawyerDetails ? (
          <div className="grid grid-cols-3 gap-5 my-10 p-5 rounded-lg lawyer_card_bg_imgae">
            <div className="">
              <Image
                className=" object-cover"
                width={300}
                height={300}
                src={image}
                alt="Lawyer Image"
              />
            </div>
            <div className="text-gray-50 col-span-2">
              <h2 className={`${merriweather.className} text-4xl`}>{name}</h2>
              <h3 className={`${merriweather.className} mt-3`}>{title}</h3>
              <h3 className="mt-5 font-medium text-lg">
                <b>Department: </b> {department}
              </h3>
              <h3 className="font-medium text-lg mt-2">
                <b>Languages: </b> {languages}
              </h3>
              <p className="mt-4">{description}</p>

              {contacts?.address && (
                <p className="flex gap-2 mt-3 items-center">
                  <FaLocationDot /> {contacts.address}
                </p>
              )}

              <ul className="flex gap-3 mt-4">
                {socialmedia?.map((single, idx) => (
                  <li key={idx}>
                    <a
                      target="_blank"
                      className="rounded-full border-2 w-10 bg-white flex items-center justify-center p-[10px] h-10"
                      href={single?.link}
                    >
                      <Image
                        width={50}
                        height={50}
                        src={single?.icon}
                        className="object-contain w-full h-full"
                        alt="icon"
                      />
                    </a>
                  </li>
                ))}
              </ul>
              <Link
                href={'/appointment'}
                className="bg-white px-5 py-3 text-[#a51890] rounded-md mt-5 block w-fit uppercase font-medium"
              >
                Appointment now
              </Link>
            </div>
          </div>
        ) : (
          <LoadingPage></LoadingPage>
        )}
        
       
      <div className="max-w-2xl ">
        <div className="flex">
          <button
            className={`${
              activeTab === 'PROFILE' ? 'bg-[#225559] text-white' : 'bg-gray-200 text-gray-700'
            } px-4 py-2 w-1/2  border-r border-gray-300 focus:outline-none`}
            onClick={() => handleTabClick('PROFILE')}
          >
            PROFILE
          </button>
          <button
            className={`${
              activeTab === 'EXPERIENCE' ? 'bg-[#225559] text-white' : 'bg-gray-200 text-gray-700'
            } px-4 py-2 w-1/2  focus:outline-none`}
            onClick={() => handleTabClick('EXPERIENCE')}
          >
            EXPERIENCE
          </button>
        </div>

        <div className="p-4 mb-10">
          {activeTab === 'PROFILE' && (
           <div>
          
           <h1 className=" text-xl  mt-4  text-gray-800">John Doe</h1> 
           <p className='mb-4'>Experience 6+ Years</p>
           <p className="text-gray-700 text-justify  "> Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p> 
           <div className="grid grid-cols-2 gap-4 mt-4"> 
             <div>
               <p className="text-gray-700 mt-4 ">Practice Area </p>
               
                <ul>
                 - Litigation & Appeals
                 </ul>
                 <ul>
                 - Real Estate
                 </ul>
                 <ul>
                - Commercial Transactions
                </ul>
                
               
             </div>
             
            
           
           </div>
           <p className="text-gray-700 text-justify mt-5 "> Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip. On the other hand.</p> 
         </div>
         
          )}

          {activeTab === 'EXPERIENCE' && (
             <div className="flex justify-between items-center">
             <div>
               {/* Left Content */}
               <h1 className='text-xl mb-4'>Akij Group Of industries</h1>
               <p className="text-gray-700 font-light mb-1">Designation</p>
               <p className="text-gray-700 mb-4">Chief Consultant</p>
               <p className="text-gray-700 font-thin mb-1">Employement Status</p>
               <p className="text-gray-700  ">Dec 31, 2013 - Jan 1, 2022</p>
             </div>
             <div>
               {/* Right Content */}
               <p className="text-gray-700 mt-5 mb-1  font-thin">Department</p>
               <p className="text-gray-700 mb-4 ">George Court</p>
               <p className="text-gray-700 font-thin mb-1 ">Period</p>
               <p className="text-gray-700  ">1 Years 7 Month</p>
             </div>
           </div>
          )}
        </div>
      </div>
  
      </Container>

      
    </div>
  );
};

export default SingleLawyerPage;
