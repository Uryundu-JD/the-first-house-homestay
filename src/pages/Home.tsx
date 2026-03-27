import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedRooms from '../components/home/FeaturedRooms';
import Amenities from '../components/home/Amenities';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedRooms />
      {/* <Amenities /> */}
    </div>
  );
};

export default Home;
