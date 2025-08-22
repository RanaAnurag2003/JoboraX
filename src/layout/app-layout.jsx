import { Outlet } from 'react-router-dom';
import Header from '../components/header.jsx';

const AppLayout = () => {
  return (
    <div>
      <div className='grid-background'></div>
      <main className="min-h-screen container px-6 md:px-10">
        <Header/>
        <Outlet/>
      </main>
      <div className='flex flex-row justify-center p-10 gap-1 text-center bg-gray-800 mt-10'>© 2030 Anurag Rana. <img src="https://images.emojiterra.com/google/noto-emoji/animated-emoji/1f496.gif" alt="" className='w-6 h-6' /> All rights reserved.</div>
    </div>
  );
};

export default AppLayout;
