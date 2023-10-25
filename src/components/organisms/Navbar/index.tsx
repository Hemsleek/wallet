import { useState } from "react";

import "./navbar.scss";
import Dropdown from "../../molecules/Dropdown";

const Navbar = ({ title = "Page Title" }: { title?: string }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuToggle = () => {
    setOpenMenu((currentValue) => !currentValue);
  };
  return (
    <nav>
      <img src="/vectors/chevron-left.svg" alt="back-icon" />
      <h2 className="header-title">{title}</h2>
      <div style={{ overflow: "hidden" }} onClick={handleMenuToggle}>
        <img src="/vectors/more.svg" alt="more-icon" />
        <Dropdown state={openMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
