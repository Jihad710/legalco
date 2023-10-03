"use client";
import Container from "@/components/Container";
import Link from "next/link";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {

  return (
      <div className="sticky top-0 z-50">
         <Container>
            <div className="drawer">
               <input
                  id="my-drawer-3"
                  type="checkbox"
                  className="drawer-toggle"
               />
               <div className="drawer-content flex flex-col">
                  {/* Navbar */}
                  <div className="navbar md:py-3 w-full py-1">
                     <div className="flex-1 text-2xl md:text-3xl font-bold text-teal-600">
                        <Link href="/">LegalCo</Link>
                     </div>
                     <div className="lg:hidden flex-none">
                        <label
                           htmlFor="my-drawer-3"
                           className="btn btn-square btn-ghost text-teal-600"
                        >
                           <FaBarsStaggered size={18} />
                        </label>
                     </div>

                     <div className="lg:block flex-none hidden">
                        <ul className="menu-horizontal flex items-center gap-6 text-[15px] duration-200">
                           {/* Navbar menu contents */}
                           <div className="text-2xl md:text-3xl font-bold text-teal-600 lg:hidden">
                              <Link href="/">LegalCo</Link>
                           </div>
                           <li>
                              <Link
                                 className="text-teal-600 hover:text-teal-700 duration-200 uppercase"
                                 href="/"
                              >
                                 Home
                              </Link>
                           </li>
                           <li>
                              <Link
                                 className="text-teal-600 hover:text-teal-700 duration-200 uppercase"
                                 href="/"
                              >
                                 Services
                              </Link>
                           </li>
                           <li>
                              <Link
                                 className="text-teal-600 hover:text-teal-700 duration-200 uppercase"
                                 href="/"
                              >
                                 Appointment
                              </Link>
                           </li>
                           <li>
                              <Link
                                 className="text-teal-600 hover:text-teal-700 duration-200 uppercase"
                                 href="/"
                              >
                                 Blog
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>

               <div className="drawer-side">
                  <label
                     htmlFor="my-drawer-3"
                     className="drawer-overlay"
                  ></label>
                  <ul className="w-72 min-h-full py-4 space-y-3 text-[16px] font-semibold text-center duration-200 bg-white">
                     {/* Sidebar content here */}
                     <div className="text-3xl font-bold text-teal-600 lg:hidden pb-3 border-b">
                        <Link className="block" href="/">
                           LegalCo
                        </Link>
                     </div>

                     <li>
                        <Link href="/">Home</Link>
                     </li>
                     <li>
                        <Link href="/">Service</Link>
                     </li>
                     <li>
                        <Link href="/">Appointment</Link>
                     </li>
                     <li>
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

// import Link from "next/link";
// import React from "react";

// const Navbar = () => {
//    const navOptions = (
//       <>
//          <li className="uppercase">
//             <Link href="/">Home</Link>
//          </li>
//          <li className="uppercase">
//             <Link href="/menu">Services</Link>
//          </li>
//          <li className="uppercase">
//             <Link href="/order/salad">Appointment</Link>
//          </li>
//          <li className="uppercase">
//             <Link href="/secret">Blog</Link>
//          </li>
//       </>
//    );

//    return (
//       <div>
//          <div className="flex bg-base-100">
//             <div className="flex flex-row-reverse">
//                <div className="drawer">
//                   <input
//                      id="my-drawer"
//                      type="checkbox"
//                      className="drawer-toggle"
//                   />
//                   <div className="drawer-content lg:hidden">
//                      {/* Page content here */}
//                      <label
//                         htmlFor="my-drawer"
//                         className="btn btn-primary drawer-button"
//                      >
//                         Open drawer
//                      </label>
//                   </div>
//                   <div className="drawer-side">
//                      <label
//                         htmlFor="my-drawer"
//                         aria-label="close sidebar"
//                         className="drawer-overlay"
//                      ></label>
//                      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
//                         {/* Sidebar content here */}
//                         <li>
//                            <a>Sidebar Item 1</a>
//                         </li>
//                         <li>
//                            <a>Sidebar Item 2</a>
//                         </li>
//                      </ul>
//                   </div>
//                </div>
//                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                <ul className="menu menu-horizontal px-1">
//                   <li>
//                      <a>Item 1</a>
//                   </li>
//                   <li tabIndex={0}>
//                      <details>
//                         <summary>Parent</summary>
//                         <ul className="p-2">
//                            <li>
//                               <a>Submenu 1</a>
//                            </li>
//                            <li>
//                               <a>Submenu 2</a>
//                            </li>
//                         </ul>
//                      </details>
//                   </li>
//                   <li>
//                      <a>Item 3</a>
//                   </li>
//                </ul>
//             </div>
//          </div>
//       </div>
//    );
// };

// export default Navbar;
