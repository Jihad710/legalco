"use client";
import Container from '@/Common/Container';
import { merriweather } from '@/Utils/Font';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import banner from '@/assets/team_banner.jpg';
import LoadingPage from '@/shared/Loading';

const SingleLawyerPage = ({ params }) => {
  const [lawyerDetails, setLawyerDetails] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await axios(`/api/lawyer/${params?.id}`);
      if (res?.data) {
        setLawyerDetails(res?.data);
      }
    })();
  }, [params]);

  const { name, image, description, department, socialmedia, title, languages, contacts } =
    lawyerDetails || {};

  return (
    <div className="-mt-20">
      <div className="team_banner_bg_imgae h-[450px] text-white flex items-end justify-center">
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-5xl">{name}</h2>
            <h3 className="mt-3 text-2xl text-[#ccbd99]">{title}</h3>
          </div>
        </Container>
      </div>
      <Container>
        {lawyerDetails ? (
          <div className="grid grid-cols-3 gap-5 my-20 p-5 rounded-lg lawyer_card_bg_imgae">
            <div className="">
              <Image
                className="w-full h-full object-cover"
                width={500}
                height={500}
                src={image}
                alt="Lawyer Image"
              />
            </div>
            <div className="text-gray-50 col-span-2">
              <h2 className={`${merriweather.className} text-4xl`}>{name}</h2>
              <h3 className={`${merriweather.className} mt-3`}>{title}</h3>
              <h3 className="mt-5 font-medium text-lg">
                <b>Department: </b> {department}
              </h3>
              <h3 className="font-medium text-lg mt-2">
                <b>Languages: </b> {languages}
              </h3>
              <p className="mt-4">{description}</p>

              {contacts?.address && (
                <p className="flex gap-2 mt-3 items-center">
                  <FaLocationDot /> {contacts.address}
                </p>
              )}

              <ul className="flex gap-3 mt-4">
                {socialmedia?.map((single, idx) => (
                  <li key={idx}>
                    <a
                      target="_blank"
                      className="rounded-full border-2 w-10 bg-white flex items-center justify-center p-[10px] h-10"
                      href={single?.link}
                    >
                      <Image
                        width={50}
                        height={50}
                        src={single?.icon}
                        className="object-contain w-full h-full"
                        alt="icon"
                      />
                    </a>
                  </li>
                ))}
              </ul>
              <Link
                href={'/appointment'}
                className="bg-white px-5 py-3 text-[#a51890] rounded-md mt-5 block w-fit uppercase font-medium"
              >
                Appointment now
              </Link>
            </div>
          </div>
        ) : (
          <LoadingPage></LoadingPage>
        )}
      </Container>
    </div>
  );
};

export default SingleLawyerPage;
