"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    console.log(data);
  };

  const serviceInterest = watch('serviceInterest');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-6">
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-gray-600 font-semibold">First Name</label>
        <input
          {...register('firstName', { required: 'First Name is required' })}
          type="text"
          id="firstName"
          placeholder="First Name"
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
            errors.firstName ? 'border-red-500' : 'focus:border-blue-400'
          }`}
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-gray-600 font-semibold">Last Name</label>
        <input
          {...register('lastName', { required: 'Last Name is required' })}
          type="text"
          id="lastName"
          placeholder="Last Name"
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
            errors.lastName ? 'border-red-500' : 'focus:border-blue-400'
          }`}
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600 font-semibold">Email</label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          type="email"
          id="email"
          placeholder="Enter your Email"
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
            errors.email ? 'border-red-500' : 'focus:border-blue-400'
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-gray-600 font-semibold">Phone Number</label>
        <input
          {...register('phoneNumber', {
            required: 'Phone Number is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Invalid phone number',
            },
          })}
          type="tel"
          id="phoneNumber"
          placeholder="Enter your Phone Number (11 digits)"
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
            errors.phoneNumber ? 'border-red-500' : 'focus:border-blue-400'
          }`}
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="serviceInterest" className="block text-gray-600 font-semibold">What service are you interested in?</label>
        <select
          {...register('serviceInterest', { required: 'Service Interest is required' })}
          id="serviceInterest"
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
            errors.serviceInterest ? 'border-red-500' : 'focus:border-blue-400'
          }`}
        >
          <option value="">Select a service</option>
          <option value="Business Set-up & Start-up Support (RJSC)">Business Set-up & Start-up Support (RJSC)</option>
          <option value="VAT, Tax & Compliance">VAT, Tax & Compliance</option>
          <option value="Legal Drafting">Legal Drafting</option>
          <option value="Rajuk & Customs Matter">Rajuk & Customs Matter</option>
          <option value="Land & Property (Registration & Sale)">Land & Property (Registration & Sale)</option>
          <option value="Abroad Legal Support, Immigration & Work Permit">Abroad Legal Support</option>
          <option value="Immigration & Work Permit">Immigration & Work Permit</option>
          <option value="Banking & Finance">Banking & Finance</option>
          <option value="Consult with Legal Expert">Consult with Legal Expert</option>
          <option value="Others">Others</option>
        </select>
        {errors.serviceInterest && (
          <p className="text-red-500 text-sm mt-1">{errors.serviceInterest.message}</p>
        )}
      </div>
      {serviceInterest === 'Others' && (
        <div className="mb-4">
          <label htmlFor="serviceDetails" className="block text-gray-600 font-semibold">Service Details</label>
          <textarea
            {...register('serviceDetails', { required: 'Service Details are required' })}
            id="serviceDetails"
            placeholder="Enter Service Details"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
              errors.serviceDetails ? 'border-red-500' : 'focus:border-blue-400'
            }`}
          ></textarea>
          {errors.serviceDetails && (
            <p className="text-red-500 text-sm mt-1">{errors.serviceDetails.message}</p>
          )}
        </div>
      )}

      
      <div className="mb-4">
        <label htmlFor="Message" className="block text-gray-600 font-semibold">Message</label>
        <textarea
          {...register('Message', { required: 'Message is required' })}
          id="Message"
          placeholder="Enter a Message"
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
            errors.Message ? 'border-red-500' : 'focus:border-blue-400'
          }`}
        ></textarea>
        {errors.Message && (
          <p className="text-red-500 text-sm mt-1">{errors.Message.message}</p>
        )}
      </div>
      
      <div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
