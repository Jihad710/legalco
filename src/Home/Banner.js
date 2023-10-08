import React from "react";
import Container from "@/Common/Container";
import Link from "next/link";

const Banner = () => {
   return (
      <div className="bg-[url('../assets/image.jpg')] bg-cover min-h-screen flex items-center -mt-[88px]">
         <Container>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-20 md:mt-10">
               <div className="text-white mt:mt-5 lg:mt-16">
                  <h1 className="text-2xl md:text-4xl font-bold">
                     Really Unbelievable Solutions for all Legal Cases.
                  </h1>
                  <p className="my-6">
                     Officia quas assumenda incidunt necessitatibus, deserunt
                     consequuntur cumque asperiores exercitationem iusto in
                     dolores quasi consequatur nihil obcaecati pariatur ea nemo
                     iste sed.
                  </p>
                  <Link href="" className="bg-[#225559] hover:bg-transparent border-2 border-transparent hover:border-[#225559] text-white hover:text-[#35868b] py-2 px-4 rounded-full duration-300">
                     Appointment
                  </Link>
               </div>

               {/* Add video embed here */}
               <div className="order-first lg:order-last mt-24 sm:mt-28 md:mt-24 lg:mt-0">
                  <video
                     className="md:w-[1500px] h-full lg:h-[350px] object-cover rounded-xl"
                     muted
                     autoPlay
                     loop
                    src="https://res.cloudinary.com/dfveaxvlk/video/upload/v1696454429/xpvswqtv3nt6qfxs5t0t.mp4"
                  ></video>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Banner;
