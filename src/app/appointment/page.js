"use client";
import React from "react";
import { useForm } from "react-hook-form";
import contact from "../../assets/contactus.jpg";
import Image from "next/image";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

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
         name: data?.firstName + " " + data?.lastName,
         email: data?.email,
         phone: data?.phoneNumber,
         servicetype: data?.serviceInterest,
         serviceInfo: data?.Message,
         timestamp: new Date(),
      };
      console.log(appointment);
      const res = await axios.post("/api/appointment", { ...appointment });
      console.log(res?.data);
      if (res?.data?.insertedId) {
         const mailResponse = await axios.post("/api/sendmail", {
            ...appointment,
         });
         console.log(mailResponse);
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
      <div className="banner-image">
         <Image
            className="h-96 object-cover -mt-[100px]"
            src={contact}
            alt="Banner"
         />

         <div className="contact-section">
            <div className="text-center mt-20">
               <h2 className="text-2xl mb-2">We Love to Hear from You</h2>
               <p>
                  Please call or fillup appoinment form and we will be happy to
                  assist you.
               </p>
            </div>

            <div className="flex">
               {/*  Form */}
               <div className="w-2/3  mx-auto px-4">
                  <form
                     onSubmit={handleSubmit(onSubmit)}
                     className="max-w-md mx-auto mt-6"
                  >
                     <div className="mb-4">
                        <label
                           htmlFor="firstName"
                           className="block mb-2 text-gray-600 font-semibold"
                        >
                           First Name
                        </label>
                        <input
                           {...register("firstName", {
                              required: "First Name is required",
                           })}
                           type="text"
                           id="firstName"
                           placeholder="First Name"
                           className={`w-full px-4 py-2 border focus:outline-none ${
                              errors.firstName
                                 ? "border-red-500"
                                 : "focus:border-blue-400"
                           }`}
                        />
                        {errors.firstName && (
                           <p className="text-red-500 text-sm mt-1">
                              {errors.firstName.message}
                           </p>
                        )}
                     </div>
                     <div className="mb-4">
                        <label
                           htmlFor="lastName"
                           className="block mb-2 text-gray-600 font-semibold"
                        >
                           Last Name
                        </label>
                        <input
                           {...register("lastName", {
                              required: "Last Name is required",
                           })}
                           type="text"
                           id="lastName"
                           placeholder="Last Name"
                           className={`w-full px-4 py-2 border  focus:outline-none ${
                              errors.lastName
                                 ? "border-red-500"
                                 : "focus:border-blue-400"
                           }`}
                        />
                        {errors.lastName && (
                           <p className="text-red-500 text-sm mt-1">
                              {errors.lastName.message}
                           </p>
                        )}
                     </div>
                     <div className="mb-4">
                        <label
                           htmlFor="email"
                           className="block mb-2 text-gray-600 font-semibold"
                        >
                           Email
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
                           placeholder="Enter your Email"
                           className={`w-full px-4 py-2 border  focus:outline-none ${
                              errors.email
                                 ? "border-red-500"
                                 : "focus:border-blue-400"
                           }`}
                        />
                        {errors.email && (
                           <p className="text-red-500 text-sm mt-1">
                              {errors.email.message}
                           </p>
                        )}
                     </div>
                     <div className="mb-4">
                        <label
                           htmlFor="phoneNumber"
                           className="block mb-2 text-gray-600 font-semibold"
                        >
                           Phone Number
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
                           className={`w-full px-4 py-2 border  focus:outline-none ${
                              errors.phoneNumber
                                 ? "border-red-500"
                                 : "focus:border-blue-400"
                           }`}
                        />
                        {errors.phoneNumber && (
                           <p className="text-red-500 text-sm mt-1">
                              {errors.phoneNumber.message}
                           </p>
                        )}
                     </div>
                     <div className="mb-4">
                        <label
                           htmlFor="serviceInterest"
                           className="block mb-2 text-gray-600 font-semibold"
                        >
                           What service are you interested in?
                        </label>
                        <select
                           {...register("serviceInterest", {
                              required: "Service Interest is required",
                           })}
                           id="serviceInterest"
                           className={`w-full px-4 py-2 border  focus:outline-none ${
                              errors.serviceInterest
                                 ? "border-red-500"
                                 : "focus:border-blue-400"
                           }`}
                        >
                           <option value="">Select a service</option>
                           <option value="Business Set-up & Start-up Support (RJSC)">
                              Business Set-up & Start-up Support (RJSC)
                           </option>
                           <option value="VAT, Tax & Compliance">
                              VAT, Tax & Compliance
                           </option>
                           <option value="Legal Drafting">
                              Legal Drafting
                           </option>
                           <option value="Rajuk & Customs Matter">
                              Rajuk & Customs Matter
                           </option>
                           <option value="Land & Property (Registration & Sale)">
                              Land & Property (Registration & Sale)
                           </option>
                           <option value="Abroad Legal Support, Immigration & Work Permit">
                              Abroad Legal Support
                           </option>
                           <option value="Immigration & Work Permit">
                              Immigration & Work Permit
                           </option>
                           <option value="Banking & Finance">
                              Banking & Finance
                           </option>
                           <option value="Consult with Legal Expert">
                              Consult with Legal Expert
                           </option>
                           <option value="Others">Others</option>
                        </select>
                        {errors.serviceInterest && (
                           <p className="text-red-500 text-sm mt-1">
                              {errors.serviceInterest.message}
                           </p>
                        )}
                     </div>
                     {serviceInterest === "Others" && (
                        <div className="mb-4">
                           <label
                              htmlFor="serviceDetails"
                              className="block mb-2 text-gray-600 font-semibold"
                           >
                              Service Details
                           </label>
                           <textarea
                              {...register("serviceDetails", {
                                 required: "Service Details are required",
                              })}
                              id="serviceDetails"
                              placeholder="Enter Service Details"
                              className={`w-full px-4 py-2 border  focus:outline-none ${
                                 errors.serviceDetails
                                    ? "border-red-500"
                                    : "focus:border-blue-400"
                              }`}
                           ></textarea>
                           {errors.serviceDetails && (
                              <p className="text-red-500 text-sm mt-1">
                                 {errors.serviceDetails.message}
                              </p>
                           )}
                        </div>
                     )}

                     <div className="mb-4">
                        <label
                           htmlFor="Message"
                           className="block mb-2 text-gray-600 font-semibold"
                        >
                           Message
                        </label>
                        <textarea
                           {...register("Message", {
                              required: "Message is required",
                           })}
                           id="Message"
                           placeholder="Enter a Message"
                           className={`w-full px-4 py-2 border  focus:outline-none ${
                              errors.Message
                                 ? "border-red-500"
                                 : "focus:border-blue-400"
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
                           className="bg-[#225559] hover:bg-transparent border-2 border-transparent hover:border-[#225559] text-white hover:text-[#35868b] py-2 px-4 rounded-full duration-300"
                        >
                           Request Appoinment
                        </button>
                     </div>
                  </form>
               </div>

               {/*  Contact information */}
               <div className="w-1/3 mx-auto px-4 mt-10 mr-7">
                  <div className="p-4 border rounded-lg bg-gray-100">
                     <h2 className="text-lg font-semibold mb-4">
                        Contact Information
                     </h2>
                     <p className="text-gray-600">
                        <span className="font-bold">Email:</span>{" "}
                        Admin@legalco.com
                     </p>
                     <p className="text-gray-600">
                        <span className="font-bold">Phone:</span> +88
                        01773239086
                     </p>
                     <p className="text-gray-600">
                        <span className="font-bold">Address:</span> SEL Trident
                        Tower, Suite # 907 (9th Floor), 57, Purana <br></br>{" "}
                        Paltan, (VIP Road), Dhaka - 1000.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ContactForm;
