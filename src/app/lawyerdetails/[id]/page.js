"use client";
import Container from "@/Common/Container";
import { merriweather } from "@/Utils/Font";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaTwitter } from "react-icons/fa6";
import banner from "@/assets/team_banner.jpg";
import LoadingPage from "@/shared/Loading";
import moment from "moment";

const SingleLawyerPage = ({ params }) => {
   const [lawyerDetails, setLawyerDetails] = useState(null);
   const [activeTab, setActiveTab] = useState("PROFILE");

   useEffect(() => {
      (async () => {
         const res = await axios(`/api/lawyer/${params?.id}`);
         if (res?.data) {
            setLawyerDetails(res?.data);
         }
      })();
   }, [params]);

   const {name,image,description,department,socialmedia,designation,languages,contacts,experienceyear,practiceArea,experience} = lawyerDetails || {};

   const handleTabClick = (tab) => {
      setActiveTab(tab);
   };

   return (
      <div className="-mt-24">

         <div className="team_banner_bg_imgae h-[450px] text-white flex items-end justify-center">
            <Container>
               <div className="text-center mb-20">
                  <h2 className="text-5xl">{name}</h2>
                  <h3 className="mt-3 text-2xl text-[#ccbd99]">{designation}</h3>
               </div>
            </Container>
         </div>
         <Container>
{lawyerDetails ? (
            <div className="">
{/*====================== Lawyer Card ==========================*/}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center my-14 p-8 rounded-lg lawyer_card_bg_imgae">
                  <div className="flex justify-center">
                     <Image
                        className="object-cover w-full max-h-[500px]"
                        width={300}
                        height={300}
                        src={image}
                        alt="Lawyer Image"
                     />
                  </div>

                  <div className="text-gray-50 col-span-2">
                     <h2 className={`${merriweather.className} text-4xl`}>
                        {name}
                     </h2>
                     <h3 className={`${merriweather.className} mt-3`}>
                        {designation}
                     </h3>
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

                     <ul className="flex gap-8 mt-4">
                        
{ socialmedia?.facebook &&
                        <li>
                           <a target="_blank" className="w-10 h-10 border-2 rounded-full flex items-center justify-center" href={socialmedia?.facebook}>
                              <FaFacebookF/>
                           </a>
                        </li>
}                        
{ socialmedia?.linkedin &&
                        <li>
                           <a target="_blank" className="w-10 h-10 border-2 rounded-full flex items-center justify-center" href={socialmedia?.linkedin}>
                              <FaLinkedinIn/>
                           </a>
                        </li>
}                        
{ socialmedia?.twitter &&
                        <li>
                           <a target="_blank" className="w-10 h-10 border-2 rounded-full flex items-center justify-center" href={socialmedia?.twitter}>
                              <FaTwitter/>
                           </a>
                        </li>
}                        
{ socialmedia?.instagram &&
                        <li>
                           <a target="_blank" className="w-10 h-10 border-2 rounded-full flex items-center justify-center" href={socialmedia?.instagram}>
                              <FaInstagram/>
                           </a>
                        </li>
}
                     </ul>


                     <Link
                        href={`/lawyerappointment/${params?.id}`}
                        className="bg-white px-5 py-3 text-[#a51890] rounded-md mt-5 block w-fit uppercase font-medium"
                     >
                        Appointment now
                     </Link>
                  </div>
               </div>
{/*====================== Lawyer Profiles and experience ==========================*/}
<div className="max-w-2xl ">
               <div className="flex">
                  <button
                     className={`${
                        activeTab === "PROFILE"
                           ? "bg-[#225559] text-white"
                           : "bg-gray-200 text-gray-700"
                     } px-4 py-2 w-1/2  border-r border-gray-300 focus:outline-none`}
                     onClick={() => handleTabClick("PROFILE")}
                  >
                     PROFILE
                  </button>
                  <button
                     className={`${
                        activeTab === "EXPERIENCE"
                           ? "bg-[#225559] text-white"
                           : "bg-gray-200 text-gray-700"
                     } px-4 py-2 w-1/2  focus:outline-none`}
                     onClick={() => handleTabClick("EXPERIENCE")}
                  >
                     EXPERIENCE
                  </button>
               </div>

               <div className="p-4 mb-10">
                  {activeTab === "PROFILE" && (
                     <div>
                        <h1 className=" text-xl  mt-4  text-gray-800">
                           {name}
                        </h1>
                        <p className="mb-4">Experience {experienceyear}+ Years</p>
                        <p className="text-gray-700 text-justify  ">
                           {description}
                        </p>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                           <div>
                              <p className="text-gray-700 mt-4 ">
                                 Practice Area
                              </p>

                              <ul>
                                 {
                                    practiceArea?.split(",")?.map((single,idx) => <li key={idx}>
                                       -  {single}
                                       </li>
                                    )
                                 }
                              </ul>
                           </div>
                        </div>
                     </div>
                  )}

                  {activeTab === "EXPERIENCE" && (
                     <div className="">
                        {
                           experience?.length >= 1 ? 
                           <div className="">
                              {
                                 experience?.map((ex,idx)=> <div key={idx} className="flex justify-between items-center">
                                 <div>
                                    {/* Left Content */}
                                    <h1 className="text-xl mb-4">
                                       {ex?.institutename}
                                    </h1>
                                    <p className="text-gray-700 font-light mb-1">
                                       Designation
                                    </p>
                                    <p className="text-gray-700 mb-4">
                                       {ex?.designation}
                                    </p>
                                    <p className="text-gray-700 font-thin mb-1">
                                       Employement Status
                                    </p>
                                    <p className="text-gray-700  ">
                                       {moment(ex?.startdate).format('ll')} - {moment(ex?.enddate).format('ll')}
                                    </p>
                                 </div>
                                 <div>
                                    {/* Right Content */}
                                    <p className="text-gray-700 mt-5 mb-1  font-thin">
                                       Department
                                    </p>
                                    <p className="text-gray-700 mb-4 ">{department}</p>
                                    <p className="text-gray-700 font-thin mb-1 ">
                                       Duration
                                    </p>
                                    <p className="text-gray-700  ">
                                       { 
                                          moment(ex?.startdate).from(ex?.enddate,true)
                                       }
                                    </p>
                                 </div>
                              </div>)
                              }
                           </div>
                           : <p className="text-3xl my-8 text-center">Not Available</p>
                        }
                     </div>
                  )}
               </div>
            </div>
            </div>
            ) : (
               <LoadingPage></LoadingPage>
            )}

         </Container>
      </div>
   );
};

export default SingleLawyerPage;
