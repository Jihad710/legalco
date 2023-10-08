import React from 'react';
import Lottie from "lottie-react";
import animation from '@/assets/loading.json'
const LoadingPage = () => {
    return (
        <div>
            <Lottie animationData={animation} loop={true} />
        </div>
    );
};

export default LoadingPage;