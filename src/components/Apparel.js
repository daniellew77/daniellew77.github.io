import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images directly from src/assets/images
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

import collection1 from '../assets/images/spring1.jpg';
import collection2 from '../assets/images/Copy of DSC03680.jpg';
import collection3 from '../assets/images/DSC_4476.jpg';
import collection4 from '../assets/images/2024.03.15-193951 edit.jpg';
import collection5 from '../assets/images/DSC_6825.jpg';
import collection6 from '../assets/images/DSC_6833.jpg';
import collection7 from '../assets/images/DSC_6839.jpg';
import collection8 from '../assets/images/2024.03.15-193855 edit.jpg';
import collection9 from '../assets/images/2024.03.15-193928 edit.jpg';
import collection10 from '../assets/images/2024.03.15-193941 edit.jpg';

import mar1 from '../assets/images/mar1.jpg';
import lullabieswhole from '../assets/images/lullabieswhole.JPG';
import aliza1 from '../assets/images/aliza.jpg';
import ishya1 from '../assets/images/ishya.jpg';
import alaina1 from '../assets/images/alaina1.jpg';
import marback from '../assets/images/marback.JPG';
import stellamove from '../assets/images/stellainmotion.jpg';
import stellayay from '../assets/images/stellaaaa.jpg';
import skeeter from '../assets/images/skeety.jpg';
import alainaclose from '../assets/images/alainaclose.jpg';
import tiffandalaina from '../assets/images/tiffandalaina.jpg';
import me from '../assets/images/me.jpg';
import tiff from '../assets/images/tiff.jpg';
import stellafront from '../assets/images/stellafront.jpg';
import groupstudio from '../assets/images/groupstudio.jpg';
import ishyaandaliza from '../assets/images/ishyaandaliza.jpg';
import alizarunway from '../assets/images/alizarunway.jpg';

