import React, { useEffect, useState } from "react";
//import { Button } from "./ui/button";

const YourComponent = () => {
  const [isActive, setIsActive] = useState(false);
  const [triggerElement, setTriggerElement] = useState(null);

  useEffect(() => {
    const toggleVisibility = (event) => {
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
        return <p>The INFO button shows or hides information. It incrementally adds<br></br>information to the screen while clicking pictures. The information shown on<br></br>screen includes the exposure, f-stop, ISO, Angle tilt, etc.    
         </p>;
      case "MediaButton":
        return <p>The Media Button activated this component</p>;
      case "MenuButton":
        return <p>MenuButton for settings</p>;
      case "sidebar":
        return <p>Sidebar interaction detected</p>;
      default:
        return <p></p>;
    }
  };

  console.log("oooooooo");

  return (
    <div className="absolute bottom-20 right-1/2">
      {isActive && (
        <div className="bg-yellow-200 p-10 gap-10 rounded shadow-lg border border-gray-200">
          <p className="p-100 text-centre">
          {renderContentBasedOnTrigger()}
          </p>
        </div>
      )}
    </div>
  );
};

export default YourComponent;