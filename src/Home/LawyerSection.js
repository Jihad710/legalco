"use client"
import Container from '@/Common/Container';
import SectionTitle from '@/Common/SectionTitle';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { merriweather } from '@/Utils/Font';
import Link from 'next/link';
import LoadingPage from '@/shared/Loading';
const LawyerSection = () => {
	const [lawyers,setLawyers] = useState(null);

	useEffect(()=>{
		(async()=> {
			const response = await axios('/api/lawyer');
			if(response?.data){
				setLawyers(response?.data);
			}
		})()
  }, [])
    return (
        <section className='py-16'>
            <Container>
                <div className="text_shadow-color">
                    <SectionTitle title={"Our Lawyer Team"}></SectionTitle>
                </div>
                <div className="">
					<Swiper
							// slidesPerView={1}
							breakpoints={{
								740: {
									slidesPerView: 2,
									spaceBetween: 0
								},
								790: {
									slidesPerView: 3,
									spaceBetween: 0
								}
							}}
							// 01923599398
							autoplay={{
								delay: 2500,
								disableOnInteraction: false
							}}
							// loop={true}
							spaceBetween={0}
							pagination={{
								clickable: true
							}}
							modules={[Pagination, Autoplay,Navigation]}
							navigation={true}
							className="mySwiper"
						>
							{lawyers ? lawyers.map((lawyer) => (
								<SwiperSlide key={lawyer?._id}>
									<div className="card rounded-none bg-white hover:bg-[#ccbd9977] transition-all w-full my-10 mt-20 border shadow-md border-[#2323237e]">
										<figure className="">
											<Image
												src={lawyer?.image}
												alt={lawyer?.name}
												width={300}
												height={300}
												className="w-full h-[350px] object-top object-cover shadow-sm"
											/>
										</figure>
										{/* <svg className='-mt-16 w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="100"d="M0,192L30,176C60,160,120,128,180,112C240,96,300,96,360,112C420,128,480,160,540,160C600,160,660,128,720,133.3C780,139,840,181,900,181.3C960,181,1020,139,1080,112C1140,85,1200,75,1260,96C1320,117,1380,171,1410,197.3L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg> */}
										<div className="p-5 h-[220px] text-center flex flex-col justify-between">
											<h2 className={`${merriweather.className} text-3xl`}>{lawyer?.name}</h2>
											<h3 className='text-lg my-2'>{lawyer?.title}</h3>
											<Link href={`/lawyerdetails/${lawyer?._id}`} className='mt-5 lc_btn'>Learn more</Link>
										</div>
									</div>
								</SwiperSlide>
							)) : <LoadingPage></LoadingPage>}
					</Swiper>
                </div>
            </Container>
        </section>
    );
};

export default LawyerSection;