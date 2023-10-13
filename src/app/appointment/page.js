"use client";
import React from "react";
import { useForm } from "react-hook-form";
import contact from "@/assets/contactus.jpg";
import Image from "next/image";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter, useSearchParams } from "next/navigation";
import { TfiEmail, TfiLocationPin } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import Container from "@/Common/Container";

const ContactForm = () => {
   const router = useRouter();
   const {
      handleSubmit,
      register,
      setValue,
      watch,
      formState: { errors },
   } = useForm();

   const onSubmit = async (data) => {
      const appointment = {
         name: data?.firstName,
         email: data?.email,
         phone: data?.phoneNumber,
         servicetype: data?.serviceInterest,
         serviceInfo: data?.Message,
         timestamp: new Date(),
     };
     
      const res = await axios.post("/api/appointment", { ...appointment });
      
      if (res?.data?.insertedId) {
         const mailResponse = await axios.post("/api/sendmail", {
            ...appointment,
         });
         
         if (mailResponse?.data?.success) {
            Swal.fire({
               title: "Success",
               text: "You get all service in LEGALCO app. Please download this.",
               icon: "success",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Download Now",
            }).then((result) => {
               if (result.isConfirmed) {
                  router.push("https://www.youtube.com/watch?v=34UMor0gQEA");
               }
            });
         }
      }
   };
   const serviceInterest = watch("serviceInterest");

   return (
      <div className="banner-image bg-[#35878b18] pb-12">
         <Image
            className="h-96 object-cover -mt-[100px]"
            src={contact}
            alt="Banner"
       />
       
         {/* ========== contact section ========== */}
         <Container>
            <div className="contact-section">
               <div className="text-center mt-20 mb-14">
                  <h2 className="text-2xl md:text-3xl mb-2 font-bold">
                     We Love to Hear from You
                  </h2>
                  <p>
                     Please call or fillup appoinment form and we will be happy
                     to assist you.
                  </p>
               </div>

               <div className="md:flex">
                  {/*  Form */}
                  <div className="lg:w-2/3 mx-auto">
                     <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="max-w-md mx-auto mt-6"
                     >
                        <div className="mb-6">
                           <label
                              htmlFor="firstName"
                              className="block mb-1 text-[14px] font-semibold"
                           >
                              Name*
                           </label>
                           <input
                              {...register("firstName", {
                                 required: "Name is required",
                              })}
                              type="text"
                              id="firstName"
                              placeholder="Enter your name"
                              className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                 errors.firstName
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                              }`}
                           />
                           {errors.firstName && (
                              <p className="text-red-500 text-sm mt-1">
                                 {errors.firstName.message}
                              </p>
                           )}
                        </div>

                        {/* <div className="mb-6">
                           <label
                              htmlFor="lastName"
                              className="block mb-1 text-[14px] font-semibold"
                           >
                              Last Name*
                           </label>
                           <input
                              {...register("lastName", {
                                 required: "Last Name is required",
                              })}
                              type="text"
                              id="lastName"
                              placeholder="Hill"
                              className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                 errors.lastName
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                              }`}
                           />
                           {errors.lastName && (
                              <p className="text-red-500 text-sm mt-1">
                                 {errors.lastName.message}
                              </p>
                           )}
                        </div> */}

                        <div className="mb-6">
                           <label
                              htmlFor="email"
                              className="block mb-1 text-[14px] font-semibold"
                           >
                              Email*
                           </label>
                           <input
                              {...register("email", {
                                 required: "Email is required",
                                 pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address",
                                 },
                              })}
                              type="email"
                              id="email"
                              placeholder="Enter your email"
                              className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                 errors.email
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                              }`}
                           />
                           {errors.email && (
                              <p className="text-red-500 text-sm mt-1">
                                 {errors.email.message}
                              </p>
                           )}
                        </div>

                        <div className="mb-6">
                           <label
                              htmlFor="phoneNumber"
                              className="block mb-1 text-[14px] font-semibold"
                           >
                              Phone Number*
                           </label>
                           <input
                              {...register("phoneNumber", {
                                 required: "Phone Number is required",
                                 pattern: {
                                    value: /^[0-9]{11}$/,
                                    message: "Invalid phone number",
                                 },
                              })}
                              type="tel"
                              id="phoneNumber"
                              placeholder="Enter your Phone Number (11 digits)"
                              className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                 errors.phoneNumber
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                              }`}
                           />
                           {errors.phoneNumber && (
                              <p className="text-red-500 text-sm mt-1">
                                 {errors.phoneNumber.message}
                              </p>
                           )}
                        </div>

                        <div className="mb-6">
                           <label
                              htmlFor="serviceInterest"
                              className="block mb-1 text-[14px] font-semibold"
                           >
                              What service are you interested in?
                           </label>
                           <select
                              {...register("serviceInterest", {
                                 required: "Service Interest is required",
                              })}
                              id="serviceInterest"
                              className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] ${
                                 errors.serviceInterest
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                              }`}
                           >
                              <option value="" className="text-[15px]">
                                 Select a service
                              </option>
                              <option
                                 value="Business Set-up & Start-up Support (RJSC)"
                                 className="text-[15px]"
                              >
                                 Business Set-up & Start-up Support (RJSC)
                              </option>
                              <option
                                 value="VAT, Tax & Compliance"
                                 className="text-[15px]"
                              >
                                 VAT, Tax & Compliance
                              </option>
                              <option
                                 value="Legal Drafting"
                                 className="text-[15px]"
                              >
                                 Legal Drafting
                              </option>
                              <option
                                 value="Rajuk & Customs Matter"
                                 className="text-[15px]"
                              >
                                 Rajuk & Customs Matter
                              </option>
                              <option
                                 value="Land & Property (Registration & Sale)"
                                 className="text-[15px]"
                              >
                                 Land & Property (Registration & Sale)
                              </option>
                              <option
                                 value="Abroad Legal Support, Immigration & Work Permit"
                                 className="text-[15px]"
                              >
                                 Abroad Legal Support
                              </option>
                              <option
                                 value="Immigration & Work Permit"
                                 className="text-[15px]"
                              >
                                 Immigration & Work Permit
                              </option>
                              <option
                                 value="Banking & Finance"
                                 className="text-[15px]"
                              >
                                 Banking & Finance
                              </option>
                              <option
                                 value="Consult with Legal Expert"
                                 className="text-[15px]"
                              >
                                 Consult with Legal Expert
                              </option>
                              <option value="Others" className="text-[15px]">
                                 Others
                              </option>
                           </select>
                           {errors.serviceInterest && (
                              <p className="text-red-500 text-sm mt-1">
                                 {errors.serviceInterest.message}
                              </p>
                           )}
                        </div>

                        {serviceInterest === "Others" && (
                           <div className="mb-6">
                              <label
                                 htmlFor="serviceDetails"
                                 className="block mb-1 text-[14px] font-semibold"
                              >
                                 Service Details*
                              </label>
                              <textarea
                                 {...register("serviceDetails", {
                                    required: "Service Details are required",
                                 })}
                                 id="serviceDetails"
                                 rows={4}
                                 placeholder="Enter Service Details"
                                 className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                    errors.serviceDetails
                                       ? "border-red-500"
                                       : "focus:border-[#35878bb6]"
                                 }`}
                              ></textarea>
                              {errors.serviceDetails && (
                                 <p className="text-red-500 text-sm mt-1">
                                    {errors.serviceDetails.message}
                                 </p>
                              )}
                           </div>
                        )}

                        <div className="mb-6">
                           <label
                              htmlFor="Message"
                              className="block mb-1 text-[14px] font-semibold"
                           >
                              Message*
                           </label>
                           <textarea
                              {...register("Message", {
                                 required: "Message is required",
                              })}
                              id="Message"
                              rows={4}
                              placeholder="Enter a Message"
                              className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                 errors.Message
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                              }`}
                           ></textarea>
                           {errors.Message && (
                              <p className="text-red-500 text-sm mt-1">
                                 {errors.Message.message}
                              </p>
                           )}
                        </div>

                        <div className="mb-10 text-center">
                           <button
                              type="submit"
                              className="bg-[#225559] hover:bg-transparent border-2 border-transparent hover:border-[#225559] text-white hover:text-[#35868b] py-2 px-6 rounded-full duration-300"
                           >
                              Request Appoinment
                           </button>
                        </div>
                     </form>
                  </div>

                  {/*  Contact information */}
                  <div className="md:w-2/5 mx-auto px-4 mt-10">
                     <div className="p-4 rounded-lg bg-[#35878b18] border border-[#35878b33] shadow-md shadow-[#35878b33]">
                        <h2 className="text-lg font-semibold mb-4">
                           Contact Information
                        </h2>
                        <div className="space-y-2">
                           <p className="text-gray-600 flex items-center">
                              <span className="text-2xl font-extrabold">
                                 <TfiEmail />
                              </span>
                              <span className="text-[15px] ml-3">
                                 Admin@legalco.com
                              </span>
                           </p>
                           <p className="text-gray-600 flex items-center">
                              <span className="text-2xl font-extrabold">
                                 <BsTelephone />
                              </span>
                              <span className="text-[15px] ml-3">
                                 +88 01773239086
                              </span>
                           </p>
                           <p className="text-gray-600 flex items-start">
                              <span className="text-3xl font-extrabold">
                                 <TfiLocationPin />
                              </span>
                              <span className="text-[15px] ml-2">
                                 SEL Trident Tower, Suite # 907 (9th Floor), 57,
                                 Purana Paltan, (VIP Road), Dhaka - 1000.
                              </span>
                           </p>
                           {/* <p className="text-gray-600">
                           <span className="font-bold">Email:</span>
                           <span className="text-[14px] ml-2 font-semibold">
                              Admin@legalco.com
                           </span>
                        </p>
                        <p className="text-gray-600">
                           <span className="font-bold">Phone:</span>
                           <span className="text-[14px] ml-2 font-semibold">
                              +88 01773239086
                           </span>
                        </p>
                        <p className="text-gray-600">
                           <span className="font-bold">Address:</span> SEL
                           Trident Tower, Suite # 907 (9th Floor), 57, Purana{" "}
                           <br></br> Paltan, (VIP Road), Dhaka - 1000.
                        </p> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default ContactForm;
