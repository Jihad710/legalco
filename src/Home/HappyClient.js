"use client"
import Container from '@/Common/Container';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import SectionTitle from '@/Common/SectionTitle';
import ReactStarsRating from 'react-awesome-stars-rating';
import axios from 'axios';
import moment from 'moment/moment';
import LoadingPage from '@/shared/Loading';

const HappyClient = () => {
	const [reviews, setReviews] = useState(null);
	useEffect(()=> {
		(async()=>{
			const response = await axios('/api/reviews')
			if(response?.data){
				setReviews(response?.data);
			}
		})()
  }, [])
    return (
        <section className='pb-20'>
            <Container>
                <div className="">
                    <SectionTitle title={"What Our Clients Say"}></SectionTitle>
					<p className='text-center mt-3'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br></br> veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                </div>
                <div className="">
                <Swiper
						// slidesPerView={1}
						breakpoints={{
							740: {
								slidesPerView: 2,
								spaceBetween: 20
							},
							790: {
								slidesPerView: 3,
								spaceBetween: 20
							}
						}}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false
						}}
						spaceBetween={30}
						pagination={{
							clickable: true
						}}
						modules={[Pagination, Autoplay]}
						className="mySwiper"
					>
						{reviews ? reviews?.map((review) => (
							<SwiperSlide key={review?._id}>
								<div className="card bg-white min-h-[300px] md:min-h-[425px] my-10 border shadow-xl">
									<figure className="">
										<Image
											src={review?.photoUrl}
											alt={review?.name}
											width={100}
											height={100}
											className="h-[100px] w-[100px] rounded-[50%] mx-auto my-2 object-cover shadow-sm"
										/>
									</figure>
									<div className="card-body items-center text-center">
										<p>{review?.reviewText.slice(0, 150)}</p>

										{
										review?.rating &&	
										<ReactStarsRating
											isEdit={false}
											starGap={10}
											size={26}
											className="flex"
											isHalf={true}
											value={review?.rating}
										/>
										}

										<h2 className="card-title text-[#23A6F0]">{review?.name}</h2>
										<h2 className="">{moment(review?.timestamp).startOf('hour').fromNow()}</h2>
									</div>
								</div>
							</SwiperSlide>
						)) : <LoadingPage></LoadingPage>
					}
					</Swiper>
                </div>
            </Container>
        </section>
    );
};

export default HappyClient;