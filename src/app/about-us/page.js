import React from "react";
import Image from "next/image";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import Container from "@/Common/Container";
import aboutImg from '../../assets/about-us/Chairman (1).jpg';
import ceo from '../../assets/about-us/Founder CEO.jpg';
import missionImg from "@/assets/about-us/mission.jpg";
import visionImg from "@/assets/about-us/vision.jpg";

const AboutUs = () => {
   return (
      <div>
         {/* Chamber information */}
         <div className="about-us-bg pt-[150px] -mt-[100px] text-white min-h-screen">
            <div className="w-5/5 md:w-4/6 lg:w-2/5 absolute top-[53%] md:top-[40%] lg:top-[50%] p-4 rounded-lg bg-[#2c7074da] border border-[#35878b33] shadow-md shadow-[#35878b33] py-10 pl-5 md:pl-14">
               <h2 className="text-2xl md:text-3xl mb-6 uppercase">
                  Chamber Profile
               </h2>
               <div className="space-y-2">
                  <p className="flex items-start">
                     <span className="text-3xl font-extrabold -ml-[2px]">
                        <FaBuilding />
                     </span>
                     <span className="text-[15px] ml-2">
                        SEL Trident Tower, Suite # 907 (9th Floor), 57, Purana
                        Paltan, (VIP Road), Dhaka - 1000.
                     </span>
                  </p>
                  <p className="flex items-center">
                     <span className="text-2xl font-extrabold">
                        <TfiEmail />
                     </span>
                     <span className="text-[16px] ml-3">
                        info@legalco.com.bd
                     </span>
                  </p>
                  <p className="flex items-center">
                     <span className="text-3xl font-extrabold -ml-[5px]">
                        <ImMobile />
                     </span>
                     <span className="text-[16px] ml-3">+880 1988688988</span>
                  </p>
                  <p className="flex items-center">
                     <span className="text-2xl font-extrabold">
                        <BsTelephone />
                     </span>
                     <span className="text-[16px] ml-3">+880 9697308988</span>
                  </p>
               </div>
            </div>
         </div>

         <div className=" about-content-bg py-20">
            <Container>
               {/* About us details */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white px-8 md:px-10 lg:px-20">
                  <div className="mb-8 md:mb-0">
                     <Image
                        src={aboutImg}
                        alt="About Image"
                        className="rounded-ss-3xl rounded-br-3xl"
                     />
                  </div>

                  <div className="md:mt-[5%] lg:mt-[12%] ">
                     <h3 className="text-2xl md:text-2xl font-bold mb-2 uppercase">
                     Anjuman Ara Lima 
                     </h3>
                    
                     <p className="text-sm font  mb-5 ">
                     Advocate Supreme Court Of Bangladesh
                     </p>
                    
                     <p className="text-[15px] mb-3">
                     Adv. Anjuman Ara Lima is the Chairman of  LegalCO Limited. She is a practicing Advocate of the Hon’ble High Court Division of the Supreme Court of Bangladesh. She obtained LL.B (Hon’s) and LL.M degrees from the Southeast University in 2011 and 2012 respectively. She started her career as an Advocate in Chittagong Judge Court and then moved to Dhaka to practice law in the Hon’ble High Court Division of the Supreme Court of Bangladesh. She is specialized in civil, criminal and writ litigation as well as in banking, corporate finance, income tax, custom matters and family law issues. 
                     </p>
                     <p className="text-[15px] mb-3">
                     Ain o Adalat’ at Radio Dhoni and ‘Prosongo Aine’ at Bangle Vision channel.
                     </p>
                    
                     <p className="text-[15px]">
                     She is associated with numerous financial institutions including BRAC Bank Limited, Social Islami bank Limited, Al-Arafah Islami Bank Limited, Bangladesh Commerce Bank Limited, NRB Commercial Bank Limited, First Security Islami Bank Limited and Mercantile Bank as a panel lawyer.
                     </p>
                  </div>
                  <div className="mb-8 md:mb-0">
                     <Image
                        src={ceo}
                        alt="About Image"
                        className="rounded-ss-3xl rounded-br-3xl"
                     />
                  </div>
                  <div className="md:mt-[5%] lg:mt-[12%]">
                     <h3 className="text-2xl md:text-2xl font-bold mb-2 uppercase">
                     Md. Mehedi Hasan 
                     </h3>
                    
                    
                     <p className="text-[15px] mb-3">
                     Mehedi Hasan is the founder and CEO of LegalCO Limited, earned his Bachelors degree in Computer Science and Engineering. Following this, he pursued advanced studies in networking, completing a CCNA certification from BUET, showcasing his dedication to excellence in the field. 
                     </p>
                     <p className="text-[15px] mb-3">
                     Subsequently, he accumulated substantial expertise through employment at prestigious organizations in Bangladesh for an extended period.
                     </p>
                    
                     <p className="text-[15px]">
                     He has a knack for devising innovative business ideas and problem-solving, which is a true passion for him. His journey began with contemplating the legal challenges faced by common people in Bangladesh. His aim is to address these issues digitally, and he diligently works towards implementing Legalcos plans for this purpose.
He has even more elaborate plans in store for working on digital products in the near future.
                     </p>
                  </div>
               </div>

               {/* Mission */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white px-8 md:px-10 lg:px-20 mt-24">
                  <div className="md:mt-[5%] lg:mt-[12%]">
                     <h3 className="text-2xl md:text-4xl font-bold mb-5 uppercase">
                        Mission
                     </h3>
                     <p className="text-[19px] font-bold mb-2">
                        We will simplify
                     </p>
                     <p className="flex items-start text-[17px]">
                        <span className="text-2xl mr-2">&#10146;</span>
                        <span>
                           Lawyers, Simplify Your Practice for an Elevated
                           Experience
                        </span>
                     </p>
                     <p className="flex items-start text-[17px]">
                        <span className="text-2xl mr-2">&#10146;</span>
                        <span>
                           Litigation Simplifying Your Effortless Journey as a
                           Litigant
                        </span>
                     </p>
                  </div>

                  <div className="mb-8 md:mb-0 order-first md:order-last">
                     <Image
                        src={missionImg}
                        alt="Mission Image"
                        className="rounded-se-3xl rounded-bl-3xl"
                     />
                  </div>
               </div>

               {/* Vision */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white px-8 md:px-10 lg:px-20 mt-24">
                  <div className="mb-8 md:mb-0">
                     <Image
                        src={visionImg}
                        alt="Vision Image"
                        className="rounded-ss-3xl rounded-br-3xl"
                     />
                  </div>

                  <div className="md:mt-[5%] lg:mt-[12%]">
                     <h3 className="text-2xl md:text-4xl font-bold mb-5 uppercase">
                        Vision
                     </h3>
                     <p className="text-[17px]">
                        To deliver ingenious solutions for the daily hurdles
                        confronted by lawyers, law firms, and litigants
                     </p>
                  </div>
               </div>
            </Container>
         </div>
      </div>
   );
};

export default AboutUs;
