import React from 'react';
import { Card, Text, Heading, Box } from '@radix-ui/themes';

// Define all image paths using const
const springShoot1 = process.env.PUBLIC_URL + '/images/DSC02197.jpg';
const springShoot2 = process.env.PUBLIC_URL + '/images/DSC02219.jpg';
const springShoot3 = process.env.PUBLIC_URL + '/images/DSC02245.jpg';
const springShoot4 = process.env.PUBLIC_URL + '/images/DSC02282.jpg';
const springShoot5 = process.env.PUBLIC_URL + '/images/trio.jpg';
const springShoot6 = process.env.PUBLIC_URL + '/images/trio3.jpg';

const fallShoot1 = process.env.PUBLIC_URL + '/images/TrinityWilliams-11.jpg';
const fallShoot2 = process.env.PUBLIC_URL + '/images/TrinityWilliams-12.jpg';
const fallShoot3 = process.env.PUBLIC_URL + '/images/TrinityWilliams-14.jpg';
const fallShoot4 = process.env.PUBLIC_URL + '/images/TrinityWilliams.jpg';

const collection1 = process.env.PUBLIC_URL + '/images/_N3A5004.jpg';
const collection2 = process.env.PUBLIC_URL + '/images/Copy of DSC03680.jpg';
const collection3 = process.env.PUBLIC_URL + '/images/DSC_4476.jpg';
const collection4 = process.env.PUBLIC_URL + '/images/2024.03.15-193951 edit.jpg';
const collection5 = process.env.PUBLIC_URL + '/images/DSC_6825.jpg';
const collection6 = process.env.PUBLIC_URL + '/images/DSC_6833.jpg';
const collection7 = process.env.PUBLIC_URL + '/images/DSC_6839.jpg';
const collection8 = process.env.PUBLIC_URL + '/images/2024.03.15-193855 edit.jpg';
const collection9 = process.env.PUBLIC_URL + '/images/2024.03.15-193928 edit.jpg';
const collection10 = process.env.PUBLIC_URL + '/images/2024.03.15-193941 edit.jpg';

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