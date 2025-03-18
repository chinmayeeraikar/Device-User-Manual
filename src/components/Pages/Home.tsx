// import React from "react";
// import { Slider } from "@/components/ui/slider"
import { Slider } from "../Controls/Slider.tsx";

export const Home = () => {
  return (
    <div>
      <h1></h1>
      {/* <Slider defaultValue={[3]} max={50} step={1} /> */}
      <div className="w-1/4 absolute inset-x-1/2 -translate-x-1/2 -inset-y-1/7 inset-y-120">
      <Slider />
      </div>
    </div>
  );
};
