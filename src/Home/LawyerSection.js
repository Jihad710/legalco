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
       <section className="py-16">
          <Container>
             <div className="">
                <SectionTitle title={"Qualified Attorneys"}></SectionTitle>
				<p className='text-center mt-3'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br></br> veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
             </div>
             <div className="">
                <Swiper
                   // slidesPerView={1}
                   breakpoints={{
                      740: {
                         slidesPerView: 2,
                         spaceBetween: 0,
                      },
                      790: {
                         slidesPerView: 3,
                         spaceBetween: 0,
                      },
                   }}
                   // 01923599398
                   autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                   }}
                   // loop={true}
                   spaceBetween={0}
                   pagination={{
                      clickable: true,
                   }}
                   modules={[Pagination, Autoplay, Navigation]}
                   navigation={true}
                   className="mySwiper"
                >
                   {lawyers ? (
                      lawyers.map((lawyer) => (
                         <SwiperSlide key={lawyer?._id}>
                            <div className="card rounded-none bg-white hover:bg-[#35878b36] transition-all w-full my-10 mt-20 border shadow-md border-[#2323237e]">
                               <figure className="">
                                  <Image
                                     src={lawyer?.image}
                                     alt={lawyer?.name}
                                     width={300}
                                     height={300}
                                     className="w-full h-[500px] object-top object-cover  shadow-sm"
                                  />
                               </figure>
                               <div className="p-5 h-[220px] text-center flex flex-col justify-between">
                                  <h2
                                     className={`${merriweather.className} text-3xl`}
                                  >
                                     {lawyer?.name}
                                  </h2>
                                  <h3 className="text-lg my-2">
                                     {lawyer?.designation}
                                  </h3>
                                  <Link
                                     href={`/lawyerdetails/${lawyer?._id}`}
                                     className="mt-5 lc_btn"
                                  >
                                     Learn more
                                  </Link>
                               </div>
                            </div>
                         </SwiperSlide>
                      ))
                   ) : (
                      <LoadingPage></LoadingPage>
                   )}
                </Swiper>
             </div>
          </Container>
       </section>
    );
};

export default LawyerSection;