import React from 'react';
import './FeaturedRooms.css';
import room from '../../assets/room.jpg'
import { ArrowRight, Wifi, Coffee, Tv } from 'lucide-react';
import { Link } from 'react-router-dom';

const rooms = [
  {
    id: 1,
    name: 'Two Bed Rooms',
    description: 'Spacious two-bedroom setup—ideal for families, friends, or small groups.',
    image: room,
  },
  {
    id: 2,
    name: 'Kitchen & cooking essentials',
    description: 'A fully equipped kitchen with all the essentials to cook your favorite meals.',
    image: 'https://www.thedailymeal.com/img/gallery/30-essential-kitchen-tools/intro-1687790000.jpg',
  },
  {
    id: 3,
    name: 'Strong Wifi Connection',
    description: 'Enjoy a strong WiFi connection—perfect for work, streaming, and browsing.',
    image: 'https://www.tufftechies.com/wp-content/uploads/2023/05/How-to-Test-Your-WiFi-Internet-Speed-scaled.jpg',
  },
  {
    id: 4,
    name: 'Towels & toiletries',
    description: 'We provide clean towels and essential toiletries so you can just relax and enjoy your stay.',
    image: 'https://media.istockphoto.com/id/510165808/photo/spa-kit-shampoo-soap-bar-and-liquid-toiletries.jpg?s=612x612&w=0&k=20&c=afpDooRivgvwOzh6scaz43QBb_W2ImK6PDfOMHZ3QMM=',
  },
  {
    id: 5,
    name: 'Hot & Cold Shower',
    description: 'Relax and unwind with a refreshing shower, just the way you like it.',
    image: 'https://www.goldmedalindia.com/blog/wp-content/uploads/2025/01/Hot-Shower-Vs-Cold-Shower.jpg',
  },
  {
    id: 5,
    name: 'Free Parking',
    description: 'Enjoy the convenience of free parking during your stay.',
    image: 'https://media.istockphoto.com/id/155067170/photo/free-parking-sign.jpg?s=612x612&w=0&k=20&c=chrkpcywjEBGMp31YEnXayPxayQCrQEm0sOL4yAqVPQ=',
  }
];

const FeaturedRooms: React.FC = () => {
  return (
    <section className="section featured-rooms">
      <div className="container">
        <div className="section-header text-center animate-fade-in-up">
          <span className="section-subtitle"> 
          Settle into a cozy, inviting space where you can rest, recharge, and truly feel at ease.</span>
          <h2 className="section-title">Amenities</h2>
          <div className="section-divider"></div>
        </div>

        <div className="rooms-grid">
          {rooms.map((room, index) => (
            <div 
              className={`room-card animate-fade-in-up delay-${(index + 1) * 100}`} 
              key={room.id}
            >
              <div className="room-image-wrap">
                <img src={room.image} alt={room.name} className="room-image" />
                {/* <div className="room-price">
                  <span className="price-value">${room.price}</span>
                  <span className="price-label">/ night</span>
                </div> */}
              </div>
              <div className="room-content">
                <h3 className="room-title">{room.name}</h3>
                <p className="room-desc">{room.description}</p>
                <div className="room-meta">
                  {/* <span>{room.size}</span> */}
                  {/* <div className="room-amenities-mini">
                    <Wifi size={16} />
                    <Coffee size={16} />
                    <Tv size={16} />
                  </div> */}
                </div>
                {/* <Link to={`/rooms/${room.id}`} className="room-link">
                  Discover Details <ArrowRight size={16} />
                </Link> */}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center" style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link to="/rooms" className="btn btn-outline" style={{ color: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>
            View All Accommodations
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedRooms;
