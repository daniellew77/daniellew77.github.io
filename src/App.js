import { useEffect, useRef, useState } from 'react';
import { HeroCenterBlobSunset2, BirdPeekers } from './heroes';
import { SectionOverlay } from './sections';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('serif-source');
    return () => document.documentElement.classList.remove('serif-source');
  }, []);

  const stageRef = useRef(null);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const fit = () => {
      const W = window.innerWidth, H = window.innerHeight;
      // Cover behaviour — stage scales to fully cover the viewport, no letterbox bars.
      // Content may crop on extreme aspect ratios; padding inside the stage absorbs typical cases.
      setScale(Math.max(W / 1280, H / 760));
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);

  return (
    <>
      <div style={{
        position:'fixed', inset:0,
        display:'grid', placeItems:'center', overflow:'hidden',
      }}>
        <div ref={stageRef} style={{
          width: 1280, height: 760,
          transform: `scale(${scale})`, transformOrigin:'center',
        }}>
          <HeroCenterBlobSunset2 />
        </div>
      </div>

      <SectionOverlay animation="origin" backgroundUrl="assets/sunset_background.jpeg" />

      <BirdPeekers />
    </>
  );
}

export default App;
