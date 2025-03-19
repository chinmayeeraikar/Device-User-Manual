// import React from "react";
import "./App.css";
import NavbarRoutes from "./Routes/NavbarRoutes";
//import Scene from "./Scene.js";
import { AppSidebar } from "./components/Sidebar/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { loader } from "./threescene.js"

const App = () => {
  return (
    <div>
      <SidebarProvider className="absolute">
        <AppSidebar />
        {/* <SheetPopUp /> */}
        <SidebarTrigger className="-ml-1" />
      </SidebarProvider>
      <NavbarRoutes />
      <loader />
    </div>
  );
};

export default App;
