import React, { useEffect, useState } from "react";
//import { Button } from "./ui/button";

const YourComponent = () => {
  const [isActive, setIsActive] = useState(false);
  const [triggerElement, setTriggerElement] = useState(null);

  useEffect(() => {
    const toggleVisibility = ( event ) => {
      if (event && event.detail) {
        setTriggerElement(event.detail);
        console.log("Event triggered by:", event.detail);
      }
      
      setIsActive((prev) => !prev);
    };

    window.addEventListener("toggleActiveClass", toggleVisibility);

    return () => {
      window.removeEventListener("toggleActiveClass", toggleVisibility);
    };
  }, []);

  const renderContentBasedOnTrigger = () => {
    if (!triggerElement) return <p>No trigger element specified</p>;
    
    switch (triggerElement) {
      case "InfoButton":
        return<div className="bg-yellow-200 h-30 w-150 !p-5 gap-10 rounded shadow-lg border border-gray-200 "> <p><strong>INFO button</strong> Shows or hides information. It incrementally adds information to the screen while clicking pictures. The information shown on screen includes the exposure, f-stop, ISO, Angle tilt, etc.    
         </p></div>;
      case "MediaButton":
        return <div className="bg-yellow-200 h-25 w-150 !p-5 gap-10 rounded shadow-lg border border-gray-200"><p><strong>Media Button</strong> Used to view photo and video gallery. Gallery can be navigated using the arrow button.</p></div>;
      case "MenuButton":
        return <div className="bg-yellow-200 !p-5 gap-10 rounded shadow-lg border border-gray-200"><p><strong>Menu Button</strong> is used to open settings</p></div>;
      case "ONOFF":
        return <div className="bg-yellow-200 !p-5 gap-10 rounded shadow-lg border border-gray-200"><p><strong>ON OFF Button</strong> used to switch on and off the camera.</p></div>;
      case "Wifi":
        return <div className="bg-yellow-200 h-30 w-150 !p-5 gap-10 rounded shadow-lg border border-gray-200"><p><strong>WifiButton</strong> helps us establish a connection between the camera and any mobile device through Wifi. After the camera is connected, we can share files from camera to the mobile or also control camera from mobile</p></div>;
      case "ClickPicture":
        return <div className="bg-yellow-200 !p-5 gap-10 rounded shadow-lg border border-gray-200"><p><strong>ClickPicture Button </strong>This button is used to set focus and Click Images. A light press changes focus object and hard press Clicks picture</p></div>;
      case "SET" :
        return <div className="bg-yellow-200 !p-5 gap-10 rounded shadow-lg border border-gray-200"><p><strong>SET Button </strong>This button has various uses. It is used to select a setting/or image etc. It is also used to apply settings</p></div>
      case "Cylinder015_1":
        return <div className="bg-yellow-200 !p-5 gap-10 rounded shadow-lg border border-gray-200"><p><strong>Video Button </strong>Start / Stop a video shooting</p></div>;
      case "UP":
        return <div className="bg-yellow-200 !p-5 gap-10 rounded shadow-lg border border-gray-200"><p><strong>UP Button </strong>Navigate menu/ Adjust exposure</p></div>;
      case "Down":
        return <div className="bg-yellow-200 !p-5 gap-10 rounded shadow-lg border border-gray-200"><p><strong>DOWN Button </strong>Navigate pages/ Delete media</p></div>;
      case "Left":
        return <div className="bg-yellow-200 !p-5 gap-10 rounded shadow-lg border border-gray-200"><p><strong>LEFT Button </strong>Navigate pages/ Toggle manual focus and macro mode</p></div>;
      case "Right":
        return <div className="bg-yellow-200 !p-5 gap-10 rounded shadow-lg border border-gray-200"><p><strong>RIGHT Button </strong>Navigate pages/ Toggle flash</p></div>;          
      default:
        return ;
    }
  };

  //console.log("oooooooo");

  return (
    <div className="fixed inset-x-0 bottom-10 flex justify-center ">
      {isActive && (
        // 
          <p className="p-100 text-centre">
          {renderContentBasedOnTrigger()}
          </p>
        // </div>
      )}
    </div>
  );
};

export default YourComponent;