import React from 'react';
import { Card, Text, Heading, Box } from '@radix-ui/themes';
// Import images
import springShoot1 from '../assets/images/DSC02197.jpg';
import springShoot2 from '../assets/images/DSC02219.jpg';
import springShoot3 from '../assets/images/DSC02245.jpg';
import springShoot4 from '../assets/images/DSC02282.jpg';
import springShoot5 from '../assets/images/trio.jpg';
import springShoot6 from '../assets/images/trio3.jpg';

import fallShoot1 from '../assets/images/TrinityWilliams-11.jpg';
import fallShoot2 from '../assets/images/TrinityWilliams-12.jpg';
import fallShoot3 from '../assets/images/TrinityWilliams-14.jpg';
import fallShoot4 from '../assets/images/TrinityWilliams.jpg';

import collection1 from '../assets/images/_N3A5004.jpg';
import collection2 from '../assets/images/Copy of DSC03680.jpg';
import collection3 from '../assets/images/DSC_4476.jpg';
import collection4 from '../assets/images/2024.03.15-193951 edit.jpg';
import collection5 from '../assets/images/DSC_6825.jpg';
import collection6 from '../assets/images/DSC_6833.jpg';
import collection7 from '../assets/images/DSC_6839.jpg';
import collection8 from '../assets/images/2024.03.15-193855 edit.jpg';
import collection9 from '../assets/images/2024.03.15-193928 edit.jpg';
import collection10 from '../assets/images/2024.03.15-193941 edit.jpg';

function Apparel() {
  const collections = [
    {
      id: 1,
      name: "Monterey: Spring Collection 2024",
      items: [
        { id: 1, title: "", imageUrl: collection1, layout: "standard" },
        { id: 2, title: "", imageUrl: collection2, layout: "standard" },
        { id: 3, title: "", imageUrl: collection3, layout: "standard" },
        { id: 4, title: "", imageUrl: collection4, layout: "standard" },
        { id: 7, title: "", imageUrl: collection7, layout: "standard" },
        { id: 8, title: "", imageUrl: collection8, layout: "standard" },
        { id: 9, title: "", imageUrl: collection9, layout: "standard" },
        { id: 10, title: "", imageUrl: collection10, layout: "standard" },  
      ]
    },
    {
      id: 2,
      name: "Fall Shoot 2024",
      items: [
        { id: 1, title: "", imageUrl: fallShoot1, layout: "tall" },
        { id: 2, title: "", imageUrl: fallShoot2, layout: "standard" },
        { id: 3, title: "", imageUrl: fallShoot3, layout: "large" },
        { id: 4, title: "", imageUrl: fallShoot4, layout: "tall" },
      ]
    },
    {
      id: 3,
      name: "Spring Shoot 2024",
      items: [
        { 
          id: 1, 
          title: "", 
          imageUrl: springShoot1,
          layout: "tall"
        },
        { 
          id: 2, 
          title: "", 
          imageUrl: springShoot2,
          layout: "standard"
        },
        { 
          id: 3, 
          title: "", 
          imageUrl: springShoot3,
          layout: "standard"
        },
        { 
          id: 4, 
          title: "", 
          imageUrl: springShoot4,
          layout: "wide"
        },
        { 
          id: 5, 
          title: "", 
          imageUrl: springShoot5,
          layout: "large"
        },
        { 
          id: 6, 
          title: "", 
          imageUrl: springShoot6,
          layout: "tall"
        }
      ]
    }
  ];

  return (
    <div className="apparel-section">
      {collections.map(collection => (
        <section key={collection.id} className="collection-container">
          <h2>{collection.name}</h2>
          <div className="apparel-grid">
            {collection.items.map(item => (
              <div 
                key={item.id} 
                className={`apparel-item ${item.layout}`}
              >
                <div className="apparel-image-container">
                  <img src={item.imageUrl} alt={item.title || 'Fashion item'} />
                  <div className="hover-info">
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Apparel; 