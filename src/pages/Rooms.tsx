import React from 'react';
import { Wifi, Coffee, Wind, Check } from 'lucide-react';
import './Rooms.css';
import roomBg from '../assets/hero.png';
import unit1 from '../assets/u1.jpg';
import unit2 from '../assets/u2.jpg';

const allRooms = [
  {
    id: 1,
    name: 'Unit 1',
    description: 'Your perfect home-away-from-home—Unit 1 is cozy, inviting, and ready for you.',
    image: unit1,
    floor: '3rd Floor',
    capacity: '4-6 PAX',
    features: ['Strong Wi-Fi', 'Buyog Watershed View',
    'Veranda', 'Dining and Kitchen utensils', 
    'Stove, Rice coooker & Kettle', 'Refrigerator',
    'Towels', 'Hot & Cold Shower', 'Fresh linens',
    'Free Parking']
  },
  {
    id: 2,
    name: 'Unit 2',
    description: 'Unit 2 offers a peaceful retreat with all the amenities you need for comfort.',
    image: unit2,
    floor: '2nd Floor',
    capacity: '5-8 PAX',
    features: ['Strong Wi-Fi', 'Buyog Watershed View',
    'Veranda', 'Dining and Kitchen utensils', 
    'Stove, Rice coooker & Kettle', 'Refrigerator',
    'Towels', 'Hot & Cold Shower', 'Fresh linens',
    'Free Parking']
  },
];

const Rooms: React.FC = () => {
  return (
    <div className="rooms-page">
      <div className="rooms-hero">
        <div className="rooms-hero-bg" style={{ backgroundImage: `url(${roomBg})` }}></div>
        <div className="container rooms-hero-content animate-fade-in-up">
          <h1 className="rooms-title">Accommodations</h1>
          {/* <p className="rooms-subtitle">Find your perfect sanctuary at Lumina.</p> */}
        </div>
      </div>

      <div className="container section">
        {/* <div className="rooms-filter-bar animate-fade-in-up delay-100">
          <div className="filter-group">
            <span className="filter-label">Filter by:</span>
            <button className="filter-btn active">All Rooms</button>
            <button className="filter-btn">Suites</button>
            <button className="filter-btn">Villas</button>
            <button className="filter-btn">Ocean View</button>
          </div>
        </div> */}

        {/* <div style={{marginTop:100}}></div> */}

        <div className="rooms-list">
          {allRooms.map((room, index) => (
            <div className={`room-list-item animate-fade-in-up delay-${(index % 3 + 1) * 100}`} key={room.id}>
              <div className="room-list-image-wrap">
                <img src={room.image} alt={room.name} className="room-list-image" />
              </div>
              
              <div className="room-list-content">
                <div className="room-list-header">
                  <div>
                    <h2 className="room-list-title">{room.name}</h2>
                    <div className="room-list-meta">
                      <span>{room.floor}</span>
                      <span className="meta-dot">•</span>
                      <span>{room.capacity}</span>
                      {/* <span className="meta-dot">•</span> */}
                      {/* <span>{room.bed}</span> */}
                    </div>
                  </div>
                  {/* <div className="room-list-price-box">
                    <span className="price-from">From</span>
                    <span className="price-amount">${room.price}</span>
                    <span className="price-period">/ night</span>
                  </div> */}
                </div>
                
                <p className="room-list-desc">{room.description}</p>
                
                <div className="room-list-features">
                  {room.features.map((feature, i) => (
                    <div className="feature-item" key={i}>
                      <Check size={14} className="feature-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="room-list-footer">
                  <div className="room-list-amenities">
                  <span title="Free WiFi"><Wifi size={18} /></span>
                  <span title="Espresso Machine"><Coffee size={18} /></span>
                  {/* <span title="Smart TV"><Tv size={18} /></span> */}
                  <span title="Air Conditioning"><Wind size={18} /></span>
                  {/* <span title="Pool Access"><Waves size={18} /></span> */}
                  </div>
                  {/* <button className="btn btn-primary">Book This Room</button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
