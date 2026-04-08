'use client';

import { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

export default function MapGlobe() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globeEl = useRef<any>(null);
  const [dimensions, setDimensions] = useState({ width: 400, height: 256 }); // matching h-64 size (256px) but it will be responsive

  useEffect(() => {
    // Auto-rotate
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 1.5;
    }
    
    // Attempt to make responsively sized
    const handleResize = () => {
      // Very basic responsive sizing logic
      const parentNode = document.getElementById('globe-container');
      if (parentNode) {
        setDimensions({
          width: parentNode.offsetWidth,
          height: parentNode.offsetHeight
        });
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="globe-container" className="w-full h-full bg-white/50 relative overflow-hidden flex items-center justify-center">
      <Globe
        ref={globeEl}
        width={dimensions.width}
        height={dimensions.height}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundColor="rgba(255,255,255,0)"
      />
    </div>
  );
}
