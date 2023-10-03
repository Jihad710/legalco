"use client"
import Container from '@/Common/Container';
import SectionTitle from '@/Common/SectionTitle';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const LawyerSection = () => {
    return (
        <section>
            <Container>
                <div className="">
                    <SectionTitle title={"Our Lawyer Team"}></SectionTitle>
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
						{reviews.map((review) => (
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

export default LawyerSection;