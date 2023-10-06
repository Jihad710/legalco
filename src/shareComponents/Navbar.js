"use client";
import Container from "@/Common/Container";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import logo from '@/assets/logo.jpg'
const Navbar = () => {
  
   // Change navbar color when scrolling
   const [color, setColor] = useState(false);
   if (typeof window !== 'undefined') {
      const changeColor = () => {
         if (window?.scrollY >= 90) {
            setColor(true);
         } else {
            setColor(false);
         }
      };
      window.addEventListener("scroll", changeColor);
    }

   return (
      <div
         className={
            color
               ? "sticky top-0 z-50 duration-300 nav-bg text-[rgba(40,45,64,0.9)] "
               : "duration-300 text-white "
         }
      >
         <Container>
            <div className="drawer">
               <input
                  id="my-drawer-3"
                  type="checkbox"
                  className="drawer-toggle"
               />
               <div className="drawer-content flex flex-col">
                  {/* Navbar */}
                  <div className="navbar w-full">
                     <div
                        className={`flex-1 text-2xl md:text-3xl font-bold ${
                           color ? "text-white" : "text-[#35868b]"
                        }`}
                     >
                        <Link href="/">
                           <Image src={logo} alt="Logo" width={150}/>
                        </Link>
                     </div>
                     <div className="lg:hidden flex-none">
                        <label
                           htmlFor="my-drawer-3"
                           className="btn btn-square btn-ghost  "
                        >
                           <FaBarsStaggered size={18} />
                        </label>
                     </div>

                     <div className="lg:block flex-none hidden">
                        <ul className="menu-horizontal flex items-center gap-6 text-[15px] duration-200">
                           {/* Navbar menu contents */}
                           <div className="text-2xl md:text-3xl font-bold text-[#28676b] lg:hidden">
                              <Link href="/">LegalCo</Link>
                           </div>
                           <li>
                              <Link
                                 className="text-[#dff9fc] hover:text-[#b1cbce] duration-200 uppercase"
                                 href="/"
                              >
                                 Home
                              </Link>
                           </li>
                           <li>
                              <Link
                                 className="text-[#dff9fc] hover:text-[#b1cbce] duration-200 uppercase"
                                 href="/"
                              >
                                 Services
                              </Link>
                           </li>
                           <li>
                              <Link
                                 className="text-[#dff9fc] hover:text-[#b1cbce] duration-200 uppercase"
                                 href="/"
                              >
                                 Appointment
                              </Link>
                           </li>
                           <li>
                              <Link
                                 className="text-[#dff9fc] hover:text-[#b1cbce] duration-200 uppercase"
                                 href="/"
                              >
                                 Blog
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>

               {/* Drawer side menu */}
               <div className="drawer-side">
                  <label
                     htmlFor="my-drawer-3"
                     className="drawer-overlay"
                  ></label>
                  <ul className="w-72 min-h-full py-4 space-y-3 text-[16px] font-semibold text-center duration-200 bg-white">
                     {/* Sidebar content here */}
                     <div className="text-3xl font-bold text-[#35868b] lg:hidden pb-3 border-b">
                        <Link className="block" href="/">
                           LegalCo
                        </Link>
                     </div>

                     <li className="text-[#46b2b8] hover:text-[#348286] duration-200">
                        <Link href="/">Home</Link>
                     </li>
                     <li className="text-[#46b2b8] hover:text-[#348286] duration-200">
                        <Link href="/">Service</Link>
                     </li>
                     <li className="text-[#46b2b8] hover:text-[#348286] duration-200">
                        <Link href="/">Appointment</Link>
                     </li>
                     <li className="text-[#46b2b8] hover:text-[#348286] duration-200">
                        <Link href="/">Blog</Link>
                     </li>
                  </ul>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Navbar;
