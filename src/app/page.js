import Banner from '@/Banner/Banner';
import Navbar from '@/shareComponents/Navbar';
import HappyClient from '@/Home/HappyClient';
import LawyerSection from '@/Home/LawyerSection';
import ServicesPage from '@/Home/Services';

const HomePage = () => {
  return (
     <div>
      <Navbar />
      <Banner />
      <ServicesPage></ServicesPage>
      <LawyerSection></LawyerSection>
      <HappyClient></HappyClient>
    </div>
  );
};

export default HomePage;