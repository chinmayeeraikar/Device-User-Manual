import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const YourComponent = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsActive((prev) => !prev);
    };

    window.addEventListener("toggleActiveClass", toggleVisibility);

    return () => {
      window.removeEventListener("toggleActiveClass", toggleVisibility);
    };
  }, []);

console.log("oooooooo")

  return (
    <div className="absolute bottom-0 right-0">
      {isActive && (
        <div>
          <p>This is your pop-up component!</p>
        </div>
      )}
    </div>
    // <div>
    //     <Button className="absolute bottom-0 right-0">
    //         Hiiiiii
    //     </Button>
    // </div>
  );
};

export default YourComponent;

