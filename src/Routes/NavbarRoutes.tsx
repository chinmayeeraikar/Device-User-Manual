// src/Routes/AppRoutes.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../components/Pages/Home";
import { About } from "../components/Pages/About";
import { Contact } from "../components/Pages/Contact";
import NavBar from "../components/Navbar/NavBar";

function NavbarRoutes() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default NavbarRoutes;
