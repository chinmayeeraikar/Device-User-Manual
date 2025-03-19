// import React from "react";
import "./App.css";
import NavbarRoutes from "./Routes/NavbarRoutes";
// import ThreeScene from "./Scene";
import { AppSidebar } from "./components/Sidebar/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import Scene from "./Scene";
import "./threescene";
import { Loader } from "lucide-react";

const App = () => {
  return (
    <div>
      <SidebarProvider className="absolute">
        <AppSidebar />
        <SidebarTrigger className="-ml-1" />
      </SidebarProvider>
      <NavbarRoutes />
      <loader />
      {/* <ThreeScene /> */}
      {/* <Scene /> */}
    </div>
  );
};

export default App;
