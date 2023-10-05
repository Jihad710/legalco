import Banner from '@/Banner/Banner';
import Navbar from '@/shareComponents/Navbar';

const HomePage = () => {
  return (
     <div className="h-[150vh]">
      <Navbar />
      <Banner />
        <p className='mt-10'>This is the home page</p>
     </div>
  );
};

export default HomePage;