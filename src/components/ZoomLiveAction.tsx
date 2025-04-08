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
      setZoomAmount(event.detail);
    };

    window.addEventListener("ZOOMDemo", handleLiveZoom);
    
    return () => {
      window.removeEventListener("ZOOMDemo", handleLiveZoom);
    };
  }, []);

  // More dramatic scale calculation - zoomAmount of 100 will be scale 2 (double size)
  // const scale = 1 + (zamt / 100);
  const scale = 1 + (zoomAmount / 100);

  // Function to manually trigger zoom for testing
  const testZoom = (amount : number) => {
    const zoomEvent = new CustomEvent("ZOOMDemo", { detail: amount });
    window.dispatchEvent(zoomEvent);
  };

  return (
    <div className="mt-6">
      {/* Test controls */}
      <div className="mb-4 flex space-x-4">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => testZoom(0)}
        >
          Reset Zoom
        </button>
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => testZoom(50)}
        >
          Zoom 50%
        </button>
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => testZoom(100)}
        >
          Zoom 100%
        </button>
      </div>
      
      {/* Current zoom level display */}
      {/* <div className="mb-2">Current zoom: {zamt}%</div> */}
      <div className="mb-2">Current zoom: {zamt}%</div>
      
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