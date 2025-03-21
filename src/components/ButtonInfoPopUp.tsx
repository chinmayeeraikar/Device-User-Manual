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
        return <p>This was triggered by the InfoButton</p>;
      case "MediaButton":
        return <p>The Media Button activated this component</p>;
      case "navbar":
        return <p>Navigation menu triggered this display</p>;
      case "sidebar":
        return <p>Sidebar interaction detected</p>;
      default:
        return <p>Triggered by element ID: {triggerElement}</p>;
    }
  };

  console.log("oooooooo");

  return (
    <div className="absolute bottom-0 right-0">
      {isActive && (
        <div className="bg-white p-4 rounded shadow-lg border border-gray-200">
          {renderContentBasedOnTrigger()}
        </div>
      )}
    </div>
  );
};

export default YourComponent;