import React, { useEffect, useState } from "react";
//import { Button } from "./ui/button";

const YourComponent = () => {
  const [isActive, setIsActive] = useState(false);
  const [triggerElement, setTriggerElement] = useState(null);

  useEffect(() => {
    // Modify the event handler to accept the event parameter
    const toggleVisibility = (event) => {
      // Access detail values from the event
      if (event && event.detail) {
        // Store the trigger element in state if needed
        setTriggerElement(event.detail);
        console.log("Event triggered by:", event.detail);
        
        // Access any other detail properties
      }
      
      // Toggle the active state as before
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