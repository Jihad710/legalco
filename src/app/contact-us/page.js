"use client"
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const ContactUs = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
   
    console.log(data);
  };

  return (
    <div>
      <div className="about-us-bg pt-[150px] -mt-[100px] text-white min-h-screen">
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
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
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
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
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
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            <button type="submit" className="bg-[#225559] hover:bg-transparent border-2 border-transparent hover:border-[#225559] text-white hover:text-[#35868b] py-2 px-6 rounded-full duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
