// import React from "react";
import "./App.css";
import NavbarRoutes from "./Routes/NavbarRoutes";
import MyThree from "./threescene.tsx";
import YourComponent from "./components/ButtonInfoPopUp";

const App = () => {
  return (
    <div>
      <NavbarRoutes />
      <MyThree />
      <YourComponent />
    </div>
  );
};

export default App;
