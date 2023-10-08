"use client"
import React from 'react';
import Lottie from "lottie-react";
import animation from '@/assets/not-found.json'
const NotFoundPage = () => {
    return (
        <div className='w-full h-screen'>
            <Lottie animationData={animation} loop={true} />
        </div>
    );
};

export default NotFoundPage;