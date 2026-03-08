import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./componens/Navbar.jsx";
import Footer from "./componens/Footer.jsx";
import "remixicon/fonts/remixicon.css";
import { NavList, NavItem } from "./componens/NavList.jsx";
import { Preloader } from "./componens/Preloader.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Preloader />
    <div className="container mx-auto px-3">
      <Navbar />
      <App />
      <Footer />
      <NavList />
      <NavItem />
    </div>
  </StrictMode>,
);
