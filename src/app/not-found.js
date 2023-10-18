'use client';
import Lottie from 'lottie-react';
import animation from '@/assets/not-found.json';
import Link from 'next/link';

const Error = () => {
	return (
		<div className="w-full min-h-screen -mt-[100px] bg-[#225559c1] flex justify-center items-center overflow-hidden pt-16">
			<div className="flex flex-col justify-center items-center gap-4 mb-20">
				<Lottie className='w-4/6' animationData={animation}></Lottie>
				<Link className='lc_btn block mt-8' href="/">Back to home</Link>
			</div>
		</div>
	);
};

export default Error;
