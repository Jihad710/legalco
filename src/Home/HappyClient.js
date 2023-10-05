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

const HappyClient = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(()=> {
		(async()=>{
			const response = await axios('/api/reviews')
			setReviews(response?.data)
		})()
  }, [])
  
    return (
        <section className='my-20'>
            <Container>
                <div className="text_shadow-color">
                    <SectionTitle title={"Our Happy Client Says"}></SectionTitle>
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
						{reviews?.map((review) => (
							<SwiperSlide key={review?._id}>
								<div className="card min-h-[300px] md:min-h-[425px] my-10 border shadow-xl">
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

										<ReactStarsRating
											isEdit={false}
											starGap={10}
											size={26}
											className="flex"
											value={review?.rating}
										/>

										<h2 className="card-title text-[#23A6F0]">{review?.name}</h2>
										<h2 className="">{moment(review?.timestamp).startOf('hour').fromNow()}</h2>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
                </div>
            </Container>
        </section>
    );
};

export default HappyClient;