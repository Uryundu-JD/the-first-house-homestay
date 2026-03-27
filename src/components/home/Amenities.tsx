import React from 'react';
import './Amenities.css';
import { Waves, UtensilsCrossed, Dumbbell, Wine } from 'lucide-react';

const amenities = [
  {
    icon: <Waves size={32} strokeWidth={1.5} />,
    title: 'Infinity Pool',
    description: 'Bask in the sun by our temperature-controlled infinity pool overlooking the ocean.'
  },
  {
    icon: <UtensilsCrossed size={32} strokeWidth={1.5} />,
    title: 'Fine Dining',
    description: 'Experience culinary excellence crafted by Michelin-starred chefs in our signature restaurants.'
  },
  {
    icon: <Dumbbell size={32} strokeWidth={1.5} />,
    title: 'Wellness Center',
    description: 'Rejuvenate your body and mind in our state-of-the-art fitness center and holistic spa.'
  },
  {
    icon: <Wine size={32} strokeWidth={1.5} />,
    title: 'Rooftop Bar',
    description: 'Enjoy premium sunset cocktails and panoramic views from our exclusive rooftop lounge.'
  }
];

const Amenities: React.FC = () => {
  return (
    <section className="section amenities">
      <div className="container">
        <div className="amenities-wrapper">
          <div className="amenities-content animate-fade-in-up">
            <span className="section-subtitle">World-Class Facilities</span>
            <h2 className="section-title">Beyond Your Expectations</h2>
            <div className="section-divider" style={{ margin: '0 0 var(--spacing-md) 0' }}></div>
            <p className="amenities-desc">
            At The First House Homestay, the only thing we prioritize is your comfort. Settle into a cozy, 
            inviting space where you can rest, recharge, and truly feel at ease.
            </p>
          </div>
          
          <div className="amenities-grid">
            {amenities.map((item, index) => (
              <div className={`amenity-card animate-fade-in-up delay-${(index + 1) * 100}`} key={index}>
                <div className="amenity-icon">{item.icon}</div>
                <h3 className="amenity-title">{item.title}</h3>
                <p className="amenity-text">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
