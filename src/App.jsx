import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Banner1 from '/src/assets/category/headphone.png';
import Banner2 from '/src/assets/category/smartwatch2-removebg-preview.png';
import Products from './components/Products/Products';
import Blogs from './components/Blogs/Blogs';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BannerData = {
    discount: '30% OFF',
    title: 'Fine Smile',
    date: '10 Jan to 28 Jan',
    image: Banner1,
    title2: 'Air Solo Bass',
    title3: 'Winter Sale',
    title4: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, voluptatem.',
    bgColor: '#f42c37'
  };

const BannerData2 = {
    discount: '30% OFF',
    title: 'Happy Hours',
    date: '14 Jan to 28 Jan',
    image: Banner2,
    title2: 'Smart Solo',
    title3: 'Winter Sale',
    title4: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, voluptatem.',
    bgColor: '#2dcc6f'
  };

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(()=> {
    AOS.init(
      {
        duration: 2000,
        easing: 'ease-in-sine',
        delay: 100,
        offset: 100,
      }
    );
    AOS.refresh();
  },[]);
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white overflow-hidden duration-200'>
    <Navbar handleOrderPopup={handleOrderPopup} />
    <Hero handleOrderPopup={handleOrderPopup} />
    <Category />
    <Category2 />
    <Services />
    <Banner data={BannerData} />
    <Products />
    <Banner data={BannerData2} />
    <Blogs />
    <Partners />
    <Footer />
    <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  );
};

export default App;