import { useState } from "react";

import "./navbar.scss";
import Dropdown from "../../molecules/Dropdown";
import { useMenuClickAway } from "../../../hooks";

const Navbar = ({ title = "Page Title" }: { title?: string }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const { menuRef } = useMenuClickAway("drop-down", openMenu, setOpenMenu);
  const handleMenuToggle = () => {
    setOpenMenu((currentValue) => !currentValue);
  };

  return (
    <nav>
      <img src="/vectors/chevron-left.svg" alt="back-icon" />
      <h2 className="header-title">{title}</h2>
      <div style={{ overflow: "hidden" }}>
        <img
          data-name="drop-down"
          src="/vectors/more.svg"
          alt="more-icon"
          onClick={handleMenuToggle}
        />
        <Dropdown ref={menuRef} state={openMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
