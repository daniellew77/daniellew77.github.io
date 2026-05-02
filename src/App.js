import { useEffect } from 'react';
import { HeroCenterBlobSunset, BirdPeekers } from './heroes';
import { SectionOverlay } from './sections';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('serif-source');
    return () => document.documentElement.classList.remove('serif-source');
  }, []);

  return (
    <>
      <div style={{
        position: 'fixed', inset: 0,
        overflow: 'hidden',
      }}>
        <HeroCenterBlobSunset />
      </div>

      <SectionOverlay animation="origin" backgroundUrl="assets/sunset_background.jpeg" />

      <BirdPeekers />
    </>
  );
}

export default App;
