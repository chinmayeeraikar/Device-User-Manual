import React, { useEffect, useState, useRef } from "react";

export type ZoomLiveActionProps = {};

const ZoomLiveAction: React.FC = () => {
  const [zoomAmount, setZoomAmount] = useState(0);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleLiveZoom = (event) => {
      setZoomAmount(event.detail * 100);
    };

    window.addEventListener("ZOOMDemo", handleLiveZoom);
    return () => window.removeEventListener("ZOOMDemo", handleLiveZoom);
  }, []);

  const scale = 1 + zoomAmount / 100;

  return (
    <div className="mt-6">
      <div
        ref={containerRef}
        className="rounded-lg overflow-hidden"
        style={{ width: "100%", height: "auto", position: "relative" }}
      >
        <video
          ref={videoRef}
          width="100%"
          height="auto"
          controls
          loop
          autoPlay
          muted
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center center",
          }}
        >
          <source src="../../../assets/V1.mp4.mov" type="video/mp4" /> {/* Local path */}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default ZoomLiveAction;
