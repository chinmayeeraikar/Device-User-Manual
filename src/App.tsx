// import React from "react";
import "./App.css";
import NavbarRoutes from "./Routes/NavbarRoutes";
//import { AppSidebar } from "./components/Sidebar/AppSidebar";
//import SheetPopUp from "./components/Sidebar/SheetPopUp";
//import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";

const App = () => {
  return (
    <div>
      {/*<SidebarProvider className="absolute">
        <AppSidebar />
        <SheetPopUp />
        <SidebarTrigger className="-ml-1" />
      </SidebarProvider>*/}
      <NavbarRoutes />
    </div>
  );
};

export default App;
