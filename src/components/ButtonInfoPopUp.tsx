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

  console.log("oooooooo");

  return (
    <div className="absolute bottom-0 right-0">
      {isActive && (
        <div>
          <p>This is your pop-up component!</p>
          {triggerElement && <p>Triggered by element ID: {triggerElement}</p>}
        </div>
      )}
    </div>
  );
};

export default YourComponent;