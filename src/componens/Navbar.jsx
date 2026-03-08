import React from "react";

import { NavList, NavItem } from "./NavList";

const Navbar = () => {
  const [active] = React.useState(false); // Contoh state

  return (
    <div className="navbar py-5 flex items-center justify-between capitalize">
      <div className="logo">
        <h1 className="text-base font-bold p-1 md:text-2xl lg:text-2xl">
          portfolio
        </h1>
      </div>

      {/* Sekarang ini bisa dipanggil langsung tanpa import */}
      <NavList active={active}>
        <NavItem href="#">beranda</NavItem>
        <NavItem href="#">project</NavItem>
        <NavItem href="#">contact</NavItem>
        <NavItem href="#">about</NavItem>
      </NavList>
    </div>
  );
};

export default Navbar;