function Apparel() {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

  const collections = [
    {
      id: 0,
      name: "Lullabies: SS 2025",
      coverImage: stellayay,
      description: "Lullabies uses midnight blues and celestial motifs across billowing silhouettes that mimic breathing during sleep. It is a dreamy stylistic exploration that captures the tranquility of sleep.",
      models: ["Mar Falcon", "Stella Biase", "Ishya Washington", "Tiffany Zhang", "Skeeter Sunda", "Aliza Kopans", "Alaina Lin", "Me!"],
      images: [
        { id: 0, imageUrl: stellayay },
        { id: 1, imageUrl: mar1 },
        { id: 2, imageUrl: marback },
        { id: 3, imageUrl: alainaclose },
        { id: 4, imageUrl: aliza1 },
        { id: 5, imageUrl: ishya1 },
        { id: 6, imageUrl: alaina1 },
        { id: 7, imageUrl: stellamove },
        { id: 8, imageUrl: ishyaandaliza },
        { id: 9, imageUrl: stellafront },
        { id: 10, imageUrl: tiff },
        { id: 11, imageUrl: tiffandalaina },
        { id: 12, imageUrl: me },
        { id: 13, imageUrl: alizarunway },
        { id: 14, imageUrl: skeeter },
        { id: 15, imageUrl: lullabieswhole },
        { id: 16, imageUrl: groupstudio },
      ]
    },
    {
      id: 1,
      name: "Monterey: SS 2024",
      coverImage: collection4,
      description: "A vibrant spring collection inspired by the rocky coastline and sparkling waters of the coastal town of Monterey. This collection celebrates the renewal and energy of ocean waves with flowing fabrics and natural textures, all made from recycled yarn and upcycled fabric.",
      models: ["Lena Henderson", "Stella Biase", "Naomi Deokule", "Celine Dipp", "Me!"],
      images: [
        { id: 1, imageUrl: collection1 },
        { id: 2, imageUrl: collection2 },
        { id: 3, imageUrl: collection3 },
        { id: 4, imageUrl: collection4 },
        { id: 7, imageUrl: collection7 },
        { id: 8, imageUrl: collection8 },
        { id: 9, imageUrl: collection9 },
        { id: 10, imageUrl: collection10 },
        { id: 11, imageUrl: collection5 },
        { id: 12, imageUrl: collection6 },
      ]
    },
    {
      id: 2,
      name: "Fall Shoot 2024",
      coverImage: fallShoot1,
      description: "A reflection on what it means to be 'presentable'. This piece took inspiration from period pieces in its collared neckline, lace overlay, and satin skirt, but is modernized with a second-skin fit. This piece was a group effort made by Sarah Paul, Griffin Schwartz, and Sulan Zhang.",
      models: ["Arwen Chen"],
      images: [
        { id: 1, imageUrl: fallShoot1 },
        { id: 2, imageUrl: fallShoot2 },
        { id: 3, imageUrl: fallShoot3 },
        { id: 4, imageUrl: fallShoot4 }
      ]
    },
    {
      id: 3,
      name: "Spring Shoot 2024",
      coverImage: springShoot1,
      description: "A spring shoot themed 'ghostly bodies'. This sheer godet dress was made from recycled curtains.",
      models: ["Ishya Washington"],
      images: [
        { id: 1, imageUrl: springShoot1 },
        { id: 2, imageUrl: springShoot2 },
        { id: 3, imageUrl: springShoot3 },
        { id: 4, imageUrl: springShoot4 },
        { id: 5, imageUrl: springShoot5 },
        { id: 6, imageUrl: springShoot6 }
      ]
    }
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const openCollection = (collection) => {
    setSelectedCollection(collection);
    document.body.style.overflow = 'hidden';
  };

  const closeCollection = () => {
    setSelectedCollection(null);
    document.body.style.overflow = 'unset';
  };

  const openZoomedImage = (image) => {
    setZoomedImage(image);
  };

  const closeZoomedImage = () => {
    setZoomedImage(null);
  };

  return (
    <div className="apparel-section">
      <h2 className="section-title">Apparel</h2>
      <p className="section-description">
        Check out some of my pieces and collections!
      </p>
      
      <div className="collections-carousel">
        <Slider {...carouselSettings}>
          {collections.map(collection => (
            <div key={collection.id} className="collection-card-wrapper">
              <div 
                className="collection-card"
                onClick={() => openCollection(collection)}
              >
                <div className="collection-image-container">
                  <img src={collection.coverImage} alt={collection.name} />
                  <div className="collection-overlay">
                    <h3>{collection.name}</h3>
                    <p>Click to view collection</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="artist-statement">
        <p>
          My designs are inspired by vintage styles with modern, feminine silhouettes. I love to experiment with different textures and fabrics, especially knitwear, lace, and embroidery. I take much of my inspiration from the natural world.
        </p>
      </div>

      {selectedCollection && (
        <div className="collection-modal" onClick={closeCollection}>
          <div className="collection-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeCollection}>
              ×
            </button>
            
            <div className="collection-detail">
              <div className="collection-header">
                <h2>{selectedCollection.name}</h2>
                <p className="collection-description">{selectedCollection.description}</p>
                
                <div className="collection-credits">
                  <div className="credit-item">
                    <strong>Models:</strong> {selectedCollection.models.join(', ')}
                  </div>
                </div>
              </div>
              
              <div className="collection-images">
                {selectedCollection.images
                  .filter(image => image.id !== 15 && image.id !== 16)
                  .map(image => (
                  <div key={image.id} className="collection-image">
                    <img 
                      src={image.imageUrl} 
                      alt={`${selectedCollection.name} - Image ${image.id}`}
                      onClick={() => openZoomedImage(image)}
                    />
                  </div>
                ))}
                {/* Landscape Images at Bottom */}
                {selectedCollection.images
                  .filter(image => image.id === 15 || image.id === 16)
                  .map(image => (
                  <div key={image.id} className={`collection-image ${image.id === 16 ? 'group-studio' : 'landscape'}`}>
                    <img 
                      src={image.imageUrl} 
                      alt={`${selectedCollection.name} - Image ${image.id}`}
                      onClick={() => openZoomedImage(image)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Zoomed Image Modal */}
      {zoomedImage && (
        <div className="zoom-modal" onClick={closeZoomedImage}>
          <div className="zoom-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="zoom-close-button" onClick={closeZoomedImage}>
              ×
            </button>
            <img 
              src={zoomedImage.imageUrl} 
              alt={`Zoomed view - Image ${zoomedImage.id}`}
              className="zoomed-image"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Apparel; 