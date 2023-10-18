"use client";
import React from "react";
import Image from "next/image";
import Container from "@/Common/Container";
import { useForm, Controller } from "react-hook-form";
import emailIcon from "@/assets/contact-us/open-mail.png";

const ContactUs = () => {
   const {
      control,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => {
      console.log(data);
   };

   return (
      <>
         <div className="contact-us-bg h-96 -mt-[100px]">
            <div className="flex items-center justify-center">
               <h2 className="text-3xl md:text-4xl text-white font-serif font-bold absolute top-[35%]">
                  Get in touch
               </h2>
            </div>
         </div>

         <div className="bg-[#E2EAE5] py-32">
            <Container>
               <div className="flex justify-center">
                  <div className="bg-[#39676a75] w-1/3 flex items-center">
                     <div className="">
                        <Image
                           src={emailIcon}
                           alt="Email icon"
                           className="w-36 mx-auto"
                        />
                        <p className="text-lg font-serif text-center px-10 leading-8 mt-8">
                           If you have questions or just want to get in touch,
                           use th from below. We look forward to hearing from
                           you!
                        </p>
                     </div>
                  </div>

                  {/* Contact From */}
                  <div className="bg-white w-1/2 px-10 py-10">
                     <h2 className="text-3xl text-[#495C6A] text-center font-serif font-semibold mb-4">
                        Contact Us
                     </h2>
                     <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                           <label
                              htmlFor="name"
                              className="block text-sm font-semibold text-gray-700"
                           >
                              Name*
                           </label>
                           <Controller
                              name="name"
                              control={control}
                              rules={{ required: "Name is required" }}
                              render={({ field }) => (
                                 <input
                                    {...field}
                                    type="text"
                                    id="name"
                                    className="w-full p-2 border rounded"
                                 />
                              )}
                           />
                           {errors.name && (
                              <p className="text-red-500 text-sm">
                                 {errors.name.message}
                              </p>
                           )}
                        </div>

                        <div className="mb-4">
                           <label
                              htmlFor="email"
                              className="block text-sm font-semibold text-gray-700"
                           >
                              Email*
                           </label>
                           <Controller
                              name="email"
                              control={control}
                              rules={{
                                 required: "Email is required",
                                 pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address",
                                 },
                              }}
                              render={({ field }) => (
                                 <input
                                    {...field}
                                    type="text"
                                    id="email"
                                    className="w-full p-2 border rounded"
                                 />
                              )}
                           />
                           {errors.email && (
                              <p className="text-red-500 text-sm">
                                 {errors.email.message}
                              </p>
                           )}
                        </div>

                        <div className="mb-4">
                           <label
                              htmlFor="message"
                              className="block text-sm font-semibold text-gray-700"
                           >
                              Message*
                           </label>
                           <Controller
                              rows={4}
                              name="message"
                              placeholder="Write your message"
                              control={control}
                              rules={{ required: "Message is required" }}
                              render={({ field }) => (
                                 <textarea
                                    {...field}
                                    id="message"
                                    className="w-full p-2 border rounded"
                                 />
                              )}
                           />
                           {errors.message && (
                              <p className="text-red-500 text-sm">
                                 {errors.message.message}
                              </p>
                           )}
                        </div>

                        <div className="flex justify-center">
                           <button
                              type="submit"
                              className="bg-[#225559] hover:bg-transparent border-2 border-transparent hover:border-[#225559] text-[17px] text-white font-semibold hover:text-[#35868b] py-2 px-7 rounded-full duration-300"
                           >
                              Send Message
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </Container>
         </div>

         {/* <div className="about-us-bg pt-[150px] -mt-[100px] text-white min-h-screen">
        <div className="mx-auto max-w-md p-4 bg-white rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Controller
                name="name"
                control={control}
                rules={{ required: 'Name is required' }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    id="name"
                    className="w-full p-2 border rounded"
                  />
                )}
              />
              {errors.name && <p className="text-black text-sm">{errors.name.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    id="email"
                    className="w-full p-2 border rounded"
                  />
                )}
              />
              {errors.email && <p className="text-black text-sm">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-black">
                Message
              </label>
              <Controller
                name="message"
                control={control}
                rules={{ required: 'Message is required' }}
                render={({ field }) => (
                  <textarea
                    {...field}
                    id="message"
                    className="w-full p-2 border rounded"
                  />
                )}
              />
              {errors.message && <p className="text-black text-sm">{errors.message.message}</p>}
            </div>

            <button type="submit" className="bg-[#225559] hover:bg-transparent border-2 border-transparent hover:border-[#225559] text-white hover:text-[#35868b] py-2 px-6 rounded-full duration-300">
              Submit
            </button>
          </form>
        </div>
      </div> */}
      </>
   );
};

export default ContactUs;
