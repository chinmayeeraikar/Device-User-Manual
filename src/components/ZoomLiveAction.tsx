import React, { useEffect, useState, useRef } from "react";

const ZoomLiveAction = () => {
  const [zoomAmount, setZoomAmount] = useState(0);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  let zamt=0;
  
  useEffect(() => {
    const handleLiveZoom = (event) => {
      console.log("Zoom event received with value:", event.detail);
      zamt=event.detail
      setZoomAmount(event.detail*100);
    };

    window.addEventListener("ZOOMDemo", handleLiveZoom);
    
    return () => {
      window.removeEventListener("ZOOMDemo", handleLiveZoom);
    };
  }, []);

  // More dramatic scale calculation - zoomAmount of 100 will be scale 2 (double size)
  // const scale = 1 + (zamt / 100);
  const scale = 1 + (zoomAmount / 100);

  return (
    <div className="mt-6">

      
      {/* Current zoom level display */}
      {/* <div className="mb-2">Current zoom: {zamt}%</div> */}
      {/* <div className="mb-2">Current zoom: {zoomAmount%10}%</div> */}
      
      {/* Video container */}
      <div 
        ref={containerRef}
        className="rounded-lg overflow-hidden" 
        style={{ 
          width: "100%", 
          height: "auto", 
          position: "relative",
          border: "2px solid red" // Visual indicator for container boundaries
        }}
      >
        <video 
          ref={videoRef}
          width="100%" 
          height="auto" 
          controls 
          autoPlay 
          muted
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center center"
          }}
        >
          <source src="../../assets/V1.mp4.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default ZoomLiveAction;