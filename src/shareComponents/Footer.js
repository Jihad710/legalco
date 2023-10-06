import Container from "@/Common/Container";
import { merriweather } from "@/Utils/Font";
import Link from "next/link";
import React from "react";
import { FaGoogle,FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer_bg_imgae pt-16 text-white overflow-hidden">
            <Container>
                <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-10 py-5 border-b-2 border-amber-500 jm_container">
                    <div className="">
                        <Link href="/">
                            <h2 className="text-4xl">Legalco</h2>
                        </Link>
                        <p className="my-5">Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                        <ul className="flex gap-2">
                            <li><a href="#" className="bg-slate-600 p-2 inline-block text-white rounded-full"><FaGoogle/></a></li>
                            <li><a href="#" className="bg-slate-600 p-2 inline-block text-white rounded-full"><FaTwitter/></a></li>
                            <li><a href="#" className="bg-slate-600 p-2 inline-block text-white rounded-full"><FaInstagram/></a></li>
                            <li><a href="#" className="bg-slate-600 p-2 inline-block text-white rounded-full"><FaLinkedin/></a></li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className={`${merriweather.className} text-2xl font-bold mb-4`}>Important Links</h3>
                        <ul>
                            <li>
                                <Link href="/" className="hover:text-amber-600 block my-2" >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-amber-600 block my-2">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-amber-600 block my-2" >
                                    Appointment
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-amber-600 block my-2" >
                                    Blogs
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className={`${merriweather.className} text-2xl font-bold mb-4`}>Featured Services</h3>
                        <ul>
                            <li className="my-2">
                                <Link href={"/"}>Business Law</Link>
                            </li>
                            <li className="my-2">
                                <Link href={"/"}>Education Law</Link>
                            </li>
                            <li className="my-2">
                                <Link href={"/"}>Family Law</Link>
                            </li>
                            <li className="my-2">
                                <Link href={"/"}>Real Estate Construction Law</Link>
                            </li>
                            <li className="my-2">
                                <Link href={"/"}>Personal Injury Law</Link>
                            </li>
                            <li className="my-2">
                                <Link href={"/"}>Insurance Defence</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className={`${merriweather.className} text-2xl font-bold mb-4`}>Contact Us</h3>
                        <ul>
                            <li>
                                <a
                                    className="hover:text-amber-600 my-2 block"
                                    href="#"
                                >
                                    <FaFacebook className="inline mr-2 text-blue-600 text-xl" />{" "}
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-amber-600 my-2 block"
                                    href="#"
                                >
                                    <FaTwitter className="inline mr-2 text-blue-400 text-xl" />{" "}
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-amber-600 my-2 block"
                                    href="#"
                                >
                                    <FaLinkedin className="inline mr-2 text-blue-600 text-xl" />{" "}
                                    Linked in
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-amber-600 my-2 block"
                                    href="#"
                                >
                                    <FaInstagram className="inline mr-2 text-rose-600 text-xl" />{" "}
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="text-center my-5">
                    © 2023. JM_Resipes . All rights reserved.{" "}
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
