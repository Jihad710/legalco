import HappyClient from '@/Home/HappyClient';
import LawyerSection from '@/Home/LawyerSection';
import ServicesPage from '@/Home/Services';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <ServicesPage></ServicesPage>
      <LawyerSection></LawyerSection>
      <HappyClient></HappyClient>
    </div>
  );
};

export default HomePage;