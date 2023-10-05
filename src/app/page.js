import Navbar from '@/shareComponents/Navbar';
import Banner from '@/Home/Banner';
import HappyClient from '@/Home/HappyClient';
import LawyerSection from '@/Home/LawyerSection';
import ServicesPage from '@/Home/Services';

const HomePage = () => {
  return (
     <div>
      <Banner />
      <ServicesPage></ServicesPage>
      <LawyerSection></LawyerSection>
      <HappyClient></HappyClient>
    </div>
  );
};

export default HomePage;