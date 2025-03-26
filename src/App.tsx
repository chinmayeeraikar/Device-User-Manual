// import React from "react";
import "./App.css";
import NavbarRoutes from "./Routes/NavbarRoutes";
// import { AppSidebar } from "./components/Sidebar/AppSidebar";
// import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
// import MyThree from "./threescene.tsx"
// import YourComponent from './components/ButtonInfoPopUp';

const App = () => {
  return (
    <div>
      {/* <SidebarProvider className="absolute">
        <AppSidebar />
        <SidebarTrigger className="-ml-1" />
      </SidebarProvider> */}
      <NavbarRoutes />
      {/* <MyThree /> 
      <YourComponent/> */}
    </div>
  );
};

export default App;
