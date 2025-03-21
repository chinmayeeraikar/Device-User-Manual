// import React from "react";
// import { Slider } from "@/components/ui/slider"
import MyThreeScene from "@/threescene.tsx";
import { Slider } from "../Controls/Slider.tsx";
import { AppSidebar } from "../Sidebar/AppSidebar";
//import SheetPopUp from "./components/Sidebar/SheetPopUp";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import YourComponent from "../ButtonInfoPopUp.tsx";

export const Home = () => {
  return (
    <div>
      <h1></h1>
      {/* <Slider defaultValue={[3]} max={50} step={1} /> */}
      <div>
        <SidebarProvider className="absolute">
          <AppSidebar />
          {/*<SheetPopUp />*/}
          <SidebarTrigger className="-ml-1 z-25" />
        </SidebarProvider>
      </div>
      <MyThreeScene />
      <YourComponent />
      {/* <div className="w-1/4 absolute inset-x-1/2 -translate-x-1/2 -inset-y-1/7 inset-y-120">
      <Slider />
      </div> */}
    </div>
  );
};
