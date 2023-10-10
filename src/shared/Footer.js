import Container from "@/Common/Container";
import { merriweather } from "@/Utils/Font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
   FaGoogle,
   FaFacebook,
   FaInstagram,
   FaLinkedin,
   FaTwitter,
} from "react-icons/fa";
import logo from '@/assets/logo.jpg'

const Footer = () => {
   return (
      <footer className="footer_bg_imgae pt-16 text-white overflow-hidden">
         <Container>
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-10 py-5 border-b-2 border-amber-500 jm_container">
               <div className="">
                  <div>
                     <Link href="/">
                        <Image src={logo} alt="" width={150} />
                     </Link>
                     <p className="my-4">
                        Edwin Diaz is a software and web technologies engineer,
                        a life coach trainer who is also a serial .
                     </p>
                  </div>

                  <ul className="flex gap-2">
                     <li>
                        <a
                           href="#"
                           className="bg-[#35878b65] hover:bg-[#53a6aa80] p-2 inline-block text-[#5ce5ec] rounded-full border border-[#35868b] duration-200"
                        >
                           <FaGoogle />
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="bg-[#35878b65] hover:bg-[#53a6aa80] p-2 inline-block text-[#5ce5ec] rounded-full border border-[#35868b] duration-200"
                        >
                           <FaTwitter />
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="bg-[#35878b65] hover:bg-[#53a6aa80] p-2 inline-block text-[#5ce5ec] rounded-full border border-[#35868b] duration-200"
                        >
                           <FaInstagram />
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="bg-[#35878b65] hover:bg-[#53a6aa80] p-2 inline-block text-[#5ce5ec] rounded-full border border-[#35868b] duration-200"
                        >
                           <FaLinkedin />
                        </a>
                     </li>
                  </ul>
               </div>

               <div>
                  <h3
                     className={`${merriweather.className} text-2xl font-bold mb-4`}
                  >
                     Important Links
                  </h3>

                  <ul className="space-y-1">
                     <li>
                        <Link href="/" className="text-[14px] hover:underline">
                           Home
                        </Link>
                     </li>
                     <li>
                        <Link href="/" className="text-[14px] hover:underline">
                           Services
                        </Link>
                     </li>
                     <li>
                        <Link href="/" className="text-[14px] hover:underline">
                           Appointment
                        </Link>
                     </li>
                     <li>
                        <Link href="/" className="text-[14px] hover:underline">
                           Blog
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Featured Services */}
               <div>
                  <h3
                     className={`${merriweather.className} text-2xl font-bold mb-4`}
                  >
                     Featured Services
                  </h3>

                  <ul className="space-y-1">
                     <li>
                        <Link
                           href={"/"}
                           className="text-[14px] hover:underline"
                        >
                           Business Law
                        </Link>
                     </li>
                     <li>
                        <Link
                           href={"/"}
                           className="text-[14px] hover:underline"
                        >
                           Education Law
                        </Link>
                     </li>
                     <li>
                        <Link
                           href={"/"}
                           className="text-[14px] hover:underline"
                        >
                           Family Law
                        </Link>
                     </li>
                     <li>
                        <Link
                           href={"/"}
                           className="text-[14px] hover:underline"
                        >
                           Real Estate Construction Law
                        </Link>
                     </li>
                     <li>
                        <Link
                           href={"/"}
                           className="text-[14px] hover:underline"
                        >
                           Personal Injury Law
                        </Link>
                     </li>
                     <li>
                        <Link
                           href={"/"}
                           className="text-[14px] hover:underline"
                        >
                           Insurance Defence
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Contact us */}
               <div>
                  <h3
                     className={`${merriweather.className} text-2xl font-bold mb-4`}
                  >
                     Contact Us
                  </h3>
                  <p className="my-3"><b className="block">Office Address: </b> SEL Trident Tower, Suite # 907 (9th Floor), 57, Purana Paltan, (VIP Road), Dhaka - 1000.</p>
                  <p className="my-3"><b>Phone: </b> +88 01773239086</p>
                  <p className="my-3"><b>Email: </b>  Admin@legalco.com</p>

               </div>
            </div>
            <p className="text-center my-5">
               Copyright © {new Date().getFullYear()} - All rights reserved by
               LegalCo
            </p>
         </Container>
      </footer>
   );
};

export default Footer;
